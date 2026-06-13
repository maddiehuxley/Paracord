import { Logo } from './logo';
import { AnimateIn } from './animate-in';

export function Hero({ intro }: { intro: string }) {
  return (
    <section id="top" className="relative bg-dots overflow-hidden">
      {/* corner labels */}
      <div className="absolute top-3 left-5 t-label" style={{ fontSize: 9 }}>
        Unit 01 · Index
      </div>
      <div className="absolute top-3 right-5 t-label" style={{ fontSize: 9 }}>
        paracord.center / v1.0
      </div>

      <div className="px-5 pt-14 pb-12 md:pt-20 md:pb-16">
        <AnimateIn>
          {/* The wordmark block, centered on its own row */}
          <div
            className="frame inline-flex items-center gap-6 px-6 py-5 md:px-8 md:py-6"
            style={{ background: 'var(--paper)' }}
          >
            <Logo size={86} variant="mark" priority />
            <div>
              <div
                className="t-display"
                style={{
                  fontSize: 56,
                  color: 'var(--ink)',
                  lineHeight: 0.92
                }}
              >
                PARACORD
              </div>
              <div
                className="t-label flex items-center gap-2"
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  letterSpacing: '0.7em'
                }}
              >
                CENTER
                <span className="t-caret" aria-hidden="true">▌</span>
              </div>
            </div>
          </div>
        </AnimateIn>

        <AnimateIn delay={80}>
          <p
            className="text-[14px] md:text-[15px] leading-[1.75] mt-6 px-4 py-3"
            style={{
              background: 'var(--paper)',
              borderLeft: '3px solid var(--orange)',
              color: 'var(--ink-2)',
              maxWidth: 620
            }}
          >
            {intro}
          </p>
        </AnimateIn>

        <AnimateIn delay={160}>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#projects" className="btn-shop btn-shop-solid">
              → Browse projects
            </a>
            <a href="#shipping" className="btn-shop">
              ↓ Currently shipping
            </a>
          </div>
        </AnimateIn>
      </div>

      {/* bottom hairline strip with stamp markers */}
      <div
        className="flex items-center justify-between px-5 py-2 hairline-t"
        style={{ background: 'var(--paper)', fontSize: 9, letterSpacing: '0.2em', color: 'var(--ink-3)' }}
      >
        <span>PRG · CZ</span>
        <span>BUILD · STABLE</span>
        <span>NO TRACKING · NO ADS</span>
      </div>
    </section>
  );
}
