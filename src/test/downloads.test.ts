import { describe, expect, it } from 'vitest'
import {
  DOWNLOAD_GROUPS,
  FALLBACK_VERSION,
  downloadUrl,
  findBuild,
  parseReleaseTag,
} from '../data/downloads'

/**
 * Tests for the downloads data module — the single source of truth for which
 * binaries the /downloads page offers and the GitHub URLs they point at.
 *
 * Why it matters: a wrong URL means a broken download button for a non-technical
 * user with no way to recover. The version normally arrives live from the GitHub
 * releases API (useLatestVersion) and is woven into both the release path
 * (vX.Y.Z) and most filenames, EXCEPT the .rpm, which uses an irregular scheme
 * (dashes and a -1 build tag). That irregular name is the easiest thing to get
 * wrong on a version bump, so it gets its own assertion.
 *
 * For a junior contributor: `downloadUrl` takes a filename template containing
 * the token "{v}" and swaps in the given version (defaulting to
 * FALLBACK_VERSION when the API hasn't answered), then prefixes the release
 * base URL.
 */
describe('downloadUrl', () => {
  it('builds a regular asset URL, substituting the version into path and filename', () => {
    // Input: the Apple Silicon dmg template plus an explicit version (as supplied
    // by the live-version hook). Expected: that version appears twice — in the
    // release path and in the filename.
    const url = downloadUrl('nopy_{v}_aarch64.dmg', '0.9.0')
    expect(url).toBe(
      'https://github.com/JoshuaHarris391/nopy/releases/download/v0.9.0/nopy_0.9.0_aarch64.dmg',
    )
  })

  it('falls back to FALLBACK_VERSION when no version is supplied', () => {
    // Before the GitHub API answers (or if it never does), links must still point
    // at a real release rather than rendering broken.
    const url = downloadUrl('nopy_{v}_aarch64.dmg')
    expect(url).toBe(
      `https://github.com/JoshuaHarris391/nopy/releases/download/v${FALLBACK_VERSION}/nopy_${FALLBACK_VERSION}_aarch64.dmg`,
    )
  })

  it('builds the irregularly-named .rpm URL correctly', () => {
    // The .rpm breaks the underscore convention: nopy-<v>-1.x86_64.rpm. This guards
    // against anyone "normalising" the template and silently breaking Fedora/RHEL.
    const url = downloadUrl('nopy-{v}-1.x86_64.rpm', '0.9.0')
    expect(url).toBe(
      'https://github.com/JoshuaHarris391/nopy/releases/download/v0.9.0/nopy-0.9.0-1.x86_64.rpm',
    )
  })
})

/**
 * parseReleaseTag turns a raw GitHub release tag into the bare version that
 * downloadUrl needs, or null when the tag isn't a plain release.
 *
 * Why it matters: this is the trust boundary between our URLs and whatever the
 * GitHub API returns. If a draft, pre-release, or oddly-named tag slipped
 * through, every download button on the site would point at a non-existent
 * asset — returning null instead keeps the site on its known-good fallback.
 */
describe('parseReleaseTag', () => {
  it('strips the leading v from a normal release tag', () => {
    expect(parseReleaseTag('v0.8.0')).toBe('0.8.0')
  })

  it('accepts a bare semver tag without the v prefix', () => {
    expect(parseReleaseTag('1.2.3')).toBe('1.2.3')
  })

  it('rejects anything that is not a plain X.Y.Z release', () => {
    // Pre-releases, partial versions, junk, and non-string API surprises all
    // return null so the caller keeps the fallback version.
    expect(parseReleaseTag('v0.8.0-beta.1')).toBeNull()
    expect(parseReleaseTag('v0.8')).toBeNull()
    expect(parseReleaseTag('latest')).toBeNull()
    expect(parseReleaseTag(undefined)).toBeNull()
  })
})

describe('findBuild', () => {
  it('maps each detect key to the matching build, and returns nothing for unknown', () => {
    // A detected Mac is recommended the Apple Silicon dmg (every Mac since 2020 is ARM).
    expect(findBuild('mac-arm')?.filename).toBe('nopy_{v}_aarch64.dmg')
    // A detected Intel Mac is recommended the Intel dmg.
    expect(findBuild('mac-intel')?.filename).toBe('nopy_{v}_x64.dmg')
    // A detected Linux user is recommended the AppImage (works on any distro).
    expect(findBuild('linux')?.filename).toBe('nopy_{v}_amd64.AppImage')
    // Windows / phones / anything unrecognised get no highlight.
    expect(findBuild('unknown')).toBeUndefined()
  })

  it('every recommended build resolves to a real entry in DOWNLOAD_GROUPS', () => {
    // Guards against a detect key that points at a build that no longer exists.
    const allBuilds = DOWNLOAD_GROUPS.flatMap((group) => group.builds)
    for (const key of ['mac-arm', 'mac-intel', 'linux'] as const) {
      expect(allBuilds).toContain(findBuild(key))
    }
  })
})
