'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="text-[10px] tracking-[0.15em] uppercase px-2 py-1 frame-soft"
        style={{ color: 'var(--ink-2)' }}
      >
        ◐ MODE
      </button>
    );
  }

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="text-[10px] tracking-[0.15em] uppercase px-2 py-1 frame-soft hover:border-[color:var(--orange)]"
      style={{ color: 'var(--ink-2)' }}
    >
      {theme === 'dark' ? '◑ LIGHT' : '◐ DARK'}
    </button>
  );
}
