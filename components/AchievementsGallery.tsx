'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'

const ACHIEVEMENTS = [
  {
    src: '/screenshots/awards3.jpg',
    label: 'Elite Property Consultant',
    sub: 'Antel Land · Aug 2024',
    accent: '#00e5ff',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/screenshots/awards4.jpg',
    label: 'Top 2 Property Consultant',
    sub: 'June 2024',
    accent: '#ffb830',
    span: 'col-span-1',
  },
  {
    src: '/screenshots/awardss.jpg',
    label: 'Double Kill — 2 Units',
    sub: 'Multiple Sales Award · June 2024',
    accent: '#00ff99',
    span: 'col-span-1',
  },
  {
    src: '/screenshots/awards2.jpg',
    label: 'Award Ceremony',
    sub: 'Antel Land Digital Sales Event',
    accent: '#00e5ff',
    span: 'col-span-2',
  },
  {
    src: '/screenshots/awrasdasdas.jpg',
    label: 'Excellent Service Award',
    sub: 'May 2024',
    accent: '#ffb830',
    span: 'col-span-1',
  },
  {
    src: '/screenshots/awrdsss.jpg',
    label: 'Excellent Service Award',
    sub: 'June 2024',
    accent: '#00ff99',
    span: 'col-span-1',
  },
  {
    src: '/screenshots/client1123123123.jpg',
    label: 'Top Consultant Recognition',
    sub: 'Gala Event',
    accent: '#00e5ff',
    span: 'col-span-1',
  },
  {
    src: '/screenshots/client11231312.jpg',
    label: 'Client Recognition',
    sub: 'Antel Land',
    accent: '#ffb830',
    span: 'col-span-1',
  },
  {
    src: '/screenshots/client13123.jpg',
    label: 'Sales Milestone',
    sub: 'Antel Land',
    accent: '#00ff99',
    span: 'col-span-1',
  },
]

const AchievementsGallery = memo(function AchievementsGallery() {
  return (
    <div className="w-full space-y-3">
      <p
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: '#00e5ff', opacity: 0.65 }}
      >
        Awards & Recognition
      </p>

      {/* Hero shot — full width */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full rounded-2xl overflow-hidden"
        style={{ height: 200, border: '1px solid rgba(0,229,255,0.18)' }}
      >
        <img
          src="/screenshots/awards2.jpg"
          alt="Antel Land Digital Sales Award Ceremony"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
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

      {/* 2-column grid for the rest */}
      <div className="grid grid-cols-2 gap-2">
        {ACHIEVEMENTS.filter((_, i) => i !== 3).map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 + i * 0.06, duration: 0.32 }}
            className="relative rounded-xl overflow-hidden"
            style={{
              height: i === 0 ? 220 : 140,
              border: `1px solid ${item.accent}28`,
              gridRow: i === 0 ? 'span 2' : undefined,
            }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 20%' }}
              draggable={false}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 50%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2.5">
              <p
                className="text-[11px] font-bold leading-tight"
                style={{ color: item.accent }}
              >
                {item.label}
              </p>
              <p className="text-[10px] leading-tight" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {item.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom strip — 3 equal photos */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { src: '/screenshots/client1123123123.jpg', label: 'Top Consultant', sub: 'Gala Event', accent: '#00e5ff' },
          { src: '/screenshots/client11231312.jpg', label: 'Recognition', sub: 'Antel Land', accent: '#ffb830' },
          { src: '/screenshots/client13123.jpg', label: 'Sales Milestone', sub: 'Antel Land', accent: '#00ff99' },
        ].map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.3 }}
            className="relative rounded-xl overflow-hidden"
            style={{ height: 110, border: `1px solid ${item.accent}28` }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 15%' }}
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

      {/* Stats footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.35 }}
        className="flex gap-2 pt-1"
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
