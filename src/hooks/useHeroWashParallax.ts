import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * rAF-throttled parallax for the .hero-wash element, paused via IntersectionObserver
 * whenever the hero scrolls out of view. Speed ratio: 0.18× scroll position.
 */
export function useHeroWashParallax(): void {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced || typeof document === 'undefined') return

    const wash = document.querySelector<HTMLElement>('.hero-wash')
    const hero = document.querySelector<HTMLElement>('.hero')
    if (!wash || !hero) return

    let ticking = false
    let heroVisible = true

    const heroIO = new IntersectionObserver(
      ([e]) => {
        heroVisible = e.isIntersecting
      },
      { threshold: 0 },
    )
    heroIO.observe(hero)

    const update = () => {
      wash.style.transform = `translate3d(0, ${window.scrollY * 0.18}px, 0)`
      ticking = false
    }

    const onScroll = () => {
      if (!heroVisible || ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      heroIO.disconnect()
    }
  }, [reduced])
}
