import type { Project } from '@/lib/types';

const STATUS_LABEL: Record<Project['status'], string> = {
  active: 'Active',
  beta: 'Beta',
  wip: 'In progress',
  archived: 'Archived'
};

const CATEGORY_LABEL: Record<Project['category'], string> = {
  software: 'Software',
  hardware: 'Hardware',
  web: 'Web app'
};

export function Featured({ project }: { project: Project }) {
  return (
    <section className="px-5 py-7 hairline-t">
      <header className="flex items-baseline justify-between mb-4">
        <h2 className="t-display text-[22px]" style={{ color: 'var(--ink)' }}>
          Currently shipping.
        </h2>
        <span className="t-label" style={{ fontSize: 9 }}>
          Fig. 02 / Highlight
        </span>
      </header>

      <article
        className="frame overflow-hidden grid"
        style={{ gridTemplateColumns: 'minmax(180px, 240px) 1fr' }}
      >
        <div
          className="bg-dots-tight flex items-center justify-center p-5"
          style={{ background: 'transparent' }}
        >
          {project.cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.cover}
              alt={`${project.name} cover`}
              className="max-w-full max-h-[140px] frame"
              style={{ background: 'var(--paper)' }}
            />
          ) : (
            <div
              className="frame px-4 py-3 t-display text-[16px]"
              style={{ background: 'var(--paper)', color: 'var(--ink)' }}
            >
              {project.name.toUpperCase()}
              {project.version && (
                <div
                  className="t-label"
                  style={{ marginTop: 4, fontSize: 9, letterSpacing: '0.2em' }}
                >
                  {project.version}
                </div>
              )}
            </div>
          )}
        </div>

        <div
          className="p-5"
          style={{ background: 'var(--paper)', borderLeft: '1px dashed var(--hairline)' }}
        >
          <div className="t-label" style={{ fontSize: 10 }}>
            {CATEGORY_LABEL[project.category]} · {STATUS_LABEL[project.status]}
            {project.version ? ` · ${project.version}` : ''}
          </div>
          <h3
            className="t-display text-[22px] mt-1 mb-2"
            style={{ color: 'var(--ink)' }}
          >
            {project.name}
          </h3>
          <p className="text-[12px] leading-[1.7] mb-4" style={{ color: 'var(--ink-2)' }}>
            {project.description}
          </p>
          <div className="flex gap-3 flex-wrap">
            {project.url && (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn-shop">
                → Visit
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-shop"
                style={{
                  borderColor: 'var(--hairline)',
                  color: 'var(--ink-2)'
                }}
              >
                Repo
              </a>
            )}
          </div>
        </div>
      </article>
    </section>
  );
}
