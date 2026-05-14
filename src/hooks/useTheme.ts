import { useCallback, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'nopy-theme'

function readInitial(): Theme {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage may be unavailable (private mode, SSR)
  }
  return 'light'
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readInitial)

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // best-effort persistence
    }
  }, [])

  const toggle = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [theme, setTheme])

  return { theme, setTheme, toggle }
}
