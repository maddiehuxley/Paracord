import Image from 'next/image';
import type { Project } from '@/lib/types';

const STATUS_DOT: Record<Project['status'], string> = {
  active: 'var(--orange)',
  beta: '#FFB54D',
  wip: '#C0A050',
  archived: 'var(--ink-3)'
};

/**
 * Renders a project's visual:
 * - If `cover` is set, shows the image.
 * - Otherwise, draws a workshop-styled "label card" using the project's name.
 *
 * The styled variant looks like a stamped specification card so the grid
 * never has empty rectangles even before screenshots exist.
 */
export function ProjectCover({
  project,
  height = 200,
  big = false
}: {
  project: Project;
  height?: number;
  big?: boolean;
}) {
  if (project.cover) {
    return (
      <div className="relative w-full overflow-hidden" style={{ height }}>
        <Image
          src={project.cover}
          alt={`${project.name} cover`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full bg-dots-tight flex items-center justify-center"
      style={{ height }}
    >
      <div
        className="frame px-5 py-4 inline-flex flex-col items-start gap-1"
        style={{ background: 'var(--paper)', minWidth: big ? 220 : 160 }}
      >
        {/* top spec row */}
        <div className="flex items-center gap-1.5 text-[8px] tracking-[0.2em] uppercase" style={{ color: 'var(--ink-3)' }}>
          <span
            style={{
              display: 'inline-block',
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: STATUS_DOT[project.status]
            }}
            aria-hidden="true"
          />
          {project.category} · {project.status}
        </div>
        <div
          className="t-display"
          style={{
            fontSize: big ? 26 : 20,
            color: 'var(--ink)',
            lineHeight: 1,
            paddingTop: 2
          }}
        >
          {project.name.toUpperCase()}
        </div>
        {project.version && (
          <div className="t-label" style={{ fontSize: 9, letterSpacing: '0.25em' }}>
            {project.version}
          </div>
        )}
        {/* faux corner stamp */}
        <div
          className="absolute"
          style={{
            top: 8,
            right: 10,
            fontSize: 7,
            letterSpacing: '0.2em',
            color: 'var(--ink-3)'
          }}
        >
          PCD · {String(project.slug).slice(0, 4).toUpperCase()}
        </div>
      </div>
    </div>
  );
}
