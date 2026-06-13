import { useState } from 'react'
import { FAQ as FAQ_ITEMS, type FAQItem } from '../data/faq'

export function FAQList({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<Record<number, boolean>>({})

  const toggle = (idx: number) => {
    setOpen((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  return (
    <div className="faq-list">
      {items.map((item, idx) => {
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
  )
}

export function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="section-eyebrow">Common questions</div>
          <h2 className="section-title">Questions before you start.</h2>
        </div>

        <FAQList items={FAQ_ITEMS} />
      </div>
    </section>
  )
}
