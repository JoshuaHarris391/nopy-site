import type { Feature } from '../data/features'

export function FeatureRow({ feature }: { feature: Feature }) {
  const copyDirection = feature.reverse ? 'reveal-right' : 'reveal-left'
  const shotDirection = feature.reverse ? 'reveal-left' : 'reveal-right'
  return (
    <div
      className={`feature-row${feature.reverse ? ' reverse' : ''}`}
      data-reveal-group
    >
      <div className={`feat-copy reveal ${copyDirection}`}>
        <div className="feat-tag">{feature.tag}</div>
        <h3
          className="feat-title"
          dangerouslySetInnerHTML={{ __html: feature.titleHtml }}
        />
        <div className="feat-body">
          {feature.bodyHtml.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
      <div className={`feat-shot reveal ${shotDirection}`}>
        <img src={feature.image} alt={feature.alt} />
      </div>
    </div>
  )
}
