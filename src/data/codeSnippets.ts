export type CodeTab = 'desktop' | 'browser' | 'nvm'

export interface CodeToken {
  kind: 'comment' | 'prompt' | 'cmd' | 'flag' | 'plain'
  text: string
}

/** Each entry is a "line" composed of tokens; renderer joins tokens then adds a newline between lines. */
export type CodeBlock = CodeToken[][]

export const CODE_BLOCKS: Record<CodeTab, CodeBlock> = {
  desktop: [
    [{ kind: 'comment', text: '# Clone the repo' }],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' git clone https://github.com/JoshuaHarris391/nopy' },
    ],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' cd nopy' },
    ],
    [{ kind: 'plain', text: '' }],
    [{ kind: 'comment', text: '# Match the right Node version (reads .nvmrc)' }],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' nvm use' },
    ],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' npm install' },
    ],
    [{ kind: 'plain', text: '' }],
    [{ kind: 'comment', text: '# Run the native desktop app with hot reload' }],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' npm run tauri ' },
      { kind: 'flag', text: 'dev' },
    ],
  ],
  browser: [
    [{ kind: 'comment', text: '# Browser mode — entries saved to IndexedDB, no filesystem access' }],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' npm install' },
    ],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' npm run ' },
      { kind: 'flag', text: 'dev' },
    ],
    [{ kind: 'plain', text: '' }],
    [{ kind: 'comment', text: '# Opens at http://localhost:5173' }],
  ],
  nvm: [
    [{ kind: 'comment', text: '# Install nvm' }],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash' },
    ],
    [{ kind: 'plain', text: '' }],
    [{ kind: 'comment', text: '# Node 20 LTS + npm 10 come together' }],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' nvm install ' },
      { kind: 'flag', text: '20' },
    ],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: ' nvm use ' },
      { kind: 'flag', text: '20' },
    ],
    [{ kind: 'plain', text: '' }],
    [{ kind: 'comment', text: '# Rust stable (needed only for the Tauri desktop build)' }],
    [
      { kind: 'prompt', text: '$' },
      { kind: 'cmd', text: " curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh" },
    ],
  ],
}

export const CODE_TABS: Array<{ id: CodeTab; label: string }> = [
  { id: 'desktop', label: 'Desktop app' },
  { id: 'browser', label: 'Run in browser' },
  { id: 'nvm', label: 'Prerequisites' },
]
