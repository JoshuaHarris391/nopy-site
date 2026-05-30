export interface PrivacyCell {
  variant: 'local' | 'local-ai'
  titleHtml: string
  sub: string
  itemsHtml: string[]
}

export const PRIVACY_CELLS: PrivacyCell[] = [
  {
    variant: 'local',
    titleHtml: 'Your journal stays <em>fully local</em>',
    sub: 'Always · Never Leaves Your Machine',
    itemsHtml: [
      'Your entries are <code>.md</code> files in a folder you pick. They never sync anywhere.',
      'Your mood history and the patterns nopy finds stay on your computer too.',
      'Your settings and session history live on-device, all the time.',
      'No account to create, no usage tracking, no server in between.',
    ],
  },
  {
    variant: 'local-ai',
    titleHtml: 'Your companion can stay <em>local too</em>',
    sub: 'Recommended · LM Studio on Your Mac',
    itemsHtml: [
      'Run the companion on your own machine with the free <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM Studio</a> app. Chat and insights all happen on your computer.',
      'Nothing you write (entries, questions, or summaries) ever goes online.',
      'You don&rsquo;t have to take our word for it: in local mode, nothing nopy sends ever leaves your machine.',
      'A small model like Gemma runs comfortably on a recent Mac (about 5&nbsp;GB on disk).',
    ],
  },
]

export interface AnthroFact {
  strong: string
  body: string
}

export const ANTHRO_FACTS: AnthroFact[] = [
  {
    strong: 'ENABLE ZERO DATA RETENTION',
    body: 'If your provider account supports it, turn ZDR on. Anthropic and OpenAI both offer it on certain plans. With it on, your prompts and outputs aren’t stored at all. Nopy inherits whatever your account is configured for.',
  },
  {
    strong: 'KNOW THE DEFAULT RETENTION',
    body: 'Without ZDR, Anthropic retains API inputs and outputs for up to 30 days by default (longer if flagged by their trust & safety systems). OpenAI’s defaults differ by product. Read the policy before sending entries you’d rather not have indexed.',
  },
  {
    strong: 'NOT USED FOR TRAINING',
    body: 'Under both providers’ commercial and API terms, API content isn’t used to train their models. Worth verifying for the specific plan you’re on, since terms change.',
  },
]

export const ANTHRO_HEADING_HTML =
  'If you&rsquo;d rather plug in a cloud key (<em>Anthropic or OpenAI</em>), here&rsquo;s the setup to do first.'
