import type { ReactNode } from 'react'

export interface StackItem {
  name: string
  description: string
  icon: ReactNode
}

export const STACK: StackItem[] = [
  {
    name: 'React 19',
    description: 'UI framework',
    icon: (
      <>
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: 'Tauri',
    description: 'Native desktop shell',
    icon: (
      <>
        <path d="M4 7l8-4 8 4-8 4-8-4z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </>
    ),
  },
  {
    name: 'Vite',
    description: 'Build & dev server',
    icon: (
      <>
        <path d="M3 4l9 16 9-16" />
        <path d="M7 4l5 9 5-9" />
      </>
    ),
  },
  {
    name: 'Zustand',
    description: 'Local state + filesystem',
    icon: (
      <>
        <path d="M4 6h16M4 12h16M4 18h10" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),
  },
  {
    name: 'TypeScript',
    description: 'End-to-end types',
    icon: (
      <>
        <path d="M4 4h16v16H4z" />
        <path d="M8 9h8M10 9v7M14 14h2" />
      </>
    ),
  },
  {
    name: 'Tailwind',
    description: 'Utility-first styling',
    icon: (
      <>
        <path d="M6 3v12a4 4 0 0 0 8 0V3" />
        <path d="M4 3h12" />
        <path d="M10 15l-4 6h12l-4-6" />
      </>
    ),
  },
  {
    name: 'Vitest',
    description: 'Pure-logic tests',
    icon: (
      <>
        <path d="M4 12l5 5L20 6" />
        <circle cx="4" cy="12" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: 'Claude (Opus 4.6)',
    description: 'AI companion',
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M9 10c.5-1.5 1.8-2.5 3.5-2.5S16 8.5 16 10c0 2-3 2-3 4" />
        <circle cx="13" cy="16.5" r=".8" fill="currentColor" stroke="none" />
      </>
    ),
  },
]
