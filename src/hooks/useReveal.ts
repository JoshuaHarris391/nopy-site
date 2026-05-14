import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Mirrors the reference IntersectionObserver reveal system:
 *   - assigns sequential --stagger CSS variables to .reveal children inside [data-reveal-group]
 *   - observes every .reveal element once; on first intersection adds .in and unobserves
 *   - bypasses entirely under prefers-reduced-motion (adds .in immediately so content is visible)
 */
export function useReveal(): void {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (typeof document === 'undefined') return

    // Stagger groups: numbered indices for cascading delays
    document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
      const kids = group.querySelectorAll<HTMLElement>('.reveal')
      kids.forEach((el, i) => {
        el.setAttribute('data-stagger-index', String(i))
        el.style.setProperty('--stagger', String(i))
      })
    })

    if (reduced) {
      document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el)
    })

    return () => io.disconnect()
  }, [reduced])
}
