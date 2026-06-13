export interface PrivacyCell {
  variant: 'local' | 'local-ai'
  titleHtml: string
  sub: string
  itemsHtml: string[]
}

export const PRIVACY_CELLS: PrivacyCell[] = [
  {
    variant: 'local',
    titleHtml: 'Your journal stays fully local',
    sub: 'Always · Never Leaves Your Machine',
    itemsHtml: [
      '<strong>No account.</strong> Nothing to create, nothing to sign in to.',
      '<strong>No server.</strong> There is no nopy backend, anywhere.',
      '<strong>No tracking.</strong> Your mood history and patterns stay on your computer.',
      '<strong>Just files.</strong> Plain <code>.md</code> entries you can open in any app.',
    ],
  },
  {
    variant: 'local-ai',
    titleHtml: 'Your companion can stay local too',
    sub: 'Optional · Runs on Your Machine',
    itemsHtml: [
      'The companion can run entirely on your own computer, free, through the <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM Studio</a> app. Chat and insights all happen there.',
      'In local mode, nothing you write (entries, questions, or summaries) ever goes online.',
      'Prefer a cloud model? Bring your own key and that works too.',
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
  'If you&rsquo;d rather plug in a cloud key (Anthropic or OpenAI), here&rsquo;s the setup to do first.'
