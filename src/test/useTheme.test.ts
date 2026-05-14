import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useTheme } from '../hooks/useTheme'

/**
 * Tests for useTheme — the hook that drives the light/dark theme toggle.
 *
 * Why it matters: the visual theme is a user preference that must survive a
 * page reload (otherwise dark-mode users get a flash of light every visit) and
 * must propagate to the <html data-theme="…"> attribute, because the entire
 * design system (CSS custom properties for parchment/ink/forest/etc.) keys off
 * that single attribute. If either contract slips, the whole site visibly
 * regresses.
 *
 * For a junior contributor: a "hook test" here uses React Testing Library's
 * `renderHook` to render the hook in isolation and inspect/manipulate its
 * return value. `act()` wraps state updates so React can flush effects before
 * we assert on the DOM.
 *
 * Coverage:
 *   1. Defaults to 'light' when no preference is stored.
 *   2. Setting the theme writes it to localStorage AND to data-theme on <html>.
 *   3. A previously stored preference is read on first mount.
 */
describe('useTheme', () => {
  it('defaults to light and applies data-theme attribute', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('persists the chosen theme to localStorage and updates the DOM', () => {
    const { result } = renderHook(() => useTheme())

    act(() => result.current.setTheme('dark'))

    expect(result.current.theme).toBe('dark')
    expect(window.localStorage.getItem('nopy-theme')).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('reads a previously stored preference on mount', () => {
    window.localStorage.setItem('nopy-theme', 'dark')
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('dark')
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('toggle() flips light ↔ dark', () => {
    const { result } = renderHook(() => useTheme())
    expect(result.current.theme).toBe('light')

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('dark')

    act(() => result.current.toggle())
    expect(result.current.theme).toBe('light')
  })
})
