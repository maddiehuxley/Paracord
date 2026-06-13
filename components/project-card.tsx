import type { Project } from '@/lib/types';
import { ProjectCover } from './project-cover';

const CATEGORY_LABEL: Record<Project['category'], string> = {
  software: 'Software',
  hardware: 'Hardware',
  web: 'Web app'
};

const STATUS_LABEL: Record<Project['status'], string> = {
  active: 'Active',
  beta: 'Beta',
  wip: 'In progress',
  archived: 'Archived'
};

export function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <ProjectCover project={project} height={170} />
      <div
        className="p-4 flex flex-col gap-2"
        style={{
          background: 'var(--paper)',
          borderTop: '1px dashed var(--hairline)'
        }}
      >
        <div className="t-label" style={{ fontSize: 9 }}>
          {CATEGORY_LABEL[project.category]} · {STATUS_LABEL[project.status]}
          {project.version ? ` · ${project.version}` : ''}
        </div>
        <h3
          className="t-display"
          style={{ fontSize: 20, color: 'var(--ink)', lineHeight: 1 }}
        >
          {project.name}
        </h3>
        <p className="text-[12px] leading-[1.6]" style={{ color: 'var(--ink-2)' }}>
          {project.tagline}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="t-label" style={{ fontSize: 9 }}>
            {project.url ? 'Open ↗' : 'Internal'}
          </span>
          <span
            className="text-[18px] transition-transform"
            style={{ color: 'var(--orange)' }}
            aria-hidden="true"
          >
            →
          </span>
        </div>
      </div>
    </>
  );

  const baseClass =
    'frame-soft overflow-hidden flex flex-col transition-all duration-200 ' +
    'hover:border-[color:var(--orange)] hover:-translate-y-0.5';

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noreferrer" className={baseClass}>
        {inner}
      </a>
    );
  }

  return <div className={baseClass}>{inner}</div>;
}
