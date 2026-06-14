const WAYS = [
  { label: 'Source code', href: 'https://github.com/maddiehuxley' },
  { label: 'Bug reports', href: 'https://github.com/maddiehuxley' },
  { label: 'Translations', href: '#' },
  { label: 'Documentation', href: '#' },
  { label: 'Design feedback', href: 'mailto:hello@paracord.center' },
  { label: 'Spread the word', href: '#' }
];

export function JoinUs() {
  return (
    <section id="open-source" className="section section-soft">
      <div className="grid gap-12 md:gap-16 md:grid-cols-2 items-start">
        <div className="animate-fade-up">
          <div className="t-eyebrow mb-3">Built in the open</div>
          <h2
            className="t-display t-underline mb-5"
            style={{
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--ink)'
            }}
          >
            Help us make it better.
          </h2>

          <p
            className="mb-5"
            style={{ fontSize: 16, color: 'var(--ink-2)', lineHeight: 1.6 }}
          >
            <strong style={{ color: 'var(--ink)' }}>Welcome.</strong> Paracord
            is a small workshop, but the things we ship are open enough that
            anyone can poke at them. You can read the code, file a bug, send a
            patch, or just tell us where the rough edges are.
          </p>

          <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>
            Not a developer? That's fine. Writing, translating, testing, and
            sharing what we ship are all real contributions.
          </p>
        </div>

        <div className="animate-fade-up delay-2">
          <div className="t-mono mb-4" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--ink-3)', textTransform: 'uppercase' }}>
            Pick a thread
          </div>
          <div className="flex flex-wrap gap-2.5">
            {WAYS.map((w) => (
              <a
                key={w.label}
                href={w.href}
                target={w.href.startsWith('http') ? '_blank' : undefined}
                rel={w.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center px-4 py-2.5 rounded-md transition-colors"
                style={{
                  background: 'var(--orange)',
                  color: '#FFFFFF',
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '-0.005em'
                }}
                onMouseDown={(e) => e.preventDefault()}
              >
                {w.label}
              </a>
            ))}
          </div>

          <div
            className="mt-7 p-5 rounded-md"
            style={{
              background: 'var(--paper)',
              border: '1px solid var(--hairline)'
            }}
          >
            <div className="t-mono mb-1" style={{ fontSize: 11, letterSpacing: '0.16em', color: 'var(--orange-deep)', textTransform: 'uppercase' }}>
              Mentor
            </div>
            <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>
              Before you start, ping{' '}
              <a className="link" href="mailto:hello@paracord.center">hello@paracord.center</a>{' '}
              for an orientation chat. Saves us all a few iterations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
