import { asset } from '../data/asset'

const BMC_URL = 'https://buymeacoffee.com/joshuaharris391'

export function Signoff() {
  return (
    <section className="signoff" aria-labelledby="signoff-eyebrow" data-reveal-group>
      <div className="signoff-inner">
        <div className="signoff-eyebrow reveal reveal-up" id="signoff-eyebrow">
          A note from the maker
        </div>
        <div className="signoff-letter reveal reveal-up">
          <p>
            I built nopy for myself. I wanted somewhere quiet to sit with my own thinking &mdash; a
            plain folder of plain files, on my own machine, that would still be there in ten years
            even if I lost interest in maintaining it. Everything else grew out of that.
          </p>
          <p>
            Keeping it free felt right. Your journal shouldn&rsquo;t be a subscription, and your
            words shouldn&rsquo;t live on someone else&rsquo;s server. If nopy helps you too &mdash;
            if you find yourself coming back to it &mdash; that&rsquo;s already the point.
          </p>
          <p>
            If you&rsquo;d like to keep me caffeinated while I keep working on it,{' '}
            <em>there&rsquo;s a link below.</em> Either way, thanks for reading this far.
          </p>
        </div>
        <div className="signoff-sig reveal reveal-up">
          <img
            src={asset('assets/josh.jpg')}
            alt="Josh, the maker of nopy, smiling under paper lanterns in Tokyo."
            className="signoff-avatar"
          />
          <div className="signoff-name-block">
            <div className="signoff-name">&mdash; Josh</div>
            <div className="signoff-role">Maker of nopy</div>
          </div>
          <a
            href={BMC_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="signoff-coffee"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 9h14v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9z" />
              <path d="M18 10h2a2 2 0 0 1 0 4h-2" />
              <path d="M8 5c0-1 1-1 1-2M12 5c0-1 1-1 1-2M16 5c0-1 1-1 1-2" />
            </svg>
            Buy me a coffee &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
