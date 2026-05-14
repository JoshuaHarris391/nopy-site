import { STEPS } from '../data/steps'
import { STACK } from '../data/stack'
import { CodeTabs } from './CodeTabs'

export function GetStarted() {
  return (
    <section className="section section-cream" id="start">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">Get started</div>
          <h2 className="section-title">
            Up and running in <em>four quiet steps.</em>
          </h2>
          <p className="section-lede">
            Nopy is open source. You can download a pre-built desktop app, or clone the repo and run
            it yourself. Either way, you own everything.
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

        <CodeTabs />

        <div className="stack">
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
  )
}
