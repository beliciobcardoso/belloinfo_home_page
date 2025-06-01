import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { WebVitals } from "@/components/WebVitals";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export const metadata: Metadata = {
  title: "BelloInfo - Soluções em TI",
  description: "Serviços de tecnologia da informação, desenvolvimento web e suporte técnico para empresas e pessoas físicas.",
  keywords: ["tecnologia", "TI", "desenvolvimento web", "suporte técnico", "soluções digitais"],
  authors: [{ name: "BelloInfo" }],
  creator: "BelloInfo",
  publisher: "BelloInfo",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL('https://belloinfo.com.br'),
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'BelloInfo',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
  applicationName: 'BelloInfo',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icons/icon-192x192.png', sizes: '192x192' },
      { url: '/icons/icon-512x512.png', sizes: '512x512' },
    ],
    apple: [
      { url: '/icons/icon-192x192.png' },
    ],
  },
  openGraph: {
    title: "BelloInfo - Soluções em TI",
    description: "Serviços de tecnologia da informação, desenvolvimento web e suporte técnico.",
    url: 'https://belloinfo.com.br',
    siteName: 'BelloInfo',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'BelloInfo - Soluções em TI',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: "BelloInfo - Soluções em TI",
    description: "Serviços de tecnologia da informação, desenvolvimento web e suporte técnico.",
    card: 'summary_large_image',
    images: ['/opengraph-image.png'],
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
    other: {
      me: ['my-email@example.com', 'https://example.com/profile'],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Obter o ID do Google Analytics da variável de ambiente
  const gaId = process.env.NEXT_PUBLIC_GA_ID || '';

  return (
    <html lang="pt-br">
      <head>
        <JsonLd />
        <link rel="preload" as="image" href="/images/hero-image.svg" />
        <link rel="preload" as="image" href="/window.svg" />
        <link rel="preload" as="image" href="/globe.svg" />
        <link rel="preload" as="image" href="/file.svg" />
        {/* Google Analytics - só será carregado em produção */}
        {process.env.NODE_ENV === 'production' && gaId && (
          <GoogleAnalytics gaId={gaId} />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <WebVitals />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
