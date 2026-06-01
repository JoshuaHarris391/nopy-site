import { describe, expect, it } from 'vitest'
import { DOWNLOAD_GROUPS, VERSION, downloadUrl, findBuild } from '../data/downloads'

/**
 * Tests for the downloads data module — the single source of truth for which
 * binaries the /downloads page offers and the GitHub URLs they point at.
 *
 * Why it matters: a wrong URL means a broken download button for a non-technical
 * user with no way to recover. The version lives in one constant and is woven into
 * both the release path (vX.Y.Z) and most filenames, EXCEPT the .rpm, which uses an
 * irregular scheme (dashes and a -1 build tag). That irregular name is the easiest
 * thing to get wrong on a version bump, so it gets its own assertion.
 *
 * For a junior contributor: `downloadUrl` takes a filename template containing the
 * token "{v}" and swaps in VERSION, then prefixes the release base URL.
 */
describe('downloadUrl', () => {
  it('builds a regular asset URL, substituting the version into path and filename', () => {
    // Input: the Apple Silicon dmg template. Expected: version appears twice.
    const url = downloadUrl('nopy_{v}_aarch64.dmg')
    expect(url).toBe(
      `https://github.com/JoshuaHarris391/nopy/releases/download/v${VERSION}/nopy_${VERSION}_aarch64.dmg`,
    )
  })

  it('builds the irregularly-named .rpm URL correctly', () => {
    // The .rpm breaks the underscore convention: nopy-<v>-1.x86_64.rpm. This guards
    // against anyone "normalising" the template and silently breaking Fedora/RHEL.
    const url = downloadUrl('nopy-{v}-1.x86_64.rpm')
    expect(url).toBe(
      `https://github.com/JoshuaHarris391/nopy/releases/download/v${VERSION}/nopy-${VERSION}-1.x86_64.rpm`,
    )
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
