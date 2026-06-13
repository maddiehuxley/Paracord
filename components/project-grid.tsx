'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import type { Project } from '@/lib/types';
import { ProjectCard, EmptySlot } from './project-card';

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const params = useSearchParams();
  const cat = (params.get('cat') ?? 'all').toLowerCase();

  const filtered = useMemo(() => {
    if (cat === 'all') return projects;
    return projects.filter((p) => p.category === cat);
  }, [projects, cat]);

  // Pad to at least 6 visible cards so the grid looks structured even early on
  const minSlots = 6;
  const empties = Math.max(0, minSlots - filtered.length);

  return (
    <section id="projects" className="bg-dots-soft px-5 py-8 hairline-t">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="t-display text-[22px]" style={{ color: 'var(--ink)' }}>
          All projects.
        </h2>
        <span className="t-label" style={{ fontSize: 9 }}>
          Fig. 03 / Index · {cat}
        </span>
      </header>

      <div
        className="grid gap-2.5"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}
      >
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        {Array.from({ length: empties }, (_, i) => (
          <EmptySlot
            key={`empty-${i}`}
            slot={filtered.length + i + 1}
            category={cat === 'all' ? undefined : cat}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p
          className="t-label mt-6"
          style={{ fontSize: 10, color: 'var(--ink-3)' }}
        >
          No projects in this category yet.
        </p>
      )}
    </section>
  );
}
