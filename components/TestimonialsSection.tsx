'use client'

import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    quote: "Eron's Facebook Ads strategy was a game-changer for our projects. His campaigns consistently brought in high-intent buyers — he closed over ₱60M in properties in just a few months.",
    name: 'Ramon Villanueva',
    role: 'Property Developer · Cavite',
    initials: 'RV',
    color: '#00e5ff',
  },
  {
    quote: "He exceeded every bancassurance target we set — 200% quota in his first quarter. His prospecting and follow-through are unlike any other sales rep I've managed.",
    name: 'Cristina Reyes',
    role: 'Branch Manager · BPI EPZA',
    initials: 'CR',
    color: '#00ff99',
  },
  {
    quote: "His video ads are high quality and convert really well. ROAS improved significantly within weeks. If you need someone who understands both content and media buying, Eron is your guy.",
    name: 'Mark Aquino',
    role: 'E-commerce Business Owner',
    initials: 'MA',
    color: '#ffb830',
  },
]

export default function TestimonialsSection() {
  return (
    <div className="w-full space-y-3">
      <p
        className="text-xs font-semibold tracking-widest uppercase text-center"
        style={{ color: 'var(--text-muted)', opacity: 0.6 }}
      >
        What clients say
      </p>
      {TESTIMONIALS.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 + i * 0.1, duration: 0.35 }}
          className="w-full rounded-2xl p-4 space-y-3"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
          }}
        >
          {/* Stars */}
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, s) => (
              <svg key={s} width="12" height="12" viewBox="0 0 24 24" fill="#ffb830">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            "{t.quote}"
          </p>

          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
              style={{ background: `${t.color}22`, color: t.color, border: `1px solid ${t.color}44` }}
            >
              {t.initials}
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{t.name}</p>
              <p className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{t.role}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
