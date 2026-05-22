import type { Metadata } from 'next'
import { Manrope, Playfair_Display } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { siteConfig } from '@/lib/site'

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans'
})

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: 'website'
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
