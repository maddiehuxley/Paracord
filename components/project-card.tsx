import Image from 'next/image';
import type { Project } from '@/lib/types';

const CATEGORY_LABEL: Record<Project['category'], string> = {
  software: 'Software',
  hardware: 'Hardware',
  web: 'Web app'
};

const STATUS_TONE: Record<Project['status'], { dot: string; label: string }> = {
  active: { dot: 'var(--orange)', label: 'Live' },
  beta: { dot: '#FFB54D', label: 'Beta' },
  wip: { dot: '#9AA1A8', label: 'In progress' },
  archived: { dot: '#888888', label: 'Archived' }
};

export function ProjectCard({ project }: { project: Project }) {
  const status = STATUS_TONE[project.status];

  const inner = (
    <>
      <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
        {project.cover ? (
          <Image
            src={project.cover}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        ) : (
          <PlaceholderCover name={project.name} />
        )}
      </div>

      <div className="p-5">
        <div className="flex items-center gap-2 mb-2" style={{ fontSize: 11 }}>
          <span
            style={{
              display: 'inline-block',
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: status.dot
            }}
          />
          <span
            className="t-mono"
            style={{
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              fontSize: 10
            }}
          >
            {CATEGORY_LABEL[project.category]} · {status.label}
            {project.version ? ` · ${project.version}` : ''}
          </span>
        </div>

        <h3
          className="t-display-md mb-2"
          style={{ fontSize: 22, color: 'var(--ink)' }}
        >
          {project.name}
        </h3>

        <p
          className="mb-4"
          style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}
        >
          {project.tagline}
        </p>

        <span
          className="link"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }}
        >
          {project.url ? 'Open project' : 'In the workshop'}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </>
  );

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="card card-hover flex flex-col h-full"
      >
        {inner}
      </a>
    );
  }

  return <div className="card flex flex-col h-full">{inner}</div>;
}

function PlaceholderCover({ name }: { name: string }) {
  return (
    <div
      className="w-full h-full flex items-center justify-center relative"
      style={{
        background: 'linear-gradient(135deg, var(--orange-soft) 0%, #FFF3E0 100%)',
        backgroundImage:
          'radial-gradient(circle, rgba(255, 140, 26, 0.25) 1.2px, transparent 1.4px), linear-gradient(135deg, var(--orange-soft) 0%, #FFF3E0 100%)',
        backgroundSize: '14px 14px, 100% 100%'
      }}
    >
      <div
        className="t-display"
        style={{
          fontSize: 36,
          color: 'var(--orange-dark)',
          opacity: 0.7,
          letterSpacing: '-0.03em'
        }}
      >
        {name}
      </div>
    </div>
  );
}
