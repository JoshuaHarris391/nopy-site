import { GITHUB_URL } from '../data/nav'

export function CTABanner() {
  return (
    <section className="cta-banner" data-reveal-group>
      <div className="cta-banner-inner">
        <h2 className="reveal reveal-up">
          Open the notebook.
          <br />
          <em>Close the feed.</em>
        </h2>
        <p className="reveal reveal-up">
          Download nopy and keep a journal you&rsquo;ll still recognize in ten years.
        </p>
        <div className="hero-ctas reveal reveal-up">
          <a href="#start" className="btn btn-primary btn-lg">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 4v12M6 10l6 6 6-6M4 20h16" />
            </svg>
            Download for Desktop
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-lg"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 7.77 5.07 5.07 0 0 0 19.91 4S18.73 3.65 16 5.48a13.38 13.38 0 0 0-7 0C6.27 3.65 5.09 4 5.09 4A5.07 5.07 0 0 0 5 7.77 5.44 5.44 0 0 0 3.5 11.55c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V25" />
            </svg>
            Star on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
