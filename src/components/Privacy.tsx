import { Link } from 'react-router-dom'
import { PRIVACY_CELLS } from '../data/privacy'

export function Privacy() {
  return (
    <section className="section" id="privacy">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">Your privacy</div>
          <h2 className="section-title">
            Your journal <em>never leaves your computer.</em>
          </h2>
          <p className="section-lede">
            There&rsquo;s no nopy account and no nopy server. Your entries are files on your own
            computer, and the AI can run there too, so nothing has to go online at all.
          </p>
        </div>

        <div className="privacy-grid reveal">
          {PRIVACY_CELLS.map((cell) => (
            <div
              key={cell.variant}
              className={`privacy-cell${cell.variant !== 'local' ? ` ${cell.variant}` : ''}`}
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

        <p className="dev-link reveal">
          Bringing a cloud key, or want to verify these claims yourself?{' '}
          <Link to="/developers">Read the developer &amp; privacy notes &rarr;</Link>
        </p>
      </div>
    </section>
  )
}
