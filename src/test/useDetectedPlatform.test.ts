import { afterEach, describe, expect, it } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useDetectedPlatform } from '../hooks/useDetectedPlatform'

/**
 * Tests for useDetectedPlatform — the hook that guesses the visitor's OS so the
 * downloads page can highlight "Recommended for you".
 *
 * Why it matters: getting this wrong points a non-technical visitor at the wrong
 * installer. The one fact worth pinning down is the deliberate compromise on Macs:
 * browsers report "Intel Mac OS X" even on Apple Silicon, so we can't distinguish
 * the two. Because every Mac since late 2020 is Apple Silicon, ANY Mac is mapped to
 * 'mac-arm', and the page shows both Mac options so an Intel user can self-select.
 *
 * For a junior contributor: the hook reads navigator.userAgent at render time. We
 * fake that string per test with Object.defineProperty, then render the hook in
 * isolation with renderHook and read its return value.
 */
function stubUserAgent(value: string) {
  // Pin both fields the hook reads. We blank navigator.platform so detection is
  // driven solely by the userAgent string under test, regardless of jsdom defaults.
  Object.defineProperty(window.navigator, 'userAgent', { value, configurable: true })
  Object.defineProperty(window.navigator, 'platform', { value: '', configurable: true })
}

describe('useDetectedPlatform', () => {
  afterEach(() => {
    // Restore a neutral userAgent so tests don't leak into each other.
    stubUserAgent('test')
  })

  it('maps any Mac to Apple Silicon, since the chip is not browser-detectable', () => {
    stubUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36')
    const { result } = renderHook(() => useDetectedPlatform())
    expect(result.current).toBe('mac-arm')
  })

  it('detects Linux', () => {
    stubUserAgent('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36')
    const { result } = renderHook(() => useDetectedPlatform())
    expect(result.current).toBe('linux')
  })

  it('returns unknown for phones — there is no desktop build for them', () => {
    stubUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15')
    const { result } = renderHook(() => useDetectedPlatform())
    expect(result.current).toBe('unknown')
  })

  it('returns unknown for Windows, so the full list shows with no highlight', () => {
    stubUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
    const { result } = renderHook(() => useDetectedPlatform())
    expect(result.current).toBe('unknown')
  })
})
