/**
 * Copy for the /developers page — the technical, privacy-deep companion to the
 * landing page. The landing page speaks to journalers; this page speaks to the
 * privacy-conscious and to developers who want the exact data flows.
 *
 * List items are HTML strings (rendered via dangerouslySetInnerHTML) so they can
 * carry inline <code>, <strong> and <a>, matching the rest of src/data.
 */

export interface DevCellData {
  title: string
  sub: string
  /** Optional extra class on .privacy-cell (e.g. 'local-ai' for the accent variant). */
  variant?: string
  itemsHtml: string[]
}

export const ARCHITECTURE_CELLS: DevCellData[] = [
  {
    title: 'On your disk',
    sub: 'Plain files you own',
    itemsHtml: [
      'Entries are <code>.md</code> files in a folder you choose: human-readable, <code>grep</code>-able, and version-controllable with your own tools.',
      'Your psychological profile and entry index are JSON on disk, beside your entries. They are never synced anywhere.',
      'App state, preferences and session history stay on-device.',
    ],
  },
  {
    title: 'No backend',
    sub: 'There is no nopy server',
    itemsHtml: [
      'No account, no sign-in, no telemetry. There is no nopy server to send anything to.',
      'In local mode there are no outbound network calls at all. Chat, profile generation and indexing all go to <code>localhost</code>.',
      'Delete the app and your journal is untouched: it was only ever your folder of files.',
    ],
  },
]

export interface DevFAQItem {
  question: string
  answerHtml: string
}

/** Model/infrastructure questions moved off the landing page — journalers don't
 *  need to meet LM Studio, Gemma or ZDR before deciding to keep a journal. */
export const DEV_FAQ: DevFAQItem[] = [
  {
    question: 'Can the AI run fully on my Mac?',
    answerHtml:
      'Yes. This is the recommended setup. Install <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM Studio</a>, load a small model (Gemma 4 E4B is a sensible default for 16&nbsp;GB Macs, about 5&nbsp;GB on disk), and switch nopy to <strong>Local</strong> mode in Settings. Chat, profile generation, and entry indexing all go to <code>localhost</code>. No outbound network calls.',
  },
  {
    question: 'How does a local model compare to Claude or GPT?',
    answerHtml:
      'Honestly: not as polished. Gemma 4 E4B is a smart small model and the everyday chat experience is good, but the long-form psychological profile is noticeably less nuanced than a big cloud model like Claude or GPT on the same prompt. Local mode is the right default for privacy. Reach for a cloud key only when you&rsquo;ve decided the trade is worth it.',
  },
  {
    question: 'What if I do want to use Anthropic or OpenAI?',
    answerHtml:
      'Paste your key into Settings and you&rsquo;re set. One strong recommendation: <strong>enable Zero Data Retention</strong> on your account if your plan supports it. With ZDR on, the provider doesn&rsquo;t store your prompts or outputs at all. Without it, Anthropic retains API content for up to 30 days by default; OpenAI&rsquo;s defaults vary by product. Read each provider&rsquo;s data-retention policy before sending anything sensitive.',
  },
]

export const LOCAL_AI_CELLS: DevCellData[] = [
  {
    title: 'Run the model locally',
    sub: 'Recommended · LM Studio',
    variant: 'local-ai',
    itemsHtml: [
      'Install <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM Studio</a> and load a small instruct model.',
      '<strong>Gemma 4 E4B</strong> is a sensible default for a 16&nbsp;GB Mac: smart, small, about 5&nbsp;GB on disk.',
      'Point nopy at LM Studio and switch to <strong>Local</strong> mode; chat, profile generation and indexing all hit <code>localhost</code>.',
      'Honest trade-off: a local model is great for everyday chat, but its long-form profile is less nuanced than a frontier cloud model.',
    ],
  },
  {
    title: 'Verify it yourself',
    sub: 'Proof, not promises',
    itemsHtml: [
      'Open your browser DevTools <strong>Network</strong> tab (or a tool like Little Snitch).',
      'Send a message and generate a profile while in Local mode.',
      'Watch every request resolve to <code>127.0.0.1</code>. Nothing leaves the loopback interface.',
      'Read the entries straight off disk: <code>grep -ri "anxious" ~/journal</code> works, because they are just text.',
    ],
  },
]
