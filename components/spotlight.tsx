import type { Project } from '@/lib/types';

/**
 * The Paragram-style dark mockup panel used as the hero spotlight.
 * Renders a stylized chat-like interface preview with workshop annotations.
 */
export function Spotlight({ project }: { project?: Project }) {
  const name = project?.name ?? 'Paragram';
  const version = project?.version ?? 'v0.4.2.1';

  return (
    <div className="spotlight-frame">
      {/* Header strip */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}
      >
        <div className="flex items-center gap-3">
          <span className="spotlight-label">{name.toUpperCase()} · INTERFACE</span>
        </div>
        <span
          className="spotlight-label"
          style={{ color: 'var(--spotlight-ink-2)' }}
        >
          FIG. 01.A
        </span>
      </div>

      {/* Body: a workshop-styled UI mockup */}
      <div className="p-5 grid gap-3" style={{ gridTemplateColumns: '70px 1fr 100px' }}>
        {/* Left server rail */}
        <div className="flex flex-col gap-2 relative">
          <span
            className="spotlight-pip absolute"
            style={{ top: -2, left: -10, transform: 'scale(0.85)' }}
          >
            A
          </span>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--orange)',
              margin: '0 auto'
            }}
          />
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: 'rgba(255, 255, 255, 0.06)',
                margin: '0 auto'
              }}
            />
          ))}
        </div>

        {/* Middle: channels + chat */}
        <div className="flex flex-col gap-3 relative">
          <span
            className="spotlight-pip absolute"
            style={{ top: -2, left: -10, transform: 'scale(0.85)' }}
          >
            B
          </span>
          <div
            className="t-mono"
            style={{
              fontSize: 11,
              color: 'var(--spotlight-ink-2)',
              letterSpacing: '0.08em'
            }}
          >
            workshop
          </div>

          <div
            className="rounded-md px-3 py-2"
            style={{ background: 'rgba(255, 140, 26, 0.08)', borderLeft: '2px solid var(--orange)' }}
          >
            <div style={{ fontSize: 12, fontWeight: 600 }}># general</div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <ChatLine name="maddie" time="14:02" message="deploying v0.4.2.1 in a minute" highlight />
            <ChatLine name="claude" time="14:03" message="acknowledged. monitoring socket health." />
            <ChatLine name="maddie" time="14:04" message="halo gift codes look clean too" highlight />
          </div>

          {/* input bar */}
          <div
            className="mt-3 rounded-md px-3 py-2"
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              fontSize: 12,
              color: 'var(--spotlight-ink-2)'
            }}
          >
            Message #general
          </div>
        </div>

        {/* Right: presence */}
        <div className="flex flex-col gap-2 relative">
          <span
            className="spotlight-pip absolute"
            style={{ top: -2, right: -10, transform: 'scale(0.85)' }}
          >
            C
          </span>
          <div
            className="t-mono"
            style={{
              fontSize: 10,
              color: 'var(--spotlight-ink-2)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase'
            }}
          >
            Online · 3
          </div>
          {[
            { name: 'maddie', dot: 'var(--orange)' },
            { name: 'claude', dot: 'rgba(255,255,255,0.25)' },
            { name: 'alex', dot: 'rgba(255,255,255,0.25)' }
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-2" style={{ fontSize: 11 }}>
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: p.dot,
                  flexShrink: 0
                }}
              />
              {p.name}
            </div>
          ))}
        </div>
      </div>

      {/* Footer strip */}
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          fontFamily: 'var(--font-geist-mono)',
          fontSize: 10,
          color: 'var(--spotlight-ink-2)',
          letterSpacing: '0.04em'
        }}
      >
        <span>{version}</span>
        <span>WebRTC · Encrypted · EU</span>
      </div>
    </div>
  );
}

function ChatLine({
  name,
  time,
  message,
  highlight = false
}: {
  name: string;
  time: string;
  message: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-2">
      <span
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: highlight ? 'var(--orange)' : 'rgba(255,255,255,0.18)',
          marginTop: 5,
          flexShrink: 0
        }}
      />
      <div>
        <div className="flex items-baseline gap-2">
          <span style={{ fontSize: 11, fontWeight: 700 }}>{name}</span>
          <span style={{ fontSize: 9, color: 'var(--spotlight-ink-2)' }}>{time}</span>
        </div>
        <div style={{ fontSize: 11.5, color: 'var(--spotlight-ink-2)', marginTop: 1 }}>
          {message}
        </div>
      </div>
    </div>
  );
}
