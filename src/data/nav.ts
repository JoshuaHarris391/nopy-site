export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The App', href: '#features' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Get Started', href: '#start' },
  { label: 'GitHub', href: 'https://github.com/JoshuaHarris391/nopy', external: true },
]

export const GITHUB_URL = 'https://github.com/JoshuaHarris391/nopy'
export const RELEASES_URL = 'https://github.com/JoshuaHarris391/nopy/releases'
