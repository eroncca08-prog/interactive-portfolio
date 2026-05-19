'use client'

import React, { memo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Target, Users, ExternalLink } from 'lucide-react'

const PROJECTS: {
  id: string
  title: string
  category: string
  description: string
  images: string[]
  metrics: { icon: React.ElementType; label: string; color: string }[]
  link?: { label: string; href: string }
}[] = [
  {
    id: 'property-ads',
    title: 'Property Sales Acceleration',
    category: 'Real Estate · Facebook Ads',
    description:
      'Full-funnel Facebook Ads strategy for a property developer in Cavite. Ran targeted campaigns for mid-rise and house-and-lot projects — from video creative production to lead nurturing and closing support.',
    images: [
      '/screenshots/awards3.jpg',
      '/screenshots/awards4.jpg',
      '/screenshots/awardss.jpg',
      '/screenshots/awards2.jpg',
      '/screenshots/client1123123123.jpg',
      '/screenshots/awrasdasdas.jpg',
      '/screenshots/client11231312.jpg',
      '/screenshots/client13123.jpg',
    ],
    metrics: [
      { icon: TrendingUp, label: '₱60M+ Sales Generated', color: '#00e5ff' },
      { icon: Target, label: '200% Quota Exceeded', color: '#00ff99' },
      { icon: Users, label: 'Top 1–6 Consultant', color: '#ffb830' },
    ],
    link: { label: 'Facebook Page', href: 'https://www.facebook.com/profile.php?id=61573811056989' },
  },
  {
    id: 'bancassurance-leads',
    title: 'Bancassurance Lead Generation',
    category: 'Financial Services · Lead Gen',
    description:
      'Multi-channel lead acquisition for BPI EPZA branch insurance products. Combined Facebook Ads, cold calling, and branch presentations to build a consistent pipeline of qualified prospects.',
    images: ['/screenshots/bancasurrance.jpg'],
    metrics: [
      { icon: TrendingUp, label: '3× Lead Volume', color: '#00e5ff' },
      { icon: Target, label: '40% Conversion Lift', color: '#00ff99' },
      { icon: Users, label: 'Cross-sell Revenue', color: '#ffb830' },
    ],
  },
  {
    id: 'video-ad-campaign',
    title: 'Video-First Ad Management',
    category: 'Content Creation · Meta Ads',
    description:
      'End-to-end video ad production and campaign management via Meta Business Suite — scripting direction, editing, audience targeting, A/B testing, and weekly performance reporting.',
    images: ['/screenshots/video-ads.png'],
    metrics: [
      { icon: TrendingUp, label: '120% ROAS Improvement', color: '#00e5ff' },
      { icon: Target, label: '25K+ Weekly Reach', color: '#00ff99' },
      { icon: Users, label: 'Full Pipeline Managed', color: '#ffb830' },
    ],
  },
]

function PhotoCollage({ images }: { images: string[] }) {
  const groups: string[][] = []
  for (let i = 0; i < images.length; i += 4) {
    groups.push(images.slice(i, i + 4))
  }

  const [groupIndex, setGroupIndex] = useState(0)

  useEffect(() => {
    if (groups.length <= 1) return
    const id = setInterval(() => {
      setGroupIndex((g) => (g + 1) % groups.length)
    }, 3200)
    return () => clearInterval(id)
  }, [groups.length])

  if (images.length === 1) {
    return (
      <img
        src={images[0]}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center center' }}
        draggable={false}
      />
    )
  }

  const currentGroup = groups[groupIndex]

  return (
    <>
      <motion.div
        key={groupIndex}
        className="absolute inset-0 grid grid-cols-2 grid-rows-2"
        style={{ gap: 2, padding: 2, background: 'var(--bg-card)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {currentGroup.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-sm"
            style={{ border: '1px solid rgba(0,229,255,0.15)' }}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 60%' }}
              draggable={false}
            />
          </div>
        ))}
      </motion.div>

      {/* Group dot indicators */}
      {groups.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {groups.map((_, i) => (
            <span
              key={i}
              className="block rounded-full transition-all duration-300"
              style={{
                width: i === groupIndex ? 14 : 5,
                height: 5,
                background: i === groupIndex ? '#00e5ff' : 'rgba(255,255,255,0.4)',
              }}
            />
          ))}
        </div>
      )}
    </>
  )
}

const ProjectCards = memo(function ProjectCards() {
  return (
    <div className="space-y-3 w-full">
      <p
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: '#00e5ff', opacity: 0.65 }}
      >
        Featured Work
      </p>

      <div className="grid grid-cols-1 gap-3">
        {PROJECTS.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12, duration: 0.3 }}
            className="rounded-2xl overflow-hidden group"
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Screenshot thumbnail */}
            <div className="relative h-36 overflow-hidden">
              <PhotoCollage images={project.images} />
              {project.images.length === 1 && (
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, var(--bg-card) 0%, transparent 55%)',
                  }}
                />
              )}
              <span
                className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-full text-[11px] font-medium z-10"
                style={{
                  background: 'rgba(0,0,0,0.72)',
                  color: '#00e5ff',
                  border: '1px solid rgba(0,229,255,0.28)',
                  backdropFilter: 'blur(4px)',
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Content */}
            <div className="px-4 pb-4 pt-1 space-y-2.5">
              <h3
                className="font-semibold text-sm tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                {project.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {project.description}
              </p>

              {/* Metric badges */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium"
                    style={{
                      background: `${m.color}10`,
                      border: `1px solid ${m.color}28`,
                      color: m.color,
                    }}
                  >
                    <m.icon size={9} strokeWidth={2.5} />
                    {m.label}
                  </div>
                ))}
              </div>

              {'link' in project && project.link && (
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 active:scale-95"
                  style={{
                    background: 'linear-gradient(135deg, #1877F2, #0a5fd8)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {/* Facebook f icon */}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.931-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                  </svg>
                  {project.link.label}
                  <ExternalLink size={9} strokeWidth={2.5} style={{ opacity: 0.7 }} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
})

export default ProjectCards
