import type { Metadata } from 'next';
import { ThemeProvider } from '@/src/components/theme';
import { Navigation } from '@/src/components/common';
import './globals.css';

export const metadata: Metadata = {
  title: 'James Aries G. Santiago - Personal Portfolio',
  description: 'Full-Stack Developer | Creative Coder | Open Source Enthusiast',
  keywords: 'developer, portfolio, web development, full-stack, user interface, design, programming, projects',
  creator: 'Areyzxc',
  openGraph: {
    type: 'website',
    url: 'https://areyzxc.github.io/PersonalPortfolio',
    title: 'James Aries G. Santiago - Personal Portfolio',
    description: 'Full-Stack Developer | Creative Coder | Open Source Enthusiast',
    siteName: 'Personal Portfolio',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-primary text-white overflow-x-hidden">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
