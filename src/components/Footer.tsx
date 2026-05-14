import { GITHUB_URL, RELEASES_URL } from '../data/nav'
import { Brand } from './Brand'

export function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <Brand />
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
