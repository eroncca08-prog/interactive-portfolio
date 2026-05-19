import type { Metadata } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Eron Carlo Caina — Lead Generation & Inbound Lead Manager',
  description:
    'Results-driven Lead Generation and Inbound Lead Manager. I help businesses attract, capture, and convert high-intent leads through Meta Ads, video content, and automated funnels.',
  keywords: ['Lead Generation', 'Inbound Lead Manager', 'Meta Ads', 'Facebook Ads', 'Digital Marketing', 'Cavite Philippines'],
  openGraph: {
    title: 'Eron Carlo Caina — Lead Generation & Inbound Lead Manager',
    description: 'AI-powered portfolio. Ask me anything about my work.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <body className={`${outfit.variable} ${mono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
