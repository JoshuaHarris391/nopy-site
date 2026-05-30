import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppShell } from '../App'

/**
 * The site is a two-page SPA: "/" is the journaler-facing landing page and
 * "/developers" is the technical / privacy deep-dive. These tests mount the
 * shared shell at each path and assert the correct page renders — guarding the
 * router wiring (a classic breakage point when introducing routing) entirely in
 * jsdom, no real browser required.
 *
 * We render <AppShell> (the layout *without* its BrowserRouter) inside a
 * MemoryRouter so the starting path is explicit and deterministic.
 */
describe('routing', () => {
  it('shows the landing page hero at "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppShell />
      </MemoryRouter>,
    )

    // The action-verb headline exists only on the landing page.
    expect(screen.getByText(/Write privately\. Reflect deeply\./)).toBeInTheDocument()
    // The developer page's headline must NOT be present on the landing route.
    expect(screen.queryByText(/How nopy keeps your/i)).not.toBeInTheDocument()
  })

  it('shows the developer page at "/developers"', () => {
    render(
      <MemoryRouter initialEntries={['/developers']}>
        <AppShell />
      </MemoryRouter>,
    )

    // The developer page leads with this headline (unique to that page).
    expect(screen.getByText(/How nopy keeps your/i)).toBeInTheDocument()
    // The maker's note lives only on the landing page, so it must be absent here.
    expect(screen.queryByText(/A note from the maker/i)).not.toBeInTheDocument()
  })
})
