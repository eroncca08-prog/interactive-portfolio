'use client'

import { memo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const FUNNEL = [
  { label: 'Impressions', value: '2.96M', widthPct: 100, color: 'rgba(0,229,255,0.25)', textColor: 'rgba(0,229,255,0.7)' },
  { label: 'People Reached', value: '2.07M', widthPct: 72, color: 'rgba(0,229,255,0.45)', textColor: 'rgba(0,229,255,0.85)' },
  { label: 'Leads Generated', value: '35,869', widthPct: 42, color: '#00e5ff', textColor: '#00e5ff' },
]

const AD_STATS = [
  { value: '35,869', label: 'Leads Generated', color: '#00e5ff', icon: '🎯', bar: 100 },
  { value: '2.07M', label: 'People Reached', color: '#00ff99', icon: '📡', bar: 70 },
  { value: '$0.14', label: 'Avg Cost / Lead (USD)', color: '#ffb830', icon: '💰', bar: 85 },
  { value: '2.96M', label: 'Total Impressions', color: '#00e5ff', icon: '👁', bar: 90 },
  { value: '240+', label: 'Campaigns Run', color: '#00ff99', icon: '🚀', bar: 75 },
]

const GRID_PHOTOS = [
  { src: '/screenshots/awards3.jpg', label: 'Elite Property Consultant', sub: 'Antel Land · Aug 2024', accent: '#00e5ff', tall: true },
  { src: '/screenshots/awards4.jpg', label: 'Top 2 Property Consultant', sub: 'June 2024', accent: '#ffb830', tall: false },
  { src: '/screenshots/awardss.jpg', label: 'Double Kill — 2 Units', sub: 'Multiple Sales Award · June 2024', accent: '#00ff99', tall: false },
  { src: '/screenshots/awrasdasdas.jpg', label: 'Excellent Service Award', sub: 'May 2024', accent: '#ffb830', tall: false },
  { src: '/screenshots/awrdsss.jpg', label: 'Excellent Service Award', sub: 'June 2024', accent: '#00ff99', tall: false },
]

const BOTTOM_PHOTOS = [
  { src: '/screenshots/client1123123123.jpg', label: 'Top Consultant', sub: 'Gala Event', accent: '#00e5ff' },
  { src: '/screenshots/client11231312.jpg', label: 'Recognition', sub: 'Antel Land', accent: '#ffb830' },
  { src: '/screenshots/client13123.jpg', label: 'Sales Milestone', sub: 'Antel Land', accent: '#00ff99' },
]

function MetaAdsCard() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, rgba(10,20,35,0.95) 0%, rgba(0,20,40,0.9) 100%)',
        border: '1px solid rgba(24,119,242,0.35)',
      }}
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 flex items-center gap-2.5">
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'rgba(24,119,242,0.2)', border: '1px solid rgba(24,119,242,0.4)' }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
        </div>
        <div>
          <p className="text-xs font-bold" style={{ color: '#fff' }}>Meta Ads Performance</p>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Apr 2023 – May 2026 · Verified Export Data</p>
        </div>
        <span
          className="ml-auto text-[9px] px-2 py-1 rounded-full font-semibold tracking-wide uppercase"
          style={{ background: 'rgba(0,229,255,0.1)', color: '#00e5ff', border: '1px solid rgba(0,229,255,0.25)' }}
        >
          Live
        </span>
      </div>

      {/* Lead Funnel */}
      <div className="px-4 pb-3 space-y-1.5">
        <p className="text-[9px] font-semibold tracking-widest uppercase mb-2" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Lead Funnel
        </p>
        {FUNNEL.map((row, i) => (
          <div key={row.label} className="space-y-0.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.55)' }}>{row.label}</span>
              <span className="text-[11px] font-bold" style={{ color: row.textColor }}>{row.value}</span>
            </div>
            <div className="h-5 rounded-md overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
              <motion.div
                className="h-full rounded-md flex items-center px-2"
                style={{ background: row.color, width: `${row.widthPct}%` }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${row.widthPct}%` } : { width: 0 }}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
        <p className="text-[9px] pt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Impressions → Reached → Converted to leads
        </p>
      </div>

      {/* Cost Efficiency Comparison */}
      <div className="mx-4 mb-3 rounded-xl p-3" style={{ background: 'rgba(0,229,255,0.05)', border: '1px solid rgba(0,229,255,0.12)' }}>
        <p className="text-[9px] font-semibold tracking-widest uppercase mb-2.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
          Cost Per Lead vs. Industry
        </p>
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-semibold" style={{ color: '#00e5ff' }}>Eron's campaigns</span>
              <span className="text-[11px] font-bold" style={{ color: '#00e5ff' }}>$0.14 USD</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #00e5ff, #00ff99)' }}
                initial={{ width: 0 }}
                animate={inView ? { width: '13%' } : { width: 0 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Industry average</span>
              <span className="text-[11px] font-bold" style={{ color: 'rgba(255,255,255,0.4)' }}>$1–$3 USD</span>
            </div>
            <div className="h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'rgba(255,255,255,0.2)' }}
                initial={{ width: 0 }}
                animate={inView ? { width: '80%' } : { width: 0 }}
                transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        </div>
        <p className="text-[9px] mt-2 font-semibold" style={{ color: '#00ff99' }}>
          Up to 21× cheaper per lead than industry average
        </p>
      </div>

      {/* 3×2 Stat Grid */}
      <div className="grid grid-cols-3 gap-1.5 px-4 pb-4">
        {AD_STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 0.3 + i * 0.07, duration: 0.3 }}
            className="rounded-xl p-2.5 flex flex-col gap-1"
            style={{ background: `${s.color}08`, border: `1px solid ${s.color}1a` }}
          >
            <span className="text-sm font-bold leading-none" style={{ color: s.color }}>{s.value}</span>
            <span className="text-[9px] leading-tight" style={{ color: 'rgba(255,255,255,0.45)' }}>{s.label}</span>
            <div className="h-1 rounded-full overflow-hidden mt-0.5" style={{ background: 'rgba(255,255,255,0.07)' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: s.color }}
                initial={{ width: 0 }}
                animate={inView ? { width: `${s.bar}%` } : { width: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

const AchievementsGallery = memo(function AchievementsGallery() {
  return (
    <div className="w-full space-y-4">

      {/* ── Meta Ads Card ── */}
      <MetaAdsCard />

      {/* ── Awards & Recognition ── */}
      <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#00e5ff', opacity: 0.65 }}>
        Awards & Recognition
      </p>

      {/* Hero shot — full width */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ height: 240, border: '1px solid rgba(0,229,255,0.18)' }}
      >
        <img
          src="/screenshots/awards2.jpg"
          alt="Antel Land Digital Sales Award Ceremony"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)' }}
        />
        <div className="absolute bottom-3 left-3">
          <p className="text-sm font-bold text-white">Antel Land Digital Sales Event</p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.65)' }}>Award Ceremony</p>
        </div>
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold"
          style={{
            background: 'rgba(0,229,255,0.15)',
            border: '1px solid rgba(0,229,255,0.4)',
            color: '#00e5ff',
            backdropFilter: 'blur(8px)',
          }}
        >
          Featured
        </span>
      </motion.div>

      {/* 2-column masonry grid */}
      <div className="grid grid-cols-2 gap-2">
        {GRID_PHOTOS.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.07, duration: 0.32 }}
            className="relative rounded-xl overflow-hidden"
            style={{
              height: item.tall ? 290 : 175,
              border: `1px solid ${item.accent}28`,
              gridRow: item.tall ? 'span 2' : undefined,
            }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center center' }}
              draggable={false}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 50%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2.5">
              <p className="text-[11px] font-bold leading-tight" style={{ color: item.accent }}>{item.label}</p>
              <p className="text-[10px] leading-tight" style={{ color: 'rgba(255,255,255,0.6)' }}>{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3-column bottom strip */}
      <div className="grid grid-cols-3 gap-2">
        {BOTTOM_PHOTOS.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 + i * 0.07, duration: 0.3 }}
            className="relative rounded-xl overflow-hidden"
            style={{ height: 140, border: `1px solid ${item.accent}28` }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center center' }}
              draggable={false}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, transparent 55%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-1.5">
              <p className="text-[10px] font-bold leading-tight" style={{ color: item.accent }}>{item.label}</p>
              <p className="text-[9px] leading-tight" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.sub}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overall stats footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.75, duration: 0.35 }}
        className="flex gap-2"
      >
        {[
          { value: '9+', label: 'Awards Won' },
          { value: '$1M+', label: 'Deals Closed (USD)' },
          { value: '200%', label: 'Quota Hit' },
        ].map((s) => (
          <div
            key={s.label}
            className="flex-1 flex flex-col items-center py-2.5 rounded-xl"
            style={{
              background: 'rgba(0,229,255,0.06)',
              border: '1px solid rgba(0,229,255,0.15)',
            }}
          >
            <span className="text-base font-bold" style={{ color: '#00e5ff' }}>{s.value}</span>
            <span className="text-[10px] font-medium mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
          </div>
        ))}
      </motion.div>

    </div>
  )
})

export default AchievementsGallery
