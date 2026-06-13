export interface FAQItem {
  question: string
  answerHtml: string
}

export const FAQ: FAQItem[] = [
  {
    question: 'Do I need an account or an API key?',
    answerHtml:
      'No. Out of the box nopy is a plain journal with zero network calls. If you want the companion, it can run free on your own machine, or with a cloud key if you have one.',
  },
  {
    question: 'Where do my entries actually live?',
    answerHtml:
      'As <code>.md</code> files in a folder you pick on your own machine. Each file is plain text, readable in any app and easy to back up. There is no nopy server, anywhere.',
  },
  {
    question: 'How is the companion different from just pasting entries into Claude?',
    answerHtml:
      'It remembers the conversation, it can read your past entries when you let it, and it listens for patterns instead of reacting to one snippet in isolation.',
  },
  {
    question: 'Is nopy a replacement for therapy?',
    answerHtml:
      'No, and it does not try to be. It is a notebook with a well-read friend inside. If you&rsquo;re in distress, please reach out to a qualified professional or a crisis line.',
  },
  {
    question: 'Is this open source?',
    answerHtml:
      'Yes. The repository is on GitHub. You can read the source, build it yourself, fork it, or contribute. Anything you trust with your private thoughts should be something you can read for yourself.',
  },
]
