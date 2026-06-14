import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx,json}'
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF8C1A',
          deep: '#D97208',
          soft: '#FFE8D1',
          dark: '#B85D00'
        },
        ink: {
          DEFAULT: '#1A1A1A',
          2: '#4A4A4A',
          3: '#888888',
          4: '#B8B8B8'
        },
        paper: {
          DEFAULT: '#FFFFFF',
          warm: '#FAF9F6',
          soft: '#F4F2EE'
        },
        hairline: 'rgba(0, 0, 0, 0.08)',
        spotlight: '#0B0B0F'
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
        dot: ['var(--font-dot)', 'ui-monospace', 'monospace']
      },
      maxWidth: {
        page: '1080px',
        prose: '680px'
      }
    }
  },
  plugins: []
};

export default config;
