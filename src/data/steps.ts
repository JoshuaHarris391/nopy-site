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
      'Download the Tauri desktop build for macOS or Linux, or clone the repo and run from source.',
  },
  {
    num: '02',
    title: 'Pick a folder',
    bodyHtml:
      'In <strong>Settings &rarr; Data &amp; Privacy</strong>, choose where your Markdown entries should live.',
  },
  {
    num: '03',
    title: 'Add a companion (optional)',
    bodyHtml:
      'Install <strong>LM Studio</strong> and load a small model to run the companion entirely on your Mac. This is the recommended setup. Or paste an Anthropic or OpenAI key if you&rsquo;d rather the cloud do the thinking. Leave both unset and nopy stays a plain Markdown journal.',
  },
  {
    num: '04',
    title: 'Write',
    bodyHtml:
      'Open the Journal tab. Begin. The page is listening.<span class="blink"></span>',
  },
]
