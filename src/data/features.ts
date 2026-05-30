import { asset } from './asset'

export interface Feature {
  tag: string
  /** Title with optional <em>…</em> wrap; rendered via dangerouslySetInnerHTML to preserve italic emphasis. */
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
    titleHtml: 'Write in plain text you&rsquo;ll <em>always be able to open.</em>',
    bodyHtml: [
      'A clean writing page in warm serif type, sized for comfortable reading. Add a 1–10 mood rating if it helps, or skip it — prompts only if you want them.',
      'Every entry is a plain <code>.md</code> file in a folder you choose: readable in any editor, easy to back up, and yours to keep. If nopy disappeared tomorrow, your journal wouldn&rsquo;t.',
    ],
    image: asset('assets/editor.png'),
    alt: 'The nopy journal editor showing a long entry set in warm serif type, with a mood scale at the top.',
    reverse: false,
  },
  {
    tag: 'Understand · Chat',
    titleHtml: 'An AI companion that <em>reflects with you.</em>',
    bodyHtml: [
      'When you&rsquo;re ready to look at an entry more closely, the companion reads it with you and asks the questions a good listener would. It&rsquo;s grounded in CBT and ACT — the same evidence-based techniques therapists use to notice thought patterns and what you keep circling back to.',
      'It writes in a different typeface from your own, so its voice always reads as separate from yours — <em>a reply from a thoughtful correspondent,</em> not your own words echoed back.',
      'You choose where it runs: entirely on your own machine, or through an Anthropic or OpenAI key if you prefer. Either way, the choice is yours.',
    ],
    image: asset('assets/chat.png'),
    alt: "A therapeutic conversation in the nopy chat view, with the companion's messages set in a warm editorial serif.",
    reverse: true,
  },
  {
    tag: 'Understand · Profile',
    titleHtml: 'See the patterns in <em>your own words.</em>',
    bodyHtml: [
      'Nopy can show how your mood moves over time, the themes that recur, and how your reflection deepens — built from your entries, only when you ask. You read it to understand yourself, on your own terms.',
      'You decide what&rsquo;s included and when it updates. Nothing is calculated in the background.',
    ],
    image: asset('assets/profile.png'),
    alt: 'The psychological profile view with a mood-over-time chart, emotional distribution, and a pill-shaped list of recurring themes.',
    reverse: false,
  },
]
