import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieConsent from '@/components/cookie-consent'
import Analytics from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DEC-IT | Soluții IT Inteligente & Sisteme de Securitate',
  description: 'DEC-IT oferă soluții IT integrate și sisteme de securitate din 1991. Specializați în control acces, ticketing, supraveghere video și automatizare.',
  keywords: 'DEC-IT, soluții IT, sisteme securitate, control acces, ticketing, supraveghere video, România',
  authors: [{ name: 'DEC-IT' }],
  creator: 'DEC-IT',
  publisher: 'DEC-IT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dec-it.eu'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'DEC-IT | Soluții IT Inteligente & Sisteme de Securitate',
    description: 'DEC-IT oferă soluții IT integrate și sisteme de securitate din 1991.',
    url: 'https://dec-it.eu',
    siteName: 'DEC-IT',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEC-IT | Soluții IT Inteligente',
    description: 'Soluții IT integrate și sisteme de securitate din 1991',
    images: ['/images/twitter-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Analytics />
          <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
