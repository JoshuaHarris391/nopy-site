export interface FAQItem {
  question: string
  answerHtml: string
}

export const FAQ: FAQItem[] = [
  {
    question: 'Do I need an Anthropic API key to use nopy?',
    answerHtml:
      'No. Leave the key blank and nopy works as a plain Markdown journal with mood tracking &mdash; and makes zero network calls. The AI features (chat, profile generation, indexing) simply don&rsquo;t appear until a key is present.',
  },
  {
    question: 'Where do my entries actually live?',
    answerHtml:
      'In the desktop app, as <code>.md</code> files in a folder you pick. Each file is human-readable, grep-able, and version-controllable. In the browser, entries live in IndexedDB. Either way, there is no nopy server.',
  },
  {
    question: 'How is the companion different from just pasting entries into Claude?',
    answerHtml:
      'The companion is configured with a clinical-psychologist system prompt grounded in CBT and ACT. It has session continuity within a conversation and can reference your indexed entries with your permission &mdash; so it notices patterns rather than reacting to a single snippet in isolation.',
  },
  {
    question: 'Is nopy a replacement for therapy?',
    answerHtml:
      'No, and it does not try to be. It is a notebook with a quiet, well-read friend inside. If you&rsquo;re in distress, please reach out to a qualified professional or a crisis line.',
  },
  {
    question: 'Is this open source?',
    answerHtml:
      'Yes. The repository is on GitHub. You can read the source, build it yourself, fork it, or contribute. The model that sits beside you in the evening should be something you can look directly at.',
  },
]
