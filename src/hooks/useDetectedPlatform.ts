import { useState } from 'react'
import type { DetectKey } from '../data/downloads'

/**
 * Best-effort OS detection for choosing which download to recommend.
 *
 * Browsers can't reliably tell Apple Silicon from Intel Macs: navigator.platform
 * reports "MacIntel" on both, and the userAgent says "Intel Mac OS X" even on M-series
 * machines. Since every Mac since late 2020 is Apple Silicon, we recommend the Apple
 * Silicon build for any Mac and rely on the page to show both Mac options clearly so an
 * Intel user can self-select. Phones report "unknown" — there's no desktop build for them.
 */
function detect(): DetectKey {
  if (typeof navigator === 'undefined') return 'unknown'
  const haystack = `${navigator.userAgent || ''} ${navigator.platform || ''}`.toLowerCase()

  if (/iphone|ipad|ipod|android/.test(haystack)) return 'unknown'
  if (/mac/.test(haystack)) return 'mac-arm' // default Macs to Apple Silicon (see above)
  if (/linux/.test(haystack)) return 'linux'
  return 'unknown' // Windows and everything else
}

/**
 * Returns the visitor's detected platform key. Uses a lazy initializer (matching
 * usePrefersReducedMotion) so the value is resolved once on first render with no
 * re-render flash; the typeof-navigator guard keeps it safe outside the browser.
 */
export function useDetectedPlatform(): DetectKey {
  const [key] = useState<DetectKey>(detect)
  return key
}
