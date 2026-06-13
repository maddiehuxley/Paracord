import { AnimateIn } from './animate-in';

/**
 * Three illustrated principles, LibreOffice "Why Choose" pattern.
 * Hand-drawn workshop SVGs for each, in orange line art.
 */

function IconLock({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="var(--orange)" strokeWidth="2.4" strokeLinecap="square">
      <rect x="14" y="28" width="36" height="26" />
      <path d="M22 28 V20 a10 10 0 0 1 20 0 V28" />
      <circle cx="32" cy="40" r="3" fill="var(--orange)" />
      <line x1="32" y1="40" x2="32" y2="47" />
      {/* corner punch dots */}
      <circle cx="18" cy="32" r="1.4" fill="var(--orange)" />
      <circle cx="46" cy="32" r="1.4" fill="var(--orange)" />
      <circle cx="18" cy="50" r="1.4" fill="var(--orange)" />
      <circle cx="46" cy="50" r="1.4" fill="var(--orange)" />
    </svg>
  );
}

function IconOffline({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="var(--orange)" strokeWidth="2.4" strokeLinecap="square">
      {/* a chunky machine cog */}
      <circle cx="32" cy="32" r="14" />
      <circle cx="32" cy="32" r="5" fill="var(--orange)" />
      <line x1="32" y1="10" x2="32" y2="18" />
      <line x1="32" y1="46" x2="32" y2="54" />
      <line x1="10" y1="32" x2="18" y2="32" />
      <line x1="46" y1="32" x2="54" y2="32" />
      <line x1="16" y1="16" x2="22" y2="22" />
      <line x1="42" y1="42" x2="48" y2="48" />
      <line x1="48" y1="16" x2="42" y2="22" />
      <line x1="22" y1="42" x2="16" y2="48" />
    </svg>
  );
}

function IconHardware({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} fill="none" stroke="var(--orange)" strokeWidth="2.4" strokeLinecap="square">
      {/* a stylized circuit board */}
      <rect x="10" y="14" width="44" height="36" />
      <rect x="20" y="22" width="12" height="10" fill="var(--orange)" />
      <line x1="20" y1="40" x2="44" y2="40" />
      <line x1="36" y1="22" x2="44" y2="22" />
      <line x1="36" y1="28" x2="44" y2="28" />
      <circle cx="44" cy="40" r="2.4" fill="var(--orange)" />
      <circle cx="20" cy="40" r="2.4" fill="var(--orange)" />
      <circle cx="14" cy="18" r="1.4" fill="var(--orange)" />
      <circle cx="50" cy="18" r="1.4" fill="var(--orange)" />
      <circle cx="14" cy="46" r="1.4" fill="var(--orange)" />
      <circle cx="50" cy="46" r="1.4" fill="var(--orange)" />
    </svg>
  );
}

type Principle = {
  icon: (props: { size?: number }) => JSX.Element;
  num: string;
  title: string;
  body: string;
};

const PRINCIPLES: Principle[] = [
  {
    icon: IconLock,
    num: '01',
    title: 'No rent, no API keys.',
    body: 'You buy it once or run it once. There is no per-message fee, no usage cap behind a paywall, no third-party model holding the keys to your own files.'
  },
  {
    icon: IconOffline,
    num: '02',
    title: 'Runs offline.',
    body: 'Where it can, the work happens on your machine. Disconnect the network and the software keeps working. Your data does not have to travel for the software to function.'
  },
  {
    icon: IconHardware,
    num: '03',
    title: 'Built like hardware.',
    body: 'Solid edges, predictable behaviour, documented internals. Versions are stamped. Specs live in the open. If something breaks we tell you what broke and why.'
  }
];

export function Principles() {
  return (
    <section className="px-5 py-12 md:py-16 hairline-t" style={{ background: 'var(--paper)' }}>
      <AnimateIn>
        <header className="flex items-baseline justify-between mb-3">
          <span className="t-label" style={{ fontSize: 10 }}>
            Unit 04 · Principles
          </span>
          <span className="t-label" style={{ fontSize: 9 }}>
            Fig. 04 / Three
          </span>
        </header>

        <h2 className="t-display mb-1" style={{ fontSize: 32, color: 'var(--ink)' }}>
          Built differently.
        </h2>
        <p className="text-[13px] mb-8" style={{ color: 'var(--ink-2)', maxWidth: 560 }}>
          The three rules every Paracord product follows. Not aspirations,
          working constraints.
        </p>
      </AnimateIn>

      <div
        className="grid gap-6 md:gap-5"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
      >
        {PRINCIPLES.map((p, i) => {
          const Icon = p.icon;
          return (
            <AnimateIn key={p.num} delay={i * 80}>
              <article
                className="frame-soft p-5 h-full flex flex-col"
                style={{ background: 'var(--paper)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <Icon />
                  <span
                    className="t-display"
                    style={{
                      fontSize: 20,
                      color: 'var(--orange)',
                      letterSpacing: '0.08em',
                      opacity: 0.6
                    }}
                  >
                    {p.num}
                  </span>
                </div>
                <h3
                  className="t-display mb-2"
                  style={{ fontSize: 18, color: 'var(--ink)' }}
                >
                  {p.title}
                </h3>
                <p className="text-[12.5px] leading-[1.7]" style={{ color: 'var(--ink-2)' }}>
                  {p.body}
                </p>
              </article>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
