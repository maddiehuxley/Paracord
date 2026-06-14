import { Logo } from './logo';
import type { Project } from '@/lib/types';

type Col = {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
};

export function Footer({ projects }: { projects: Project[] }) {
  const year = new Date().getFullYear();
  const featured = projects.find((p) => p.featured) ?? projects[0];

  const cols: Col[] = [
    {
      title: 'Projects',
      links: [
        ...(featured
          ? [{ label: featured.name, href: featured.url ?? '#projects', external: !!featured.url }]
          : []),
        { label: 'All projects', href: '#projects' },
        { label: 'Software', href: '#projects' },
        { label: 'Hardware', href: '#projects' },
        { label: 'Web apps', href: '#projects' }
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'Why Paracord', href: '#why' },
        { label: 'Built in the open', href: '#open-source' },
        { label: 'Meet the maker', href: '#team' },
        { label: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Connect',
      links: [
        { label: 'GitHub', href: 'https://github.com/maddiehuxley', external: true },
        { label: 'Email', href: 'mailto:hello@paracord.center' },
        { label: 'Mastodon', href: '#', external: true },
        { label: 'RSS', href: '/feed.xml' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Imprint', href: '/imprint' },
        { label: 'Trademark', href: '/trademark' }
      ]
    }
  ];

  return (
    <footer style={{ background: 'var(--paper-soft)', borderTop: '1px solid var(--hairline)' }}>
      {/* top brand strip */}
      <div
        className="px-6 md:px-10 py-10"
        style={{ borderBottom: '1px solid var(--hairline)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-6 max-w-page mx-auto">
          <div className="flex items-center gap-3">
            <Logo size={40} variant="mark-knockout" />
            <div className="flex flex-col leading-none">
              <span
                className="t-display-md"
                style={{ fontSize: 20, color: 'var(--ink)' }}
              >
                Paracord
              </span>
              <span
                className="t-mono"
                style={{
                  marginTop: 3,
                  fontSize: 10,
                  letterSpacing: '0.28em',
                  color: 'var(--orange-deep)',
                  textTransform: 'uppercase'
                }}
              >
                Center
              </span>
            </div>
          </div>

          <p style={{ fontSize: 13, color: 'var(--ink-2)', maxWidth: 380 }}>
            The home for everything built under Paracord Commerce.
            No tracking, no funnels, no popups.
          </p>
        </div>
      </div>

      {/* columns */}
      <div className="px-6 md:px-10 py-10">
        <div
          className="grid gap-8 max-w-page mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}
        >
          {cols.map((col) => (
            <div key={col.title}>
              <h4
                className="t-display-md mb-4 pb-2"
                style={{
                  fontSize: 13,
                  color: 'var(--ink)',
                  borderBottom: '2px solid var(--orange)',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.label + l.href}>
                    <a
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noreferrer' : undefined}
                      className="hover:text-[color:var(--orange-deep)] transition-colors"
                      style={{ fontSize: 13.5, color: 'var(--ink-2)', fontWeight: 500 }}
                    >
                      {l.label}{l.external ? ' ↗' : ''}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* bottom strip */}
      <div
        className="px-6 md:px-10 py-5"
        style={{ borderTop: '1px solid var(--hairline)' }}
      >
        <div
          className="flex flex-wrap items-center justify-between gap-3 max-w-page mx-auto"
          style={{
            fontSize: 12,
            color: 'var(--ink-3)'
          }}
        >
          <div>© {year} Paracord Commerce s.r.o. · Prague, Czech Republic</div>
          <div
            className="t-mono"
            style={{ fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase' }}
          >
            No tracking · No ads · EU hosted
          </div>
        </div>
      </div>
    </footer>
  );
}
