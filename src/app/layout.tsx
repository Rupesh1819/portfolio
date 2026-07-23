import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-geist-sans', // keeping variable name for compatibility
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono', // keeping variable name for compatibility
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rupesh Sanjay Shete — AI Engineer & Full Stack Developer',
  description:
    'AI Engineer building production-grade AI systems, intelligent agents, LLMs, RAG pipelines, and modern web applications. Specializing in Generative AI, Machine Learning, and full-stack development with Next.js, Python, and TypeScript.',
  keywords: [
    'AI Engineer',
    'Machine Learning Engineer',
    'Full Stack Developer',
    'Generative AI',
    'LLM',
    'RAG',
    'LangChain',
    'Python',
    'TypeScript',
    'Next.js',
    'React',
    'TensorFlow',
    'Deep Learning',
    'Portfolio',
    'Rupesh Shete',
  ],
  authors: [{ name: 'Rupesh Sanjay Shete' }],
  creator: 'Rupesh Sanjay Shete',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rupeshsanjayshete.com',
    title: 'Rupesh Sanjay Shete — AI Engineer',
    description:
      'Building production-grade AI systems and modern web applications.',
    siteName: 'Rupesh Sanjay Shete',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rupesh Sanjay Shete — AI Engineer',
    description:
      'Building production-grade AI systems and modern web applications.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Rupesh Sanjay Shete',
              url: 'https://rupeshsanjayshete.com',
              jobTitle: 'AI Engineer',
              description:
                'AI Engineer building production-grade AI systems, LLMs, and full-stack applications.',
              knowsAbout: [
                'Artificial Intelligence',
                'Machine Learning',
                'Deep Learning',
                'Natural Language Processing',
                'Large Language Models',
                'Full Stack Development',
                'Python',
                'TypeScript',
                'React',
                'Next.js',
              ],
              sameAs: [
                'https://github.com/Rupesh1819',
                'https://www.linkedin.com/in/rupesh-shete-b12a83313/',
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Skip to Content — Accessibility */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-zinc-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-[var(--accent-cyan)] focus:left-4 focus:top-4 rounded-lg font-mono text-sm">
          Skip to main content
        </a>

        {/* Noise Overlay */}
        <div className="noise" />
        
        <CustomCursor />

        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
