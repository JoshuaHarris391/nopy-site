import { asset } from './asset'

export interface Feature {
  tag: string
  /** Title with optional <em>…</em> wrap; rendered via dangerouslySetInnerHTML so we can preserve italic emphasis. */
  titleHtml: string
  /** Paragraphs as HTML — keeps inline <code>, <em> markup from the reference. */
  bodyHtml: string[]
  image: string
  alt: string
  reverse: boolean
}

export const FEATURES: Feature[] = [
  {
    tag: 'Reflect · Journal',
    titleHtml: 'Write like you mean it &mdash; in <em>your own files.</em>',
    bodyHtml: [
      'A clean writing surface in warm serif type, capped to a reading-appropriate line length. Mark your mood on a gentle 1–10 scale, or leave it. No prompts unless you want them.',
      'Every entry is a plain <code>.md</code> file in the folder you choose. Readable in any editor. Grep-able. Back it up with your own tools. If nopy disappeared tomorrow, your journal wouldn&rsquo;t.',
    ],
    image: asset('assets/editor.png'),
    alt: 'The nopy journal editor showing a long entry set in warm serif type, with a mood scale at the top.',
    reverse: false,
  },
  {
    tag: 'Understand · Chat',
    titleHtml: 'A companion grounded in <em>CBT and ACT.</em>',
    bodyHtml: [
      'When you&rsquo;re ready to sit with an entry, the companion can read it with you. It asks better questions than a blank screen. It notices what you&rsquo;ve been circling. It doesn&rsquo;t tell you what to feel.',
      'Its voice is <em>distinctly other</em> &mdash; set in a different face than your own writing, so it never camouflages itself as yours. A letter from a thoughtful correspondent, not a chat bubble from an assistant.',
    ],
    image: asset('assets/chat.png'),
    alt: "A therapeutic conversation in the nopy chat view, with the companion's messages set in a warm editorial serif.",
    reverse: true,
  },
  {
    tag: 'Understand · Profile',
    titleHtml: 'Patterns, without <em>performance metrics.</em>',
    bodyHtml: [
      'Mood over time. Recurring themes. Reflection depth. Surfaced when you ask, not pushed at you in a weekly email. The profile is for you to read &mdash; not a scoreboard you&rsquo;re trying to beat.',
      'Generated on demand from the entries you&rsquo;ve already chosen to index. You pick the scope. You decide when it updates.',
    ],
    image: asset('assets/profile.png'),
    alt: 'The psychological profile view with a mood-over-time chart, emotional distribution, and a pill-shaped list of recurring themes.',
    reverse: false,
  },
]
