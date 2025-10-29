import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { getJsonLdSchema } from '../lib/seo.ts';

export const metadata: Metadata = {
  metadataBase: new URL('https://quantumrishi.com'),
  title: {
    default: 'Quantum Rishi - Autonomous Teams Powered by Sovereign Infrastructure',
    template: '%s | Quantum Rishi',
  },
  description: 'Building the world\'s most trusted sovereign infrastructure for autonomous teams. Tools for builders, creators, and enterprises who require privacy, reliability, and speed.',
  keywords: [
    'quantum computing',
    'sovereign infrastructure',
    'AI',
    'blockchain',
    'cloud computing',
    'cybersecurity',
    'IoT',
    'digital transformation',
    'enterprise technology',
    'privacy-first',
  ],
  authors: [{ name: 'Quantum Rishi' }],
  creator: 'Quantum Rishi',
  publisher: 'Quantum Rishi',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quantumrishi.com',
    siteName: 'Quantum Rishi',
    title: 'Quantum Rishi - Autonomous Teams Powered by Sovereign Infrastructure',
    description: 'Building the world\'s most trusted sovereign infrastructure for autonomous teams.',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Quantum Rishi',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@quantumrishi',
    creator: '@quantumrishi',
    title: 'Quantum Rishi - Autonomous Teams Powered by Sovereign Infrastructure',
    description: 'Building the world\'s most trusted sovereign infrastructure for autonomous teams.',
    images: ['/assets/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const jsonLd = getJsonLdSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
