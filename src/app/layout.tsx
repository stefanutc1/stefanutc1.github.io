import type { Metadata } from 'next';
import { Inter, Fragment_Mono } from 'next/font/google';
import './globals.css';

const fontSans = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-sans',
  display: 'swap',
});

const fontMono = Fragment_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Moană Ștefănuț-Cornel — Prezentare Personală, Blog Tehnic & Arhitectură (@stefanutc1)',
  description:
    'Prezentare personală, jurnal tehnic (DFIR, Core-Banking FinTech, Homelab Infrastructure) și portofoliu ingineresc — Moană Ștefănuț-Cornel, Universitatea din Craiova (FEAA 2024 – 2027).',
  authors: [{ name: 'Moană Ștefănuț-Cornel', url: 'https://github.com/stefanutc1' }],
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: 'Moană Ștefănuț-Cornel — Engineering Journal & Systems Architecture',
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
      className={`${fontSans.variable} ${fontMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[var(--bg)] text-[var(--ink)] selection:bg-[#52212e] selection:text-[#efebe5]">
        {children}
      </body>
    </html>
  );
}
