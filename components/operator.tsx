import type { Site } from '@/lib/types';
import { AnimateIn } from './animate-in';

export function Operator({ site }: { site: Site }) {
  const rows: [string, string][] = [
    ['Operator', site.operator.name],
    ['Location', site.operator.location],
    ['Domain', site.operator.domain],
    ['Hosting', 'Vercel · Edge network'],
    ['Stack', 'Next.js 14 · TypeScript strict · Tailwind'],
    ['Source', 'github.com/maddiehuxley/Paracord'],
    ['Status', 'Live · v1.0'],
    ['Telemetry', 'None']
  ];

  return (
    <section
      className="px-5 py-12 md:py-14 hairline-t"
      style={{ background: 'var(--blueprint-bg)' }}
    >
      <AnimateIn>
        <header className="flex items-baseline justify-between mb-3">
          <span className="t-label" style={{ fontSize: 10 }}>
            Unit 05 · Detail
          </span>
          <span className="t-label" style={{ fontSize: 9 }}>
            Fig. 05 / Specs
          </span>
        </header>

        <h2 className="t-display mb-2" style={{ fontSize: 28, color: 'var(--ink)' }}>
          For those who like to look inside.
        </h2>
        <p className="text-[13px] mb-7" style={{ color: 'var(--ink-2)', maxWidth: 520 }}>
          Everything below is public on purpose. If you're curious about what powers
          the index itself, this is the wiring diagram.
        </p>
      </AnimateIn>

      <AnimateIn delay={100}>
        <div className="frame" style={{ background: 'var(--paper)' }}>
          <dl
            className="grid"
            style={{ gridTemplateColumns: '170px 1fr' }}
          >
            {rows.map(([k, v], i) => (
              <div
                key={k}
                className="contents"
                style={{ borderTop: i > 0 ? '1px dashed var(--hairline-soft)' : 'none' }}
              >
                <dt
                  className="px-4 py-2.5 t-label"
                  style={{
                    fontSize: 10,
                    background: 'transparent',
                    borderTop: i > 0 ? '1px dashed var(--hairline-soft)' : 'none',
                    borderRight: '1px dashed var(--hairline-soft)'
                  }}
                >
                  {k}
                </dt>
                <dd
                  className="px-4 py-2.5 text-[12.5px]"
                  style={{
                    margin: 0,
                    color: 'var(--ink)',
                    borderTop: i > 0 ? '1px dashed var(--hairline-soft)' : 'none'
                  }}
                >
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </AnimateIn>
    </section>
  );
}
