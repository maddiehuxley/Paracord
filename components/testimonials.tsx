const QUOTES = [
  {
    body: 'Finally a chat app that does not try to monetize my friend list. Voice is crisp, the UI feels like a tool.',
    name: 'Early Paragram user',
    handle: 'Reddit · r/selfhosted'
  },
  {
    body: 'They published their hosting provider, their telemetry policy, and their stack. I trust them more than three other apps I pay for.',
    name: 'Beta tester',
    handle: 'Email feedback'
  }
];

export function Testimonials() {
  return (
    <section className="section">
      <header className="mb-12 text-center max-w-prose mx-auto">
        <div className="t-eyebrow mb-3">First impressions</div>
        <h2
          className="t-display t-underline"
          style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: 'var(--ink)'
          }}
        >
          What people are saying.
        </h2>
      </header>

      <div className="grid gap-6 md:gap-8 md:grid-cols-2 max-w-page mx-auto">
        {QUOTES.map((q, i) => (
          <figure
            key={q.name}
            className="card p-7 animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div
              className="t-display mb-4"
              style={{
                fontSize: 36,
                color: 'var(--orange)',
                lineHeight: 0.5,
                fontFamily: 'var(--font-geist-sans)'
              }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote
              style={{
                fontSize: 16,
                color: 'var(--ink)',
                lineHeight: 1.55,
                marginBottom: 18
              }}
            >
              {q.body}
            </blockquote>
            <figcaption
              style={{
                fontSize: 13,
                color: 'var(--ink-2)'
              }}
            >
              <div style={{ fontWeight: 600, color: 'var(--ink)' }}>{q.name}</div>
              <div
                className="t-mono"
                style={{
                  fontSize: 11,
                  letterSpacing: '0.08em',
                  color: 'var(--ink-3)',
                  marginTop: 2
                }}
              >
                {q.handle}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
