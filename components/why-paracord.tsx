function IllustrationLock() {
  return (
    <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
      {/* dotted ground */}
      <g fill="var(--orange)" opacity="0.18">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx={20 + i * 28} cy={148} r={2} />
        ))}
      </g>
      {/* lock body */}
      <rect x="60" y="68" width="80" height="68" rx="6" fill="var(--orange)" />
      <path
        d="M75 68 V52 a25 25 0 0 1 50 0 V68"
        stroke="var(--ink)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* keyhole */}
      <circle cx="100" cy="96" r="7" fill="var(--ink)" />
      <rect x="97" y="98" width="6" height="16" fill="var(--ink)" />
      {/* rivets */}
      <circle cx="68" cy="76" r="2.4" fill="var(--ink)" />
      <circle cx="132" cy="76" r="2.4" fill="var(--ink)" />
      <circle cx="68" cy="128" r="2.4" fill="var(--ink)" />
      <circle cx="132" cy="128" r="2.4" fill="var(--ink)" />
      {/* corner dots in margin */}
      <circle cx="15" cy="20" r="3" fill="var(--orange)" />
      <circle cx="185" cy="20" r="3" fill="var(--orange)" />
    </svg>
  );
}

function IllustrationOffline() {
  return (
    <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
      {/* dotted ground */}
      <g fill="var(--orange)" opacity="0.18">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx={20 + i * 28} cy={148} r={2} />
        ))}
      </g>
      {/* monitor */}
      <rect x="40" y="40" width="120" height="80" rx="4" fill="var(--orange)" />
      <rect x="48" y="48" width="104" height="64" rx="2" fill="var(--ink)" />
      {/* stand */}
      <rect x="85" y="120" width="30" height="6" fill="var(--orange)" />
      <rect x="70" y="126" width="60" height="6" rx="2" fill="var(--orange)" />
      {/* terminal lines */}
      <rect x="55" y="56" width="40" height="3" fill="var(--orange)" opacity="0.8" />
      <rect x="55" y="64" width="60" height="3" fill="rgba(255,255,255,0.6)" />
      <rect x="55" y="72" width="50" height="3" fill="rgba(255,255,255,0.4)" />
      <rect x="55" y="80" width="70" height="3" fill="rgba(255,255,255,0.5)" />
      <rect x="55" y="88" width="35" height="3" fill="rgba(255,255,255,0.4)" />
      {/* unplugged cable */}
      <path
        d="M160 88 Q180 92 178 110 Q176 122 168 124"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="168" cy="124" r="4" fill="var(--ink)" />
    </svg>
  );
}

function IllustrationCircuit() {
  return (
    <svg viewBox="0 0 200 160" width="100%" height="100%" fill="none">
      {/* dotted ground */}
      <g fill="var(--orange)" opacity="0.18">
        {Array.from({ length: 7 }).map((_, i) => (
          <circle key={i} cx={20 + i * 28} cy={148} r={2} />
        ))}
      </g>
      {/* board */}
      <rect x="30" y="36" width="140" height="92" rx="4" fill="var(--orange)" />
      {/* chip */}
      <rect x="78" y="64" width="44" height="36" fill="var(--ink)" />
      <text
        x="100"
        y="86"
        textAnchor="middle"
        fontFamily="var(--font-geist-mono)"
        fontSize="9"
        fontWeight="700"
        fill="var(--orange)"
      >
        PCD
      </text>
      {/* chip legs */}
      {[68, 76, 84, 92].map((y) => (
        <rect key={y} x="68" y={y} width="10" height="3" fill="var(--ink)" />
      ))}
      {[68, 76, 84, 92].map((y) => (
        <rect key={y} x="122" y={y} width="10" height="3" fill="var(--ink)" />
      ))}
      {/* solder points */}
      {[
        [44, 50], [156, 50], [44, 114], [156, 114],
        [44, 82], [156, 82]
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={3} fill="var(--ink)" />
      ))}
      {/* traces */}
      <path
        d="M44 50 L60 50 L60 64"
        stroke="var(--ink)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M156 50 L140 50 L140 64"
        stroke="var(--ink)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M44 114 L60 114 L60 100"
        stroke="var(--ink)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M156 114 L140 114 L140 100"
        stroke="var(--ink)"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

const ARGS = [
  {
    Illustration: IllustrationLock,
    title: 'No rent, no API keys.',
    body: (
      <>
        You buy it once or run it once. There is no per-message fee, no usage
        cap behind a paywall, no third party holding the keys to your own files.
      </>
    )
  },
  {
    Illustration: IllustrationOffline,
    title: 'Runs offline where it can.',
    body: (
      <>
        Where the work can happen on your machine, it does. Disconnect the
        network and the software keeps working. Your data does not have to
        travel for the software to function.
      </>
    )
  },
  {
    Illustration: IllustrationCircuit,
    title: 'Built like hardware.',
    body: (
      <>
        Solid edges, predictable behaviour, documented internals. Versions are
        stamped. Specs live in the open. If something breaks we tell you what
        broke and why.
      </>
    )
  }
];

export function WhyParacord() {
  return (
    <section id="why" className="section">
      <header className="mb-12 text-center max-w-prose mx-auto">
        <div className="t-eyebrow mb-3">The case for it</div>
        <h2
          className="t-display t-underline mb-4"
          style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            color: 'var(--ink)'
          }}
        >
          Why Choose Paracord?
        </h2>
      </header>

      <div className="grid gap-12 md:gap-10 md:grid-cols-3 max-w-page mx-auto">
        {ARGS.map(({ Illustration, title, body }, i) => (
          <div
            key={title}
            className="text-center animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div
              className="mx-auto mb-6"
              style={{ maxWidth: 220, aspectRatio: '5 / 4' }}
            >
              <Illustration />
            </div>
            <h3
              className="t-display-md mb-3"
              style={{ fontSize: 20, color: 'var(--ink)' }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: 14,
                color: 'var(--ink-2)',
                lineHeight: 1.6,
                maxWidth: 280,
                margin: '0 auto'
              }}
            >
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
