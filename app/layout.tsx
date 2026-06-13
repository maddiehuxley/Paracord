import type { Metadata } from 'next';
import { Workbench, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const workbench = Workbench({
  subsets: ['latin'],
  variable: '--font-workbench',
  display: 'swap'
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Paracord Center',
  description: 'The workshop index for everything built under Paracord Commerce. Software, hardware, web.',
  metadataBase: new URL('https://paracord.center'),
  openGraph: {
    title: 'Paracord Center',
    description: 'The workshop index for everything built under Paracord Commerce.',
    url: 'https://paracord.center',
    siteName: 'Paracord Center',
    type: 'website'
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${workbench.variable} ${plexMono.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
