import { FEATURES } from '../data/features'
import { FeatureRow } from './FeatureRow'

export function Features() {
  return (
    <section className="section section-cream" id="features">
      <div className="wrap">
        {FEATURES.map((f) => (
          <FeatureRow key={f.tag} feature={f} />
        ))}
      </div>
    </section>
  )
}
