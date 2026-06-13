'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import type { Project } from '@/lib/types';
import { ProjectCard } from './project-card';
import { AnimateIn } from './animate-in';

const CATEGORY_COPY: Record<string, { label: string; sub: string }> = {
  all: { label: 'All projects', sub: 'Everything we ship, in one index.' },
  software: { label: 'Software', sub: 'Desktop and command-line builds.' },
  hardware: { label: 'Hardware', sub: 'Physical things and embedded work.' },
  web: { label: 'Web apps', sub: 'Things you visit in a browser.' }
};

export function ProjectGrid({ projects }: { projects: Project[] }) {
  const params = useSearchParams();
  const cat = (params.get('cat') ?? 'all').toLowerCase();

  const filtered = useMemo(() => {
    if (cat === 'all') return projects;
    return projects.filter((p) => p.category === cat);
  }, [projects, cat]);

  const copy = CATEGORY_COPY[cat] ?? CATEGORY_COPY.all;

  return (
    <section id="projects" className="px-5 py-10 md:py-14 hairline-t bg-dots-soft">
      <AnimateIn>
        <header className="flex items-baseline justify-between mb-3">
          <span className="t-label" style={{ fontSize: 10 }}>
            Unit 03 · Index
          </span>
          <span className="t-label" style={{ fontSize: 9 }}>
            Fig. 03 / {cat}
          </span>
        </header>

        <h2 className="t-display mb-1" style={{ fontSize: 32, color: 'var(--ink)' }}>
          {copy.label}.
        </h2>
        <p
          className="text-[13px] mb-7"
          style={{ color: 'var(--ink-2)', maxWidth: 520 }}
        >
          {copy.sub}
        </p>
      </AnimateIn>

      {filtered.length === 0 ? (
        <div
          className="frame-dashed p-8 text-center"
          style={{ background: 'var(--paper)' }}
        >
          <div className="t-label mb-2" style={{ fontSize: 10 }}>
            Empty drawer
          </div>
          <p className="text-[13px]" style={{ color: 'var(--ink-2)' }}>
            Nothing under {cat} yet. Check back as we ship more.
          </p>
        </div>
      ) : (
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))' }}
        >
          {filtered.map((p, i) => (
            <AnimateIn key={p.slug} delay={i * 60}>
              <ProjectCard project={p} />
            </AnimateIn>
          ))}
        </div>
      )}
    </section>
  );
}
