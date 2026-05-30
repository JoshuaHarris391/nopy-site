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
      'Your entries. <code>.md</code> files in a folder you pick on your own machine.',
      'Your psychological profile and entry index. JSON on disk, never synced anywhere.',
      'App state, preferences, session history. All on-device, all the time.',
      'No account. No telemetry. No server, anywhere in the loop.',
    ],
  },
  {
    variant: 'local-ai',
    titleHtml: 'Your companion can stay <em>local too</em>',
    sub: 'Recommended · LM Studio on Your Mac',
    itemsHtml: [
      'Point nopy at a model running in <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer">LM Studio</a>. Chat, profile generation, entry indexing. Every AI call goes through <code>localhost</code>.',
      'Nothing leaves the loopback interface. Not your prompts, not your entries, not your summaries.',
      'Verify it yourself: open DevTools, send a message, watch the Network tab. Zero requests off-machine.',
      'Gemma 4 E4B on a 16&nbsp;GB Mac is a sensible starting point. Smart, small, about 5&nbsp;GB on disk.',
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
