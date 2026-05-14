import { useState } from 'react'
import { FAQ as FAQ_ITEMS } from '../data/faq'

export function FAQ() {
  const [open, setOpen] = useState<Record<number, boolean>>({})

  const toggle = (idx: number) => {
    setOpen((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">Answered quietly</div>
          <h2 className="section-title">
            Questions before you <em>sit down.</em>
          </h2>
        </div>

        <div className="faq-list">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = !!open[idx]
            return (
              <div key={item.question} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button
                  type="button"
                  className="faq-q"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                >
                  {item.question}
                  <svg
                    className="chev"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className="faq-a">
                  <div
                    className="faq-a-inner"
                    dangerouslySetInnerHTML={{ __html: item.answerHtml }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
