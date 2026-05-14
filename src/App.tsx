import { CTABanner } from './components/CTABanner'
import { FAQ } from './components/FAQ'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { GetStarted } from './components/GetStarted'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Privacy } from './components/Privacy'
import { Signoff } from './components/Signoff'
import { useHeroWashParallax } from './hooks/useHeroWashParallax'
import { useReveal } from './hooks/useReveal'
import { useTheme } from './hooks/useTheme'

export function App() {
  const { theme, toggle } = useTheme()
  useReveal()
  useHeroWashParallax()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <Hero />
      <Features />
      <Privacy />
      <GetStarted />
      <FAQ />
      <CTABanner />
      <Signoff />
      <Footer />
    </>
  )
}
