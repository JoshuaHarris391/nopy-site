import { useEffect, useState } from 'react'
import { FALLBACK_VERSION, parseReleaseTag } from '../data/downloads'

const LATEST_RELEASE_API = 'https://api.github.com/repos/JoshuaHarris391/nopy/releases/latest'

// One fetch per page load, shared by every component that asks (Hero and the
// downloads page both do). The promise is cached, not just the result, so two
// components mounting in the same tick still produce a single request.
let pending: Promise<string | null> | null = null
let resolved: string | null = null

function fetchLatestVersion(): Promise<string | null> {
  pending ??= fetch(LATEST_RELEASE_API, {
    headers: { Accept: 'application/vnd.github+json' },
  })
    .then((res) => (res.ok ? res.json() : null))
    .then((release) => parseReleaseTag(release?.tag_name))
    .catch(() => null)
    .then((version) => {
      resolved = version
      return version
    })
  return pending
}

/**
 * The latest nopy release version, live from the GitHub releases API.
 * Renders FALLBACK_VERSION immediately and upgrades once the API answers;
 * on any failure (offline, rate limit, odd tag) the fallback simply stays.
 */
export function useLatestVersion(): string {
  const [version, setVersion] = useState(resolved ?? FALLBACK_VERSION)

  useEffect(() => {
    let active = true
    fetchLatestVersion().then((latest) => {
      if (active && latest) setVersion(latest)
    })
    return () => {
      active = false
    }
  }, [])

  return version
}
