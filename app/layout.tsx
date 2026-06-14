import type { Metadata } from 'next';
import { DotGothic16 } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

const dot = DotGothic16({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dot',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Paracord Center — The workshop index',
  description:
    'The home for everything built under Paracord Commerce. Software, hardware, web. Real products, no rent, no API keys, no tracking.',
  metadataBase: new URL('https://paracord.center'),
  openGraph: {
    title: 'Paracord Center',
    description: 'The home for everything built under Paracord Commerce.',
    url: 'https://paracord.center',
    siteName: 'Paracord Center',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} ${dot.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
