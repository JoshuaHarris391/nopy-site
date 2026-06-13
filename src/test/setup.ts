import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => {
  cleanup()
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
})

// jsdom doesn't ship matchMedia — every hook that checks prefers-reduced-motion
// or uses MediaQueryList must see something callable.
if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  })
}

// IntersectionObserver isn't in jsdom; provide a minimal stub
class IO {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}
if (!('IntersectionObserver' in window)) {
  // @ts-expect-error stubbing global
  window.IntersectionObserver = IO
}

// jsdom's window.scrollTo isn't implemented; the router's ScrollToTop calls it.
vi.stubGlobal('scrollTo', vi.fn())

// useLatestVersion fetches the GitHub releases API on mount. Tests must never
// hit the real network, so fetch answers "not ok" and the hook stays on its
// hardcoded fallback version — which is also what the assertions expect.
vi.stubGlobal(
  'fetch',
  vi.fn(() => Promise.resolve({ ok: false } as Response)),
)
