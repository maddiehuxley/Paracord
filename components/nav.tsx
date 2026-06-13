'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Logo } from './logo';
import { ThemeToggle } from './theme-toggle';

const TABS = [
  { key: 'all', label: 'All' },
  { key: 'software', label: 'Software' },
  { key: 'hardware', label: 'Hardware' },
  { key: 'web', label: 'Web apps' }
] as const;

export function Nav() {
  const router = useRouter();
  const params = useSearchParams();
  const active = (params.get('cat') ?? 'all').toLowerCase();

  function setCat(cat: string) {
    const next = new URLSearchParams(Array.from(params.entries()));
    if (cat === 'all') next.delete('cat');
    else next.set('cat', cat);
    router.replace(`/?${next.toString()}#projects`, { scroll: false });
  }

  return (
    <nav
      className="sticky top-0 z-30 flex items-center justify-between px-5 py-3 hairline-b-thick"
      style={{ background: 'var(--paper)' }}
    >
      <a href="#top" className="flex items-center gap-2" aria-label="Paracord Center home">
        <Logo size={26} />
        <span className="flex flex-col leading-none">
          <span className="t-display text-[18px]" style={{ color: 'var(--ink)' }}>
            PARACORD
          </span>
          <span className="t-label" style={{ marginTop: 2, fontSize: 8 }}>
            CENTER
          </span>
        </span>
      </a>

      <div className="hidden md:flex items-center gap-5">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setCat(t.key)}
            className="text-[10px] uppercase tracking-[0.15em] pb-1 transition-colors"
            style={{
              color: active === t.key ? 'var(--orange)' : 'var(--ink-2)',
              borderBottom: `1.5px solid ${active === t.key ? 'var(--orange)' : 'transparent'}`
            }}
          >
            {t.label}
          </button>
        ))}
      </div>

      <ThemeToggle />
    </nav>
  );
}
