import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/src/components/theme';
import { Navigation } from '@/src/components/common';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0f172a',
};

export const metadata: Metadata = {
  title: 'James Aries G. Santiago - Personal Portfolio',
  description: 'Full-Stack Developer | Creative Coder | Open Source Enthusiast',
  keywords: 'developer, portfolio, web development, full-stack, user interface, design, programming, projects',
  creator: 'Areyzxc',
  metadataBase: new URL('https://areyzxc.github.io/PersonalPortfolio'),
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://areyzxc.github.io/PersonalPortfolio',
    title: 'James Aries G. Santiago - Personal Portfolio',
    description: 'Full-Stack Developer | DevSecOps Enthusiast | Design Planning | Security & Research Enthusiast',
    siteName: 'Personal Portfolio',
    images: [
      {
        url: '/images/profile/profile.JPG',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'James Aries G. Santiago - Personal Portfolio',
    description: 'Full-Stack Developer | DevSecOps Enthusiast | Design Planning | Security & Research Enthusiast',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'James Aries G. Santiago',
    title: 'Full-Stack Developer',
    url: 'https://areyzxc.github.io/PersonalPortfolio',
    image: '/images/profile/profile.JPG',
    description: 'BSIT Senior | Lead Full-Stack Developer | Security & Research Enthusiast',
    sameAs: ['https://github.com/Areyzxc'],
    jobTitle: 'Full-Stack Developer',
    knowsAbout: ['Web Development', 'Full-Stack Development', 'UI/UX Design', 'Open Source', 'Cybersecurity', 'DevSecOps'],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://giscus.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-primary text-white overflow-x-hidden">
        <ThemeProvider>
          <Navigation />
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
