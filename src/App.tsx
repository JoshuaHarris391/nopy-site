import { useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { DeveloperPage } from './pages/DeveloperPage'
import { DownloadsPage } from './pages/DownloadsPage'
import { LandingPage } from './pages/LandingPage'
import { useTheme } from './hooks/useTheme'

export function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  )
}

/**
 * Shared chrome (Nav + Footer) wrapped around the routed pages. Exported without
 * the Router so tests can mount it under a MemoryRouter at any path.
 */
export function AppShell() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <ScrollToTop />
      <Nav theme={theme} onToggleTheme={toggle} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/developers" element={<DeveloperPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

/**
 * On navigation, jump to the top of the page — unless the URL carries a hash
 * anchor, in which case the browser's native anchor scrolling should win (so the
 * "/#features"-style links from the developer page land on the right section).
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
