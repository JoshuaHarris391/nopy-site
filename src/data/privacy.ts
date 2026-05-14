export interface PrivacyCell {
  variant: 'local' | 'sent'
  titleHtml: string
  sub: string
  itemsHtml: string[]
}

export const PRIVACY_CELLS: PrivacyCell[] = [
  {
    variant: 'local',
    titleHtml: 'What stays <em>fully local</em>',
    sub: 'Always · Never Leaves Your Machine',
    itemsHtml: [
      'Your journal entries &mdash; as <code>.md</code> files in a folder you pick, or in browser IndexedDB on the web.',
      'Your psychological profile and entry index &mdash; JSON on disk, never synced anywhere.',
      'Your Anthropic API key &mdash; saved locally, used only for direct calls from your machine to Anthropic.',
      'App state, preferences, session history &mdash; all on-device, all the time.',
    ],
  },
  {
    variant: 'sent',
    titleHtml: 'What gets sent &mdash; <em>and only then</em>',
    sub: 'When You Ask the Companion to Read',
    itemsHtml: [
      'When you use the chat, generate a profile, or index an entry, the relevant text is sent to Anthropic&rsquo;s API using <em>your</em> key.',
      'Nothing is sent when you type. Nothing is sent when you save. Nothing is sent in the background.',
      'Leave the API key blank and nopy works as a plain Markdown journal with zero network calls.',
      'You can use nopy and never send a single byte anywhere.',
    ],
  },
]

export interface AnthroFact {
  strong: string
  body: string
}

export const ANTHRO_FACTS: AnthroFact[] = [
  {
    strong: 'NOT USED FOR TRAINING',
    body: 'Under Anthropic’s Commercial Terms, API inputs and outputs are not used to train their models.',
  },
  {
    strong: 'SHORT DEFAULT RETENTION',
    body: 'Anthropic retains API inputs and outputs for up to 30 days by default, after which they’re deleted (up to 2 years if flagged by their trust & safety systems).',
  },
  {
    strong: 'ZERO DATA RETENTION INHERITED',
    body: 'If you have ZDR enabled on your Anthropic account, nopy’s AI features inherit it automatically. Nopy doesn’t override anything.',
  },
]

export const ANTHRO_HEADING_HTML =
  'If you <em>do</em> use the AI features, Anthropic&rsquo;s policies apply to that slice of traffic.'
