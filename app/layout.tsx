import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Portfolio | AI & Fullstack Engineer',
  description: 'Senior fullstack engineer specializing in AI, Web3, and production-grade UI.',
  keywords: ['AI', 'Fullstack', 'Next.js', 'React', 'TypeScript', 'OpenClaw'],
  authors: [{ name: 'Gboyee' }],
  openGraph: {
    title: 'Portfolio',
    description: 'AI & Fullstack Engineer portfolio',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}