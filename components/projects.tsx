import type { Project } from '@/lib/types';
import { ProjectCard } from './project-card';

export function Projects({ projects }: { projects: Project[] }) {
  const count = projects.length;
  return (
    <section id="projects" className="section section-warm">
      <header className="mb-12 max-w-prose">
        <div className="t-eyebrow mb-3">The catalogue</div>
        <h2
          className="t-display t-underline mb-4"
          style={{ fontSize: 'clamp(28px, 4vw, 40px)', color: 'var(--ink)' }}
        >
          One workshop. {count === 1 ? 'One tool, so far.' : `${count} tools.`}
        </h2>
        <p style={{ fontSize: 16, color: 'var(--ink-2)' }}>
          Every project Paracord Commerce ships, all in one place. Pick anything
          to dive in.
        </p>
      </header>

      <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <div
            key={p.slug}
            className="animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
