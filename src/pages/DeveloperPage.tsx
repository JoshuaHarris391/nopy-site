import { Link } from 'react-router-dom'
import { CodeTabs } from '../components/CodeTabs'
import { useReveal } from '../hooks/useReveal'
import { GITHUB_URL } from '../data/nav'
import { ANTHRO_FACTS, ANTHRO_HEADING_HTML } from '../data/privacy'
import { STACK } from '../data/stack'
import { ARCHITECTURE_CELLS, LOCAL_AI_CELLS, type DevCellData } from '../data/developer'

/**
 * The technical / privacy deep-dive ("/developers"). Everything here is the long
 * version of claims the landing page makes briefly: data flows, how to verify
 * them, how to run a local model, cloud-key caveats, and how to build from source.
 */
export function DeveloperPage() {
  useReveal()

  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Link to="/" className="dev-back">
              &larr; Back to nopy
            </Link>
            <div className="section-eyebrow">For developers &amp; the privacy-conscious</div>
            <h1 className="section-title">
              How nopy keeps your <em>words yours.</em>
            </h1>
            <p className="section-lede">
              The landing page keeps it short. This is the long version: where your data lives, how
              to verify every privacy claim yourself, and how to run or build nopy on your own.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Architecture</div>
            <h2 className="section-title">Where everything lives.</h2>
          </div>
          <div className="privacy-grid reveal">
            {ARCHITECTURE_CELLS.map((cell) => (
              <DevCell key={cell.title} cell={cell} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Local AI</div>
            <h2 className="section-title">Private by default, and provable.</h2>
            <p className="section-lede">
              Run the companion entirely on your machine, and don&rsquo;t take our word for what
              stays put.
            </p>
          </div>
          <div className="privacy-grid reveal">
            {LOCAL_AI_CELLS.map((cell) => (
              <DevCell key={cell.title} cell={cell} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Cloud keys</div>
            <h2 className="section-title">If you bring your own key.</h2>
          </div>
          <div className="anthropic-note reveal">
            <h4 dangerouslySetInnerHTML={{ __html: ANTHRO_HEADING_HTML }} />
            <div className="anthro-facts">
              {ANTHRO_FACTS.map((fact) => (
                <div key={fact.strong} className="anthro-fact">
                  <strong>{fact.strong}</strong>
                  {fact.body}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Build it yourself</div>
            <h2 className="section-title">Open source, top to bottom.</h2>
            <p className="section-lede">Read the code, build it from source, fork it, or send a patch.</p>
          </div>
          <div className="reveal">
            <CodeTabs />
          </div>
          <p className="dev-link reveal">
            The full repository, issues and releases live on{' '}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">Under the hood</div>
            <h2 className="section-title">The stack.</h2>
          </div>
          <div className="stack reveal">
            {STACK.map((item) => (
              <div key={item.name} className="stack-item">
                <span className="stack-ic" aria-hidden="true">
                  <svg viewBox="0 0 24 24">{item.icon}</svg>
                </span>
                <span className="stack-text">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-banner-inner">
          <h2>Everything here runs on your machine.</h2>
          <p>Download nopy, or read the source first. Both paths keep your words yours.</p>
          <div className="hero-ctas">
            <a href="/#start" className="btn btn-primary btn-lg">
              Download nopy
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function DevCell({ cell }: { cell: DevCellData }) {
  return (
    <div className={`privacy-cell${cell.variant ? ` ${cell.variant}` : ''}`}>
      <h3>
        <span className="mk" />
        <span>{cell.title}</span>
      </h3>
      <div className="sub">{cell.sub}</div>
      <ul className="privacy-list">
        {cell.itemsHtml.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
        ))}
      </ul>
    </div>
  )
}
