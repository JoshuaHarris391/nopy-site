import { useState } from 'react'
import { CODE_BLOCKS, CODE_TABS, type CodeTab } from '../data/codeSnippets'

export function CodeTabs() {
  const [active, setActive] = useState<CodeTab>('desktop')
  const block = CODE_BLOCKS[active]

  return (
    <>
      <div className="tab-row" role="tablist">
        {CODE_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={active === tab.id}
            className={`tab${active === tab.id ? ' active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <pre className="code" data-active={active}>
        {block.map((line, lineIdx) => (
          <span key={lineIdx}>
            {line.map((tok, i) =>
              tok.kind === 'plain' ? (
                <span key={i}>{tok.text}</span>
              ) : (
                <span key={i} className={tok.kind}>
                  {tok.text}
                </span>
              ),
            )}
            {lineIdx < block.length - 1 ? '\n' : ''}
          </span>
        ))}
      </pre>
    </>
  )
}
