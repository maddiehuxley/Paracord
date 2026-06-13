import type { Project } from '@/lib/types';

const CATEGORY_LABEL: Record<Project['category'], string> = {
  software: 'Software',
  hardware: 'Hardware',
  web: 'Web'
};

export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div>
        <h4 className="t-display text-[15px] mb-1" style={{ color: 'var(--ink)' }}>
          {project.name}
        </h4>
        <p className="text-[11px] leading-[1.55]" style={{ color: 'var(--ink-2)' }}>
          {project.tagline}
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="t-label" style={{ fontSize: 9 }}>
          {CATEGORY_LABEL[project.category]}
          {project.version ? ` · ${project.version}` : ''}
        </span>
        <span className="text-[14px]" style={{ color: 'var(--orange)' }} aria-hidden="true">
          →
        </span>
      </div>
    </>
  );

  const baseClass =
    'p-4 frame-soft min-h-[140px] flex flex-col justify-between transition-colors';
  const style: React.CSSProperties = { background: 'var(--paper)' };

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={`${baseClass} hover:border-[color:var(--orange)]`}
        style={style}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={baseClass} style={style}>
      {inner}
    </div>
  );
}

export function EmptySlot({ slot, category }: { slot: number; category?: string }) {
  return (
    <div
      className="p-4 frame-dashed min-h-[140px] flex flex-col justify-between"
      style={{ background: 'transparent', opacity: 0.55 }}
    >
      <div>
        <h4 className="t-display text-[15px] mb-1" style={{ color: 'var(--ink-2)' }}>
          Slot {String(slot).padStart(2, '0')}
        </h4>
        <p className="text-[11px] leading-[1.55]" style={{ color: 'var(--ink-3)' }}>
          Drop a folder under /content/projects to fill this slot.
        </p>
      </div>
      <div className="flex justify-between items-center mt-3">
        <span className="t-label" style={{ fontSize: 9 }}>
          {category ?? 'Open'}
        </span>
        <span className="text-[14px]" style={{ color: 'var(--orange)' }} aria-hidden="true">
          +
        </span>
      </div>
    </div>
  );
}
