import { Logo } from './logo';

const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Why Paracord', href: '#why' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Blog', href: '/blog' }
];

export function Header() {
  return (
    <header
      className="sticky top-0 z-20 flex items-center justify-between gap-6 px-6 md:px-10 py-4 backdrop-blur"
      style={{
        background: 'rgba(255, 255, 255, 0.92)',
        borderBottom: '1px solid var(--hairline)'
      }}
    >
      <a href="#top" className="flex items-center gap-3" aria-label="Paracord Center home">
        <Logo size={34} variant="mark-knockout" priority />
        <span className="flex flex-col leading-none">
          <span
            className="t-display-md"
            style={{
              fontSize: 17,
              letterSpacing: '-0.01em',
              color: 'var(--ink)'
            }}
          >
            Paracord
          </span>
          <span
            className="t-mono"
            style={{
              marginTop: 3,
              fontSize: 9,
              letterSpacing: '0.28em',
              color: 'var(--orange-deep)',
              textTransform: 'uppercase'
            }}
          >
            Center
          </span>
        </span>
      </a>

      <nav className="hidden md:flex items-center gap-7">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[14px] font-medium hover:text-[color:var(--orange-deep)] transition-colors"
            style={{ color: 'var(--ink)' }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a href="#support" className="btn btn-primary" style={{ padding: '9px 18px' }}>
        Support us
      </a>
    </header>
  );
}
