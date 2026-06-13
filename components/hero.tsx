import { Logo } from './logo';

export function Hero({ intro }: { intro: string }) {
  return (
    <section id="top" className="relative bg-dots px-5 py-10 md:py-16">
      <span className="absolute top-2 left-5 t-label" style={{ fontSize: 9 }}>
        Unit 01
      </span>
      <span className="absolute top-2 right-5 t-label" style={{ fontSize: 9 }}>
        paracord.center / idx
      </span>

      <div className="flex flex-col items-start gap-4 max-w-3xl">
        <div
          className="frame inline-flex items-center gap-5 px-6 py-5"
          style={{ background: 'var(--paper)' }}
        >
          <Logo size={72} stroke={3} />
          <div>
            <div className="t-display" style={{ fontSize: 56, color: 'var(--ink)' }}>
              PARACORD
            </div>
            <div
              className="t-label"
              style={{ marginTop: 6, fontSize: 13, letterSpacing: '0.7em' }}
            >
              CENTER
            </div>
          </div>
        </div>

        <p
          className="text-[13px] leading-[1.7] px-4 py-3"
          style={{
            background: 'var(--paper)',
            borderLeft: '3px solid var(--orange)',
            color: 'var(--ink-2)',
            maxWidth: 560
          }}
        >
          {intro}
        </p>
      </div>
    </section>
  );
}
