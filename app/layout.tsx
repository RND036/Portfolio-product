// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from './provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Ravishka's Portfolio",
  description: "A showcase of my work and skills",
  other: {
    'color-scheme': 'dark only',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
    
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark only" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              document.documentElement.classList.add('dark');
              document.documentElement.style.colorScheme = 'dark';
            })()
          `
        }} />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { color-scheme: dark !important; }
            html { color-scheme: dark !important; }
            body { color-scheme: dark !important; }
          `
        }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased dark bg-gray-900 text-white`}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}