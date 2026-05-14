import { ANTHRO_FACTS, ANTHRO_HEADING_HTML, PRIVACY_CELLS } from '../data/privacy'

export function Privacy() {
  return (
    <section className="section" id="privacy">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">Privacy &amp; your data</div>
          <h2 className="section-title">
            No server of ours. <em>No account.</em> No telemetry.
          </h2>
          <p className="section-lede">
            Nopy separates cleanly into two layers, and we&rsquo;d rather be upfront about both than
            hand-wave at &ldquo;privacy-first.&rdquo;
          </p>
        </div>

        <div className="privacy-grid reveal">
          {PRIVACY_CELLS.map((cell) => (
            <div
              key={cell.variant}
              className={`privacy-cell${cell.variant === 'sent' ? ' sent' : ''}`}
            >
              <h3>
                <span className="mk" />
                <span dangerouslySetInnerHTML={{ __html: cell.titleHtml }} />
              </h3>
              <div className="sub">{cell.sub}</div>
              <ul className="privacy-list">
                {cell.itemsHtml.map((item, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          ))}
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
  )
}
