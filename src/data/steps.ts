export interface Step {
  num: string
  title: string
  /** Body may contain <strong> and an inline <span class="blink"/> token (we render as a special key). */
  bodyHtml: string
}

export const STEPS: Step[] = [
  {
    num: '01',
    title: 'Get the app',
    bodyHtml:
      'Download the Tauri desktop build for macOS or Linux &mdash; or clone the repo and run from source.',
  },
  {
    num: '02',
    title: 'Pick a folder',
    bodyHtml:
      'In <strong>Settings &rarr; Data &amp; Privacy</strong>, choose where your Markdown entries should live.',
  },
  {
    num: '03',
    title: 'Add a key (optional)',
    bodyHtml:
      'Paste your own Anthropic API key to enable the companion. Or leave it blank &mdash; nopy works as a plain journal.',
  },
  {
    num: '04',
    title: 'Write',
    bodyHtml:
      'Open the Journal tab. Begin. The page is listening.<span class="blink"></span>',
  },
]
