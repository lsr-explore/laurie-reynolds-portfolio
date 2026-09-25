import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { SkipLink } from '@/components/skip-link';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://laurie-reynolds-portfolio.vercel.app'),
  title: 'Laurie Reynolds | Senior Front-End Software Engineer',
  description:
    'Senior Front-End Engineer with 25+ years shipping high-stakes React applications for Walmart payments, FDA-regulated medical software, and civic technology.',
  openGraph: {
    title: 'Laurie Reynolds | Senior Front-End Software Engineer',
    description:
      'Building front-end systems for complex, high-impact applications — payments, medical software, accessibility, and civic technology.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laurie Reynolds | Senior Front-End Software Engineer',
    description:
      'Building front-end systems for complex, high-impact applications — payments, medical software, accessibility, and civic technology.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <div
            className="h-1 bg-gradient-to-r from-primary via-accent to-primary"
            aria-hidden="true"
          />
          <SkipLink />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <Analytics debug={false} />
        </ThemeProvider>
      </body>
    </html>
  );
}
