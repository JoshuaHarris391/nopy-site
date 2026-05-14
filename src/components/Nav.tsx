import { useNavScroll } from '../hooks/useNavScroll'
import type { Theme } from '../hooks/useTheme'
import { GITHUB_URL, NAV_LINKS } from '../data/nav'

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 18 V11 C3 7 7 5 12 5 C17 5 21 7 21 11 V18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M3 18 H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 18 V13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M12 18 V12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M16 18 V13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

interface NavProps {
  theme: Theme
  onToggleTheme: () => void
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const scrolled = useNavScroll()
  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <a href="#" className="brand" aria-label="nopy home">
          <BrandMark />
          <span className="brand-word">nopy</span>
        </a>
        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="nav-cta">
          <button
            type="button"
            className="theme-tog"
            onClick={onToggleTheme}
            aria-label="Toggle light and dark"
          >
            {theme === 'dark' ? (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
            GitHub
          </a>
          <a href="#start" className="btn btn-primary">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4v12M6 10l6 6 6-6M4 20h16" />
            </svg>
            Download
          </a>
        </div>
      </div>
    </nav>
  )
}
