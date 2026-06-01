export interface NavLink {
  label: string
  href?: string
  to?: string
  external?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'The App', href: '/#features' },
  { label: 'Privacy', href: '/#privacy' },
  { label: 'Get Started', href: '/#start' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Download', to: '/downloads' },
  { label: 'For developers', to: '/developers' },
]

export const GITHUB_URL = 'https://github.com/JoshuaHarris391/nopy'
export const RELEASES_URL = 'https://github.com/JoshuaHarris391/nopy/releases'
