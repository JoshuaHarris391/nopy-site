import { asset } from '../data/asset'
import { GITHUB_URL } from '../data/nav'

export function Hero() {
  return (
    <header className="hero" id="hero">
      <div className="hero-wash" />
      <div className="hero-veil" aria-hidden="true" />
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-inner">
            <div className="eyebrow">
              <span className="dot" /> Version 0.3 · macOS · Linux
            </div>
            <h1 className="hero-title reveal in">
              A quiet place to
              <br />
              <em>think with yourself.</em>
            </h1>
            <p className="hero-lede reveal in">
              Nopy is a local-first journal you keep on your own machine. Entries are plain Markdown
              in a folder <em>you</em> choose. When you&rsquo;re ready to go deeper, a gentle
              companion &mdash; grounded in CBT and ACT &mdash; can sit with the page alongside you.
            </p>
            <div className="hero-ctas reveal in">
              <a href="#start" className="btn btn-primary btn-lg">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4v12M6 10l6 6 6-6M4 20h16" />
                </svg>
                Download for macOS
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-lg"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 7.77 5.07 5.07 0 0 0 19.91 4S18.73 3.65 16 5.48a13.38 13.38 0 0 0-7 0C6.27 3.65 5.09 4 5.09 4A5.07 5.07 0 0 0 5 7.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" />
                </svg>
                View on GitHub
              </a>
            </div>
            <div className="hero-meta reveal in">
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="5" width="18" height="14" rx="1" />
                  <path d="M3 9h18" />
                </svg>
                No account · No telemetry
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2 4 6v6c0 5 3.4 9.5 8 10 4.6-.5 8-5 8-10V6l-8-4z" />
                </svg>
                Your words stay on disk
              </span>
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 4h16v16H4z" />
                  <path d="M8 8h8M8 12h8M8 16h5" />
                </svg>
                Plain Markdown, grep-able
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-shot reveal in">
        <div className="shot-frame">
          <div className="shot-chrome">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="path">~/journal/2026-04-01.md</span>
          </div>
          <img
            src={asset('assets/editor.png')}
            alt="A nopy journal entry open for editing, with a mood indicator and a full page of handwritten thought set in warm serif type."
            className="shot-img"
          />
        </div>
      </div>
    </header>
  )
}
