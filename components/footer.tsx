import type { Site } from '@/lib/types';

export function Footer({ site }: { site: Site }) {
  const year = new Date().getFullYear();

  return (
    <footer>
      <section
        className="px-5 py-6 hairline-t"
        style={{ background: 'var(--paper)' }}
      >
        <header className="flex items-baseline justify-between mb-3">
          <h2 className="t-display text-[16px]" style={{ color: 'var(--ink)' }}>
            Operator.
          </h2>
          <span className="t-label" style={{ fontSize: 9 }}>
            Fig. 04 / Specs
          </span>
        </header>
        <dl
          className="grid gap-y-1.5 gap-x-4 text-[11px]"
          style={{ gridTemplateColumns: '130px 1fr' }}
        >
          <dt className="uppercase tracking-[0.1em]" style={{ color: 'var(--ink-2)' }}>
            Operator
          </dt>
          <dd style={{ color: 'var(--ink)' }}>{site.operator.name}</dd>
          <dt className="uppercase tracking-[0.1em]" style={{ color: 'var(--ink-2)' }}>
            Location
          </dt>
          <dd style={{ color: 'var(--ink)' }}>{site.operator.location}</dd>
          <dt className="uppercase tracking-[0.1em]" style={{ color: 'var(--ink-2)' }}>
            Domain
          </dt>
          <dd style={{ color: 'var(--ink)' }}>{site.operator.domain}</dd>
          <dt className="uppercase tracking-[0.1em]" style={{ color: 'var(--ink-2)' }}>
            Hosting
          </dt>
          <dd style={{ color: 'var(--ink)' }}>Vercel · Edge network</dd>
        </dl>
      </section>

      <div
        className="px-5 py-4 flex flex-wrap justify-between gap-3 hairline-t-thick"
        style={{ fontSize: 10, color: 'var(--ink-2)', letterSpacing: '0.1em' }}
      >
        <div>© {year} PARACORD COMMERCE S.R.O.</div>
        <div className="flex gap-2 flex-wrap">
          <a className="link-dot" href="/privacy">PRIVACY</a>
          <span>·</span>
          <a className="link-dot" href="/terms">TERMS</a>
          {site.socials.map((s) => (
            <span key={s.url} className="flex gap-2">
              <span>·</span>
              <a className="link-dot" href={s.url} target="_blank" rel="noreferrer">
                {s.label.toUpperCase()}
              </a>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
