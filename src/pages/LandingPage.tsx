import { CTABanner } from '../components/CTABanner'
import { FAQ } from '../components/FAQ'
import { Features } from '../components/Features'
import { GetStarted } from '../components/GetStarted'
import { Hero } from '../components/Hero'
import { Privacy } from '../components/Privacy'
import { Signoff } from '../components/Signoff'
import { useHeroWashParallax } from '../hooks/useHeroWashParallax'
import { useReveal } from '../hooks/useReveal'

/**
 * The journaler-facing landing page ("/"). The scroll-reveal and hero-parallax
 * effects are wired here (rather than in the shared shell) so they re-run when
 * the route mounts this page and don't fire on the developer page.
 */
export function LandingPage() {
  useReveal()
  useHeroWashParallax()

  return (
    <>
      <Hero />
      <Features />
      <Privacy />
      <GetStarted />
      <FAQ />
      <CTABanner />
      <Signoff />
    </>
  )
}
