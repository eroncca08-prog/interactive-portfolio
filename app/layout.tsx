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
  title: 'Eron Carlo Caina — Meta Ads & Lead Generation Specialist',
  description:
    'Results-driven Meta Ads and Lead Generation Specialist. I help businesses scale through high-converting Facebook Ad campaigns, video content, and data-driven lead funnels.',
  keywords: ['Meta Ads', 'Facebook Ads', 'Lead Generation', 'Digital Marketing', 'Cavite Philippines'],
  openGraph: {
    title: 'Eron Carlo Caina — Real Estate Lead Generation & Inside Sales VA',
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
