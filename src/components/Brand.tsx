import { Link } from 'react-router-dom'
import { asset } from '../data/asset'

interface BrandProps {
  ariaLabel?: string
}

export function Brand({ ariaLabel = 'nopy home' }: BrandProps) {
  return (
    <Link to="/" className="brand" aria-label={ariaLabel}>
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
    </Link>
  )
}
