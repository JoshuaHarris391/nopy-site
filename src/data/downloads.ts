/**
 * Single source of truth for the current release. Bump VERSION once per release:
 * the filenames below carry a {v} token that is swapped for VERSION, so both the
 * URL path (vX.Y.Z) and the version baked into each filename stay in sync. Each
 * build stores its own filename template because the .rpm uses an irregular
 * scheme (dashes and a -1 build tag) that can't be derived from arch alone.
 */
export const VERSION = '0.7.0'

const RELEASE_BASE = 'https://github.com/JoshuaHarris391/nopy/releases/download'

/** Builds a GitHub release asset URL from a filename template, swapping {v} for VERSION. */
export function downloadUrl(filenameTemplate: string): string {
  const filename = filenameTemplate.split('{v}').join(VERSION)
  return `${RELEASE_BASE}/v${VERSION}/${filename}`
}

/** Stable keys used to match the auto-detected platform to a recommended build. */
export type DetectKey = 'mac-arm' | 'mac-intel' | 'linux' | 'unknown'

export interface Build {
  /** Button headline — plain language, the action a non-technical person scans for. */
  label: string
  /** One short line answering "is this the one for me?" */
  help: string
  /** Filename template; {v} is replaced with VERSION by downloadUrl(). */
  filename: string
  /** Auto-detection key. Omit for builds that are never auto-recommended. */
  detect?: DetectKey
}

export interface PlatformGroup {
  /** Group heading, e.g. "macOS". */
  os: string
  builds: Build[]
}

export const DOWNLOAD_GROUPS: PlatformGroup[] = [
  {
    os: 'macOS',
    builds: [
      {
        label: 'macOS, Apple Silicon',
        help: 'For M1, M2, M3 and M4 Macs. Most Macs from 2020 on.',
        filename: 'nopy_{v}_aarch64.dmg',
        detect: 'mac-arm',
      },
      {
        label: 'macOS, Intel',
        help: 'For older Intel Macs from before 2020.',
        filename: 'nopy_{v}_x64.dmg',
        detect: 'mac-intel',
      },
    ],
  },
  {
    os: 'Linux',
    builds: [
      {
        label: 'Linux, any distro',
        help: 'The AppImage. One file that runs anywhere — make it executable and open it.',
        filename: 'nopy_{v}_amd64.AppImage',
        // The AppImage is the safest pick for an auto-detected Linux user since we
        // can't know their distro, so it carries the 'linux' recommendation key.
        detect: 'linux',
      },
      {
        label: 'Linux, Debian or Ubuntu',
        help: 'The .deb package. Also works on Mint and Pop!_OS.',
        filename: 'nopy_{v}_amd64.deb',
      },
      {
        label: 'Linux, Fedora or RHEL',
        help: 'The .rpm package. Also openSUSE.',
        filename: 'nopy-{v}-1.x86_64.rpm',
      },
    ],
  },
]

/** Finds the build matching a detect key, for the "Recommended for you" highlight. */
export function findBuild(key: DetectKey): Build | undefined {
  if (key === 'unknown') return undefined
  return DOWNLOAD_GROUPS.flatMap((group) => group.builds).find((build) => build.detect === key)
}
