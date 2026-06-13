import { asset } from './asset'

export interface Feature {
  tag: string
  /** Title HTML; rendered via dangerouslySetInnerHTML. */
  titleHtml: string
  /** Paragraphs as HTML — keeps inline <code>, <em> markup from the reference. */
  bodyHtml: string[]
  /** Short scannable points rendered below the body; may carry inline <code>. */
  pointsHtml: string[]
  image: string
  alt: string
  reverse: boolean
}

export const FEATURES: Feature[] = [
  {
    tag: 'The page',
    titleHtml: 'Write in plain text you&rsquo;ll always be able to open.',
    bodyHtml: [
      'A clean writing page, with prompts only if you want them and a mood rating only if it helps. Every entry is a plain file in a folder you choose. If nopy disappeared tomorrow, your journal wouldn&rsquo;t.',
    ],
    pointsHtml: [
      'Plain <code>.md</code> files',
      'Opens in any editor',
      'Yours in ten years',
    ],
    image: asset('assets/editor.png'),
    alt: 'The nopy journal editor showing a long entry set in warm serif type, with a mood scale at the top.',
    reverse: false,
  },
  {
    tag: 'The companion',
    titleHtml: 'A companion that reflects with you.',
    bodyHtml: [
      'When you&rsquo;re ready to look at an entry more closely, the companion reads it with you and asks the kinds of questions a good listener would. It writes in its own typeface, so its voice always reads as separate from yours. (The approach borrows from CBT and ACT, if you like to know what&rsquo;s under the hood.)',
    ],
    pointsHtml: [
      'Asks, never prescribes',
      'Reads only what you share',
      'Can run on your machine',
    ],
    image: asset('assets/chat.png'),
    alt: "A conversation in the nopy chat view, with the companion's messages set in a warm editorial serif.",
    reverse: true,
  },
  {
    tag: 'The patterns',
    titleHtml: 'See the patterns in your own words.',
    bodyHtml: [
      'When you ask, nopy gathers the themes that recur across your entries and how your mood has moved. You read it to understand yourself, on your own terms.',
    ],
    pointsHtml: [
      'Only when you ask',
      'Built from your entries',
      'You choose what&rsquo;s included',
    ],
    image: asset('assets/profile.png'),
    alt: 'The profile view with a mood-over-time chart and a pill-shaped list of recurring themes.',
    reverse: false,
  },
]
