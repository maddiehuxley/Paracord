import type { Site } from '@/lib/types';
import type { Project } from '@/lib/types';
import { Logo } from './logo';

type FooterCol = { title: string; links: { label: string; href: string; external?: boolean }[] };

export function Footer({ site, projects }: { site: Site; projects: Project[] }) {
  const year = new Date().getFullYear();

  const featured = projects.find((p) => p.featured) ?? projects[0];

  const cols: FooterCol[] = [
    {
      title: 'Projects',
      links: [
        ...(featured ? [{ label: featured.name, href: featured.url ?? '#shipping', external: !!featured.url }] : []),
        { label: 'All projects', href: '/?cat=all#projects' },
        { label: 'Software', href: '/?cat=software#projects' },
        { label: 'Hardware', href: '/?cat=hardware#projects' },
        { label: 'Web apps', href: '/?cat=web#projects' }
      ]
    },
    {
      title: 'Paracord',
      links: [
        { label: 'Currently shipping', href: '#shipping' },
        { label: 'Principles', href: '#principles' },
        { label: 'Operator', href: '#operator' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com/maddiehuxley', external: true },
        ...site.socials.map((s) => ({ label: s.label, href: s.url, external: true }))
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Imprint', href: '/imprint' }
      ]
    }
  ];

  return (
    <footer className="hairline-t-thick" style={{ background: 'var(--paper)' }}>
      {/* top brand strip */}
      <div className="px-5 py-7 hairline-b">
        <div className="flex items-center gap-3 mb-4">
          <Logo size={36} variant="mark" />
          <div className="flex flex-col leading-none">
            <span className="t-display text-[20px]" style={{ color: 'var(--ink)' }}>
              PARACORD
            </span>
            <span className="t-label" style={{ marginTop: 3, fontSize: 9, letterSpacing: '0.35em' }}>
              CENTER
            </span>
          </div>
          <span
            className="t-label ml-auto"
            style={{ fontSize: 9 }}
          >
            v1.0 · BUILD STABLE
          </span>
        </div>
        <p className="text-[12.5px] max-w-[520px]" style={{ color: 'var(--ink-2)' }}>
          The workshop index for everything built under Paracord Commerce.
          Indexed, dated, archived. No tracking, no funnels, no popups.
        </p>
      </div>

      {/* columns */}
      <div
        className="grid gap-6 px-5 py-8 hairline-b"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))' }}
      >
        {cols.map((col) => (
          <div key={col.title}>
            <h4
              className="t-label mb-3 pb-2"
              style={{
                fontSize: 10,
                borderBottom: '1px solid var(--hairline-soft)'
              }}
            >
              {col.title}
            </h4>
            <ul className="flex flex-col gap-1.5">
              {col.links.map((l) => (
                <li key={l.label + l.href}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noreferrer' : undefined}
                    className="text-[12px] hover:text-[color:var(--orange)] transition-colors"
                    style={{ color: 'var(--ink)' }}
                  >
                    {l.label}{l.external ? ' ↗' : ''}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* bottom strip */}
      <div
        className="px-5 py-4 flex flex-wrap justify-between gap-3"
        style={{ fontSize: 10, color: 'var(--ink-2)', letterSpacing: '0.1em' }}
      >
        <div>© {year} PARACORD COMMERCE S.R.O.</div>
        <div className="flex gap-2 flex-wrap">
          <span>{site.operator.location.toUpperCase()}</span>
          <span style={{ color: 'var(--ink-3)' }}>·</span>
          <span>NO TRACKING</span>
          <span style={{ color: 'var(--ink-3)' }}>·</span>
          <span>NO ADS</span>
        </div>
      </div>
    </footer>
  );
}
