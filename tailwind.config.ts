import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
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
          ink: '#D97208',
          hot: '#FF6B00'
        },
        paper: '#FFFFFF',
        carbon: '#0E0E0E',
        graphite: '#1A1A1A',
        smoke: '#2A2A2A'
      },
      fontFamily: {
        display: ['var(--font-workbench)', 'ui-monospace', 'monospace'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace']
      },
      backgroundImage: {
        dots: 'radial-gradient(circle, currentColor 1.4px, transparent 1.6px)'
      },
      backgroundSize: {
        dots: '18px 18px'
      },
      borderRadius: {
        sharp: '2px'
      }
    }
  },
  plugins: []
};

export default config;
