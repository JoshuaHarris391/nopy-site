import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from '../App'

/**
 * Smoke test for the top-level App composition.
 *
 * Why it matters: the landing page is a single React tree composing every major
 * section (Nav, Hero, Features, Privacy, GetStarted, FAQ, CTABanner, Signoff,
 * Footer). If any of those components throws on render — a typo in a data file,
 * a hook misuse, a missing import — the page is broken for every visitor.
 *
 * This test guards against that whole class of regressions by mounting <App />
 * in jsdom and asserting that recognisable copy from the first and last
 * sections is present in the DOM. We deliberately avoid asserting style or
 * exact layout (jsdom doesn't compute either) — only that the component tree
 * renders and the user-visible text is there.
 */
describe('App', () => {
  it('renders the hero title and footer colophon without crashing', () => {
    render(<App />)

    // Hero title — split across nodes due to <br /> + <em>, so test fragments.
    expect(screen.getByText(/Write privately\. Reflect deeply\./)).toBeInTheDocument()
    expect(screen.getByText(/Own everything\./)).toBeInTheDocument()

    // Footer end-of-page colophon — confirms render reached the last section.
    expect(screen.getByText(/set in Fraunces/)).toBeInTheDocument()
  })

  it('exposes a theme toggle button labelled for assistive tech', () => {
    render(<App />)
    expect(screen.getByLabelText(/toggle light and dark/i)).toBeInTheDocument()
  })
})
