import { Link } from 'react-router-dom'
import { STEPS } from '../data/steps'

export function GetStarted() {
  return (
    <section className="section section-cream" id="start">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">Get started</div>
          <h2 className="section-title">
            Up and running in <em>four steps.</em>
          </h2>
          <p className="section-lede">
            Nopy is free and open source. Download the app, or build it from source yourself.
            Either way, everything stays yours.
          </p>
        </div>

        <div className="steps reveal">
          {STEPS.map((step) => (
            <div key={step.num} className="step">
              <div className="step-num">{step.num}</div>
              <div className="step-title">{step.title}</div>
              <div
                className="step-body"
                dangerouslySetInnerHTML={{ __html: step.bodyHtml }}
              />
            </div>
          ))}
        </div>

        <p className="dev-link reveal">
          Building from source, or curious about the data flows and stack?{' '}
          <Link to="/developers">See the developer &amp; privacy notes &rarr;</Link>
        </p>
      </div>
    </section>
  )
}
