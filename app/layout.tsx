import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'Eron Carlo Caina — Meta Ads Specialist & Media Buyer',
  description:
    'Meta Ads Specialist with 35,869 leads generated at $0.14 avg CPL. 200+ campaigns across real estate and e-commerce. Available for remote work worldwide.',
  keywords: [
    'Meta Ads Specialist',
    'Facebook Ads Manager',
    'Media Buyer',
    'Lead Generation',
    'CBO',
    'ABO',
    'Digital Marketing Philippines',
    'Remote Meta Ads',
  ],
  openGraph: {
    title: 'Eron Carlo Caina — Meta Ads Specialist',
    description: '35,869 leads · $0.14 avg CPL · $1M+ in closed deals. Available for remote work worldwide.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
