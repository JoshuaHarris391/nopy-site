export interface Step {
  num: string
  title: string
  /** Body may contain <strong> and an inline <span class="blink"/> token (rendered as a special key). */
  bodyHtml: string
}

export const STEPS: Step[] = [
  {
    num: '01',
    title: 'Get the app',
    bodyHtml:
      'Download nopy for macOS or Linux. (Developers can build it from source instead.)',
  },
  {
    num: '02',
    title: 'Pick a folder',
    bodyHtml:
      'In <strong>Settings &rarr; Data &amp; Privacy</strong>, choose where your entries live. That folder is yours.',
  },
  {
    num: '03',
    title: 'Add a companion (optional)',
    bodyHtml:
      'Want the AI companion? Install the free <strong>LM Studio</strong> app to run it on your own machine, or paste an Anthropic or OpenAI key to use the cloud. Skip this and nopy stays a plain journal.',
  },
  {
    num: '04',
    title: 'Write',
    bodyHtml:
      'Open the Journal tab and start writing.<span class="blink"></span>',
  },
]
