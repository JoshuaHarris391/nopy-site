import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { useDetectedPlatform } from '../hooks/useDetectedPlatform'
import { useLatestVersion } from '../hooks/useLatestVersion'
import { DOWNLOAD_GROUPS, downloadUrl, findBuild, type Build } from '../data/downloads'
import { GITHUB_URL, RELEASES_URL } from '../data/nav'

/** The download arrow, shared by the recommended block and every card. */
function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v12M6 10l6 6 6-6M4 20h16" />
    </svg>
  )
}

/**
 * The downloads page ("/downloads"). Lists one clearly-labelled button per build,
 * highlights the one matching the visitor's detected system, and explains in plain
 * language which Mac build to pick. Builds are hosted on GitHub releases, so the
 * download links are plain cross-origin <a> tags (GitHub serves them as attachments);
 * only the internal navigation uses React Router <Link>.
 */
export function DownloadsPage() {
  useReveal()
  const detected = useDetectedPlatform()
  const version = useLatestVersion()
  const recommended = findBuild(detected)

  return (
    <>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <Link to="/" className="dev-back">
              &larr; Back to nopy
            </Link>
            <div className="section-eyebrow">Download</div>
            <h1 className="section-title">Get nopy for your machine.</h1>
            <p className="section-lede">
              Free and open source. Pick your system below and the download starts. Version{' '}
              {version}, for macOS and Linux.
            </p>
          </div>

          {recommended && (
            <a className="download-rec reveal" href={downloadUrl(recommended.filename, version)}>
              <span className="download-rec-badge">Recommended for you</span>
              <span className="download-card-os">{recommended.label}</span>
              <span className="download-card-help">{recommended.help}</span>
              <DownloadIcon />
            </a>
          )}
        </div>
      </section>

      <section className="section section-cream">
        <div className="wrap">
          <div className="section-head">
            <div className="section-eyebrow">All downloads</div>
            <h2 className="section-title">Every build.</h2>
          </div>

          {DOWNLOAD_GROUPS.map((group) => (
            <div key={group.os} className="download-group reveal">
              <h3 className="download-group-title">{group.os}</h3>
              <div className="download-grid">
                {group.builds.map((build) => (
                  <DownloadCard
                    key={build.label}
                    build={build}
                    version={version}
                    recommended={Boolean(build.detect) && build.detect === detected}
                  />
                ))}
              </div>
            </div>
          ))}

          <p className="download-help-note reveal">
            Not sure which Mac you have? Open the Apple menu in the top-left corner, then{' '}
            <strong>About This Mac</strong>. If the chip starts with <strong>Apple</strong>, like
            M1 or M2, choose Apple Silicon. If it says <strong>Intel</strong>, choose Intel.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="dev-link reveal">
            Looking for older versions or checksums? See{' '}
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              all releases on GitHub
            </a>
            . Prefer to build it yourself? Read the <Link to="/developers">developer notes</Link>, or
            browse the <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">source</a>.
          </p>
        </div>
      </section>
    </>
  )
}

function DownloadCard({
  build,
  version,
  recommended,
}: {
  build: Build
  version: string
  recommended: boolean
}) {
  return (
    <a
      className={`download-card${recommended ? ' is-recommended' : ''}`}
      href={downloadUrl(build.filename, version)}
    >
      <span className="download-card-os">{build.label}</span>
      <span className="download-card-help">{build.help}</span>
      <DownloadIcon />
    </a>
  )
}
