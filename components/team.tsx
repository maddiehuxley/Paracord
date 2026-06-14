export function Team() {
  return (
    <section className="section section-warm">
      <header className="mb-12 text-center max-w-prose mx-auto">
        <div className="t-eyebrow mb-3">The workshop</div>
        <h2
          className="t-display t-underline"
          style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: 'var(--ink)'
          }}
        >
          Meet the maker.
        </h2>
      </header>

      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-page mx-auto">
        <TeamCard
          name="Maddie"
          role="Founder · everything else"
          quote="I started Paracord because I was tired of paying rent on software I had already paid for."
        />
        <TeamCard
          name="Open slot"
          role="Future contributor"
          quote="The bench is wide. If you have ideas, get in touch."
          ghost
        />
        <TeamCard
          name="You?"
          role="Tester · designer · packager"
          quote="Pick a thread above and pull on it. We will help you land your first patch."
          ghost
        />
      </div>
    </section>
  );
}

function TeamCard({
  name,
  role,
  quote,
  ghost = false
}: {
  name: string;
  role: string;
  quote: string;
  ghost?: boolean;
}) {
  return (
    <article
      className="card p-6 h-full flex flex-col"
      style={{
        background: ghost ? 'transparent' : 'var(--paper)',
        borderStyle: ghost ? 'dashed' : 'solid',
        opacity: ghost ? 0.7 : 1
      }}
    >
      {/* Stylized portrait stamp */}
      <div
        className="mb-5 rounded-md flex items-center justify-center"
        style={{
          width: 64,
          height: 64,
          background: ghost ? 'transparent' : 'var(--orange-soft)',
          border: ghost ? '1px dashed var(--ink-4)' : 'none',
          fontFamily: 'var(--font-geist-sans)',
          fontWeight: 800,
          fontSize: 24,
          color: 'var(--orange-dark)',
          letterSpacing: '-0.03em'
        }}
      >
        {ghost ? '?' : name.charAt(0)}
      </div>

      <h3
        className="t-display-md mb-1"
        style={{ fontSize: 18, color: 'var(--ink)' }}
      >
        {name}
      </h3>
      <div
        className="t-mono mb-3"
        style={{
          fontSize: 11,
          letterSpacing: '0.08em',
          color: 'var(--ink-3)',
          textTransform: 'uppercase'
        }}
      >
        {role}
      </div>
      <p
        style={{
          fontSize: 13.5,
          color: 'var(--ink-2)',
          lineHeight: 1.55,
          marginTop: 'auto'
        }}
      >
        {quote}
      </p>
    </article>
  );
}
