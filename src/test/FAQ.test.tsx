import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FAQ } from '../components/FAQ'

/**
 * Behavioural test for the FAQ accordion.
 *
 * Why it matters: the FAQ is the only interactive control on the page besides
 * the theme toggle and code tabs. Its open/close state lives in component
 * state and drives both the CSS class (`.faq-item.open` → expands max-height)
 * and the `aria-expanded` attribute on the question button. Both are
 * load-bearing — screen-reader users rely on the ARIA, sighted users rely on
 * the visual collapse — so a regression in either should fail this test.
 *
 * For a new contributor: clicking the question button toggles `open` on that
 * item. We assert the ARIA attribute (the user-visible contract) rather than
 * the CSS class (an implementation detail). A second click should collapse
 * the item back to `aria-expanded="false"`.
 */
describe('FAQ', () => {
  it('toggles aria-expanded when a question is clicked', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const firstQuestion = screen.getByRole('button', {
      name: /Do I need an Anthropic API key/i,
    })

    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')

    await user.click(firstQuestion)
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'true')

    await user.click(firstQuestion)
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false')
  })

  it('allows multiple items to be open at once', async () => {
    const user = userEvent.setup()
    render(<FAQ />)

    const q1 = screen.getByRole('button', { name: /Do I need an Anthropic API key/i })
    const q2 = screen.getByRole('button', { name: /Where do my entries actually live/i })

    await user.click(q1)
    await user.click(q2)

    expect(q1).toHaveAttribute('aria-expanded', 'true')
    expect(q2).toHaveAttribute('aria-expanded', 'true')
  })
})
