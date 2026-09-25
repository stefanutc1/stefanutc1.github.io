import type { Metadata } from 'next';
import { Inter, Newsreader, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const fontSans = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-sans',
  display: 'swap',
});

const fontSerif = Newsreader({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-serif',
  style: ['normal', 'italic'],
  display: 'swap',
});

const fontMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moană Ștefănuț-Cornel — Personal Presentation & Engineering Journal (@stefanutc1)',
  description:
    'Prezentare personală, jurnal tehnic (DFIR, Core-Banking FinTech, Homelab Infrastructure) și portofoliu academic — Moană Ștefănuț-Cornel, Universitatea din Craiova.',
  authors: [{ name: 'Moană Ștefănuț-Cornel', url: 'https://github.com/stefanutc1' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Moană Ștefănuț-Cornel — Engineering Journal & Systems Monograph',
    description:
      'Distributed Systems, Core-Banking FinTech Architecture, Proxmox VE Infrastructure & DFIR Threat Intelligence.',
    url: 'https://stefanutc1.github.io',
    siteName: 'Moană Ștefănuț-Cornel (@stefanutc1)',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      data-theme="dark"
      className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--ink)] bg-architectural-grid selection:bg-zinc-200 selection:text-zinc-950">
        {children}
      </body>
    </html>
  );
}
