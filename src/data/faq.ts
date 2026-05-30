export interface FAQItem {
  question: string
  answerHtml: string
}

export const FAQ: FAQItem[] = [
  {
    question: 'Do I need an Anthropic API key to use nopy?',
    answerHtml:
      'No. The recommended path is to run the companion locally with <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM Studio</a> so nothing leaves your machine. If a cloud model is preferred, an Anthropic or OpenAI key works too. Leave everything unset and nopy works as a plain Markdown journal with zero network calls.',
  },
  {
    question: 'Can the AI run fully on my Mac?',
    answerHtml:
      'Yes. This is the recommended setup. Install <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM Studio</a>, load a small model (Gemma 4 E4B is a sensible default for 16&nbsp;GB Macs, about 5&nbsp;GB on disk), and switch nopy to <strong>Local</strong> mode in Settings. Chat, profile generation, and entry indexing all go to <code>localhost</code>. No outbound network calls.',
  },
  {
    question: 'How does a local model compare to Claude or GPT?',
    answerHtml:
      'Honestly: not as polished. Gemma 4 E4B is a smart small model and the everyday chat experience is good, but the long-form psychological profile is noticeably less nuanced than a frontier cloud model on the same prompt. Local mode is the right default for privacy. Reach for a cloud key only when you&rsquo;ve decided the trade is worth it.',
  },
  {
    question: 'What if I do want to use Anthropic or OpenAI?',
    answerHtml:
      'Paste your key into Settings and you&rsquo;re set. One strong recommendation: <strong>enable Zero Data Retention</strong> on your account if your plan supports it. With ZDR on, the provider doesn&rsquo;t store your prompts or outputs at all. Without it, Anthropic retains API content for up to 30 days by default; OpenAI&rsquo;s defaults vary by product. Read each provider&rsquo;s data-retention policy before sending anything sensitive.',
  },
  {
    question: 'Where do my entries actually live?',
    answerHtml:
      'As <code>.md</code> files in a folder you pick on your own machine. Each file is human-readable, grep-able, and version-controllable. There is no nopy server, anywhere.',
  },
  {
    question: 'How is the companion different from just pasting entries into Claude?',
    answerHtml:
      'The companion is configured with a clinical-psychologist system prompt grounded in CBT and ACT. It has session continuity within a conversation and can reference your indexed entries with your permission, so it notices patterns rather than reacting to a single snippet in isolation.',
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
