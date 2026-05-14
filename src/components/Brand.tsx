import { asset } from '../data/asset'

interface BrandProps {
  href?: string
  ariaLabel?: string
}

export function Brand({ href = '#', ariaLabel = 'nopy home' }: BrandProps) {
  return (
    <a href={href} className="brand" aria-label={ariaLabel}>
      <span className="brand-mark" aria-hidden="true">
        <img
          src={asset('assets/nopy-logo.png')}
          alt=""
          width={34}
          height={34}
          className="brand-logo"
        />
      </span>
      <span className="brand-word">nopy</span>
    </a>
  )
}
