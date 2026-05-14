import { GITHUB_URL, RELEASES_URL } from '../data/nav'

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

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <a href="#" className="brand">
            <BrandMark />
            <span className="brand-word">nopy</span>
          </a>
          <p className="footer-tagline">A quiet, local-first journal that thinks with you.</p>
        </div>
        <div className="footer-col">
          <h5>Product</h5>
          <ul>
            <li><a href="#features">The App</a></li>
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#start">Get Started</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Project</h5>
          <ul>
            <li><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub repo</a></li>
            <li><a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">Releases</a></li>
            <li>
              <a
                href="https://github.com/JoshuaHarris391/nopy/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                License
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>Policies</h5>
          <ul>
            <li>
              <a
                href="https://www.anthropic.com/legal/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anthropic privacy
              </a>
            </li>
            <li>
              <a
                href="https://www.anthropic.com/legal/commercial-terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Commercial terms
              </a>
            </li>
            <li>
              <a
                href="https://privacy.anthropic.com/en/articles/10440198-what-is-zero-retention-mode"
                target="_blank"
                rel="noopener noreferrer"
              >
                Zero Data Retention
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 nopy · Built quietly, in the open.</span>
        <span className="colophon">— set in Fraunces &amp; Source Serif —</span>
      </div>
    </footer>
  )
}
