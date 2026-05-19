'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

const AD_STATS = [
  { value: '35,869', label: 'Leads Generated', color: '#00e5ff' },
  { value: '2.07M', label: 'People Reached', color: '#00ff99' },
  { value: '₱7.91', label: 'Avg Cost / Lead', color: '#ffb830' },
  { value: '2.96M', label: 'Total Impressions', color: '#00e5ff' },
  { value: '240+', label: 'Campaigns Run', color: '#00ff99' },
  { value: '₱283K', label: 'Ad Spend Managed', color: '#ffb830' },
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

const AchievementsGallery = memo(function AchievementsGallery() {
  return (
    <div className="w-full space-y-4">

      {/* ── Meta Ads Results ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, rgba(24,119,242,0.12) 0%, rgba(0,229,255,0.06) 100%)',
          border: '1px solid rgba(24,119,242,0.3)',
        }}
      >
        {/* Header */}
        <div className="px-4 pt-3.5 pb-2 flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
          <p className="text-xs font-bold tracking-widest uppercase" style={{ color: '#1877F2' }}>
            Meta Ads Performance
          </p>
          <span
            className="ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium"
            style={{ background: 'rgba(24,119,242,0.15)', color: '#1877F2', border: '1px solid rgba(24,119,242,0.3)' }}
          >
            Apr 2023 – May 2026
          </span>
        </div>

        {/* 3-col stat grid */}
        <div className="grid grid-cols-3 gap-px px-3 pb-3.5" style={{ gap: '6px' }}>
          {AD_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.06, duration: 0.28 }}
              className="flex flex-col items-center py-2.5 rounded-xl"
              style={{
                background: `${s.color}09`,
                border: `1px solid ${s.color}22`,
              }}
            >
              <span className="text-sm font-bold leading-tight" style={{ color: s.color }}>{s.value}</span>
              <span className="text-[9px] font-medium mt-0.5 text-center leading-tight" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

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
          { value: '₱60M+', label: 'Deals Closed' },
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
