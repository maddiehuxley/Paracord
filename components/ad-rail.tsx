const SLOTS = [
  {
    label: 'Sponsored',
    title: 'Your spot',
    body: 'A small ad here funds the workshop.',
    href: 'mailto:hello@paracord.center?subject=Sponsorship'
  },
  {
    label: 'Sponsored',
    title: 'Tip jar',
    body: 'One-off support for the next release.',
    href: '#support'
  },
  {
    label: 'Sponsored',
    title: 'Buy a sticker',
    body: 'Logo on your laptop, money in the till.',
    href: '#shop'
  }
];

/**
 * Right-side fixed ad rail. Slim, sticky, hidden on narrow screens.
 * Each slot is a real link the visitor can act on.
 */
export function AdRail() {
  return (
    <aside className="ad-rail" aria-label="Sponsored panel">
      <div className="ad-slot-label" style={{ marginBottom: 2 }}>
        Temporary
      </div>
      {SLOTS.map((s) => (
        <a key={s.title} href={s.href} className="ad-slot">
          <div
            className="t-mono"
            style={{
              fontSize: 8.5,
              letterSpacing: '0.18em',
              color: 'var(--ink-4)',
              textTransform: 'uppercase'
            }}
          >
            {s.label}
          </div>
          <div
            className="t-display-md"
            style={{ fontSize: 14, color: 'var(--ink)' }}
          >
            {s.title}
          </div>
          <div
            style={{
              fontSize: 10.5,
              color: 'var(--ink-3)',
              lineHeight: 1.4,
              marginTop: 2
            }}
          >
            {s.body}
          </div>
        </a>
      ))}
    </aside>
  );
}
