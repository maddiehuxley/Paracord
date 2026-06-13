import type { Project } from '@/lib/types';
import { ProjectCover } from './project-cover';
import { AnimateIn } from './animate-in';

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

export function Shipping({ project }: { project: Project }) {
  return (
    <section id="shipping" className="px-5 py-10 md:py-14 hairline-t">
      <AnimateIn>
        <header className="flex items-baseline justify-between mb-5">
          <div className="flex items-baseline gap-3">
            <span className="t-label" style={{ fontSize: 10 }}>
              Unit 02 · Active
            </span>
          </div>
          <span className="t-label" style={{ fontSize: 9 }}>
            Fig. 02 / Highlight
          </span>
        </header>

        <h2
          className="t-display mb-6"
          style={{ fontSize: 32, color: 'var(--ink)' }}
        >
          Currently shipping.
        </h2>
      </AnimateIn>

      <AnimateIn delay={120}>
        <article
          className="frame overflow-hidden grid md:gap-0"
          style={{ gridTemplateColumns: 'minmax(0, 1fr)' }}
        >
          <div className="grid md:grid-cols-2">
            <div style={{ background: 'transparent' }}>
              <ProjectCover project={project} height={260} big />
            </div>
            <div
              className="p-5 md:p-7 flex flex-col justify-between"
              style={{
                background: 'var(--paper)',
                borderLeft: '1px dashed var(--hairline)'
              }}
            >
              <div>
                <div className="t-label" style={{ fontSize: 10 }}>
                  {CATEGORY_LABEL[project.category]} · {STATUS_LABEL[project.status]}
                  {project.version ? ` · ${project.version}` : ''}
                </div>
                <h3
                  className="t-display my-2"
                  style={{ fontSize: 30, color: 'var(--ink)' }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-[13px] md:text-[14px] leading-[1.7] mb-5"
                  style={{ color: 'var(--ink-2)' }}
                >
                  {project.description}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-shop btn-shop-solid"
                  >
                    → Visit
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-shop"
                  >
                    Repo
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>
      </AnimateIn>
    </section>
  );
}
