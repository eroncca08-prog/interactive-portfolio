'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Download,
  ArrowRight,
  BarChart2,
  Target,
  Video,
  Zap,
  MapPin,
  Globe,
  MessageSquare,
  Calendar,
} from 'lucide-react'

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

const SERVICES = [
  {
    icon: BarChart2,
    title: 'Meta Ads Campaign Management',
    desc: 'Full campaign setup, optimization, and reporting across Facebook and Instagram.',
    tags: ['CBO / ABO', 'Lead Form Ads', 'Retargeting'],
  },
  {
    icon: Target,
    title: 'Google Ads Management',
    desc: 'Search, display, and performance campaigns on Google Ads optimized for leads and conversions.',
    tags: ['Search Campaigns', 'Google Analytics', 'Conversion Tracking'],
  },
  {
    icon: Video,
    title: 'Ad Creative Production',
    desc: 'Video and static ad creatives built for direct response — hooks, overlays, A/B tested.',
    tags: ['CapCut', 'Direct-Response', 'A/B Testing'],
  },
  {
    icon: Zap,
    title: 'Lead Generation Systems',
    desc: 'End-to-end lead funnels covering ad creative, targeting, lead form, and reporting.',
    tags: ['Lead Funnels', 'CPL Optimization', 'Reporting'],
  },
]

const CAMPAIGNS = [
  { rank: 1, name: 'Audrey – Ready For Occupancy', leads: 2702, cpl: '$0.002', width: '100%' },
  { rank: 2, name: 'Audrey – Ready for Occupancy (Near)', leads: 2384, cpl: '$0.002', width: '88%' },
  { rank: 3, name: 'Audrey – Ready for Occupancy (Near)', leads: 2302, cpl: '$0.002', width: '85%' },
  { rank: 4, name: 'California (Property)', leads: 2153, cpl: '$0.002', width: '80%' },
  { rank: 5, name: 'Audrey – Ready For Occupancy', leads: 2132, cpl: '$0.003', width: '79%' },
  { rank: 6, name: 'Audrey – Ready For Occupancy', leads: 2078, cpl: '$0.002', width: '77%' },
  { rank: 7, name: 'Elia – Single Attached – Cavite', leads: 1028, cpl: '$0.017', width: '38%' },
]

const MESSAGING_CAMPAIGNS = [
  { name: 'PH1', cpl: 'PHP 19.48', leads: 774, width: '100%', highlight: true },
  { name: 'Real Estate', cpl: 'PHP 26.71', leads: 770, width: '99%', highlight: true },
  { name: 'Southscapes', cpl: 'PHP 23.88', leads: 628, width: '81%', highlight: true },
  { name: 'Campaign', cpl: 'PHP 3.61', leads: 478, width: '62%', highlight: false },
  { name: 'Campaign', cpl: 'PHP 4.52', leads: 732, width: '94%', highlight: false },
  { name: 'Campaign', cpl: 'PHP 6.85', leads: 757, width: '97%', highlight: false },
  { name: 'Campaign', cpl: 'PHP 10.76', leads: 226, width: '29%', highlight: false },
]

const CASE_STUDIES = [
  {
    img: '/screenshots/awards3.jpg',
    category: 'Lead Generation',
    num: '35,869',
    title: 'High-Volume Real Estate Lead Gen',
    desc: '350+ campaigns, $0.14 USD avg CPL across 3 years. Top campaign: 2,702 leads at PHP 0.11 CPL on a PHP 300 lifetime budget.',
    tags: ['Meta Ads', 'CBO/ABO', 'Retargeting'],
  },
  {
    img: '/screenshots/awards2.jpg',
    category: 'Real Estate',
    num: '1,100+ Leads',
    title: 'Southscapes — Messaging Campaigns',
    desc: 'Two Facebook messaging campaigns at PHP 10K–15K budget each. 628 and 491 direct-conversation leads from active property buyers.',
    tags: ['Messaging Ads', 'Real Estate', 'Lead Gen'],
  },
  {
    img: '/screenshots/awards4.jpg',
    category: 'Deals Closed',
    num: '$1M+ USD',
    title: '$1M+ in Closed Deals via Meta Ads',
    desc: 'Ran full Meta Ads funnels as Senior Property Consultant at Antel Land. Ranked Top 2 nationally, exceeded 200% of sales quota in 6 months.',
    tags: ['Lead Funnel', 'Real Estate', 'Sales'],
  },
]

const TESTIMONIALS = [
  {
    text: '"Eron consistently delivered leads at a fraction of what we were paying before. His CPL dropped from PHP 80 to under PHP 10 within the first month."',
    name: 'Real Estate Client',
    role: 'Property Developer · Philippines',
    init: 'R',
  },
  {
    text: '"Fast execution, clean creatives, and he actually understands what moves the needle. Not just someone who launches ads — he optimizes constantly."',
    name: 'E-commerce Client',
    role: 'Online Store Owner',
    init: 'E',
  },
]

const ABOUT_QUICK = [
  { Icon: MapPin, label: 'Location', value: 'Naic, Cavite, Philippines' },
  { Icon: Globe, label: 'Availability', value: 'Remote Worldwide · Full-time or Part-time' },
  { Icon: MessageSquare, label: 'Languages', value: 'English (Fluent) · Filipino (Native)' },
  { Icon: Calendar, label: 'Experience', value: '3+ Years · 350 Campaigns' },
]

const SKILLS = [
  'Meta Ads Manager',
  'Google Ads',
  'Facebook Pixel',
  'CBO / ABO',
  'CapCut',
  'A/B Testing',
  'Lead Gen',
  'Ad Copywriting',
  'Retargeting',
  'CTR Optimization',
  'Hook Rate',
  'Hold Rate',
  'CPA',
  'ROAS',
]

export default function Page() {
  return (
    <div className="min-h-[100dvh] bg-[#f5f5f3] text-[#111]">

      {/* NAV */}
      <nav className="bg-white border-b border-[#e8e8e8] px-6 md:px-10 h-14 flex items-center justify-between sticky top-0 z-50">
        <span className="text-[15px] font-extrabold tracking-[-0.02em]">
          Eron<span className="text-[#1d4ed8]">.</span>
        </span>
        <div className="hidden md:flex items-center gap-7">
          {['Results', 'Services', 'Work', 'About'].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[13px] font-medium text-[#777] hover:text-[#111] transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/639559413969?text=Hi%20Eron!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1d4ed8] text-white text-xs font-bold px-[18px] py-2 rounded-lg"
        >
          Book a Call
        </a>
      </nav>

      {/* HERO */}
      <section className="bg-white border-b border-[#e8e8e8] px-6 md:px-10 pt-16 pb-12">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 bg-[#eff6ff] border border-[#bfdbfe] text-[#1d4ed8] text-[11px] font-semibold px-3 py-1.5 rounded-full mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8] animate-pulse" />
          Available for Remote Work Worldwide
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-end gap-x-10 gap-y-5 mb-6"
        >
          {[
            { num: '35,869', label: 'Leads Generated', accent: false },
            { num: '$0.14', label: 'Avg Cost Per Lead (USD)', accent: true },
            { num: '$1M+', label: 'Deals Closed (USD)', accent: false },
          ].map(({ num, label, accent }, i) => (
            <div
              key={label}
              className={i < 2 ? 'border-r border-[#e8e8e8] pr-10' : ''}
            >
              <div
                className={`text-[48px] md:text-[56px] font-black tracking-[-0.04em] leading-none mb-1 ${
                  accent ? 'text-[#1d4ed8]' : 'text-[#111]'
                }`}
              >
                {num}
              </div>
              <div className="text-[11px] font-semibold text-[#777] uppercase tracking-[0.07em]">
                {label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="text-[15px] text-[#777] font-medium mb-7 leading-relaxed max-w-2xl"
        >
          <strong className="text-[#111] font-bold">Eron Carlo Caina</strong> — Meta Ads & Google Ads Specialist
          and Media Buyer. 350+ campaigns across real estate and e-commerce. Philippines, remote
          worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-wrap gap-2.5"
        >
          <a
            href="https://wa.me/639559413969?text=Hi%20Eron!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1d4ed8] text-white text-[13px] font-bold px-[22px] py-3 rounded-lg active:scale-[0.98] transition-transform"
          >
            Book a Free Strategy Call
            <ArrowRight size={14} strokeWidth={2.5} />
          </a>
          <a
            href="/Eron-Caina-Meta-Google-Ads-Specialist-CV.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-[#111] text-[13px] font-semibold px-[22px] py-3 rounded-lg border border-[#e8e8e8] active:scale-[0.98] transition-transform"
          >
            <Download size={13} strokeWidth={2} />
            Download CV
          </a>
        </motion.div>
      </section>

      {/* RESULTS */}
      <section id="results" className="px-6 md:px-10 py-10">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#1d4ed8] mb-4">
            Campaign Results
          </p>
          <h2 className="text-2xl font-extrabold text-[#111] tracking-tight mb-1.5">
            Verified Ad Performance
          </h2>
          <p className="text-sm text-[#777] font-medium mb-7">
            Data from Meta Ads Manager · Apr 2023 – Jun 2026 · 350 campaigns
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* CPL Comparison */}
          <FadeIn delay={0.05} className="bg-white border border-[#e8e8e8] rounded-2xl p-5">
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#bbb] mb-3">
              Cost Per Lead vs Industry
            </p>
            <div className="space-y-3">
              {[
                { name: "Eron's campaigns", val: '$0.14 USD', color: 'text-[#1d4ed8]', fill: '#1d4ed8', width: '6%' },
                { name: 'Industry average', val: '$1–$3 USD', color: 'text-[#bbb]', fill: '#ddd', width: '55%' },
                { name: 'Real estate avg', val: '$5–$15 USD', color: 'text-[#bbb]', fill: '#eee', width: '100%' },
              ].map(({ name, val, color, fill, width }) => (
                <div key={name}>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-[11px] text-[#777] font-medium">{name}</span>
                    <span className={`text-[12px] font-bold ${color}`}>{val}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#f0f0f0]">
                    <div className="h-full rounded-full" style={{ width, background: fill }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 bg-[#eff6ff] border border-[#bfdbfe] rounded-lg px-3.5 py-2.5 text-[12px] font-bold text-[#1d4ed8]">
              Up to 21x cheaper per lead than industry average
            </div>
          </FadeIn>

          {/* Lead Funnel */}
          <FadeIn delay={0.1} className="bg-white border border-[#e8e8e8] rounded-2xl p-5">
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#bbb] mb-3">
              Lead Funnel
            </p>
            <div className="space-y-3">
              {[
                { label: 'Impressions', val: '2.96M', pct: '100%', bg: '#e0e0e0', accent: false },
                { label: 'People Reached', val: '2.07M', pct: '70%', bg: '#a8d5be', accent: false },
                { label: 'Leads Generated', val: '35,869', pct: '17%', bg: '#1d4ed8', accent: true },
              ].map(({ label, val, pct, bg, accent }) => (
                <div key={label}>
                  <div className="flex justify-between mb-1">
                    <span
                      className={`text-[11px] font-medium ${
                        accent ? 'font-semibold text-[#1d4ed8]' : 'text-[#777]'
                      }`}
                    >
                      {label}
                    </span>
                    <span
                      className={`text-[12px] font-bold ${
                        accent ? 'text-[#1d4ed8]' : 'text-[#777]'
                      }`}
                    >
                      {val}
                    </span>
                  </div>
                  <div className="h-3 rounded bg-[#f0f0f0]">
                    <div className="h-full rounded" style={{ width: pct, background: bg }} />
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Metrics Tracked */}
          <FadeIn delay={0.15} className="bg-white border border-[#e8e8e8] rounded-2xl p-5">
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#bbb] mb-3">
              Metrics I Optimize For
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { metric: 'CPA', desc: 'Cost Per Acquisition — primary optimization target' },
                { metric: 'CTR', desc: 'Click-through rate — measures ad relevance' },
                { metric: 'Hook Rate', desc: '3-sec video views — creative strength signal' },
                { metric: 'Hold Rate', desc: 'Video completion — audience-message fit' },
                { metric: 'ROAS', desc: 'Return on ad spend — campaign profitability' },
              ].map(({ metric, desc }) => (
                <div key={metric} className="flex items-start gap-2.5">
                  <span className="text-[11px] font-extrabold text-[#1d4ed8] w-20 flex-shrink-0 mt-[1px]">
                    {metric}
                  </span>
                  <span className="text-[10px] text-[#aaa] leading-relaxed">{desc}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* At a Glance */}
          <FadeIn delay={0.2} className="bg-white border border-[#e8e8e8] rounded-2xl p-5">
            <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#bbb] mb-3">
              At a Glance
            </p>
            <div className="flex flex-col gap-4">
              {[
                { value: '$0.002', label: 'Best CPL Achieved (USD)' },
                { value: '350+', label: 'Campaigns Run' },
                { value: '35,869', label: 'Total Leads Generated' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-[22px] font-black text-[#111] tracking-[-0.03em] leading-none">
                    {value}
                  </div>
                  <div className="text-[10px] text-[#777] font-semibold uppercase tracking-[0.06em] mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Top Campaigns by Leads — full width */}
          <FadeIn delay={0.2} className="bg-white border border-[#e8e8e8] rounded-2xl p-5 md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#bbb]">
                Top Campaigns by Leads
              </p>
              <span className="text-[9px] font-semibold text-[#bbb] uppercase tracking-[0.08em]">
                Leads · CPL (USD)
              </span>
            </div>
            <div className="divide-y divide-[#f5f5f5]">
              {CAMPAIGNS.map(({ rank, name, leads, cpl, width }) => (
                <div key={rank} className="flex items-center gap-3 py-2">
                  <span className="text-[11px] font-bold text-[#ccc] w-5 text-center flex-shrink-0">
                    #{rank}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-[#777] mb-1 truncate">{name}</p>
                    <div className="h-1.5 bg-[#f0f0f0] rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa]"
                        style={{ width }}
                      />
                    </div>
                  </div>
                  <span className="text-[13px] font-extrabold text-[#1d4ed8] w-14 text-right flex-shrink-0">
                    {leads.toLocaleString()}
                  </span>
                  <span className="text-[10px] text-[#777] w-14 text-right flex-shrink-0 font-semibold">
                    {cpl}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Meta Ads Manager Screenshot Proof */}
          <FadeIn delay={0.25} className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden md:col-span-3">
            <div className="px-5 pt-5 pb-3 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#1d4ed8] animate-pulse flex-shrink-0" />
                <p className="text-[11px] font-bold tracking-[0.05em] uppercase text-[#555]">
                  Verified from Meta Ads Manager
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: '350 Campaigns' },
                  { label: 'May 2023 – Jun 2026' },
                  { label: 'Real Account Data' },
                ].map(({ label }) => (
                  <span key={label} className="inline-flex items-center bg-[#1d4ed8] text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-[0.06em]">
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative mx-5 mb-5 rounded-xl overflow-hidden border border-[#e8e8e8]">
              <img
                src="/screenshots/meta-ads-proof.png"
                alt="Meta Ads Manager campaign results"
                className="w-full object-cover"
              />
              {/* Highlight overlays */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Real Estate row highlight */}
                <div className="absolute left-0 right-0 border-l-2 border-[#1d4ed8]" style={{ top: '34%', height: '11%', background: 'rgba(29,78,216,0.06)' }}>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1d4ed8] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">770 msgs · PHP 26.71</span>
                </div>
                {/* PH1 row highlight */}
                <div className="absolute left-0 right-0 border-l-2 border-[#1d4ed8]" style={{ top: '47%', height: '11%', background: 'rgba(29,78,216,0.06)' }}>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1d4ed8] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">774 msgs · PHP 19.48</span>
                </div>
                {/* Southscapes row highlight */}
                <div className="absolute left-0 right-0 border-l-2 border-[#1d4ed8]" style={{ top: '60%', height: '11%', background: 'rgba(29,78,216,0.06)' }}>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1d4ed8] text-white text-[8px] font-bold px-1.5 py-0.5 rounded">628 msgs · PHP 23.88</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Best Messaging CPL */}
          <FadeIn delay={0.3} className="bg-white border border-[#e8e8e8] rounded-2xl p-5 md:col-span-3">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-[#bbb]">
                Messaging Campaigns
              </p>
              <span className="text-[9px] font-semibold text-[#bbb] uppercase tracking-[0.08em]">
                Leads · CPL
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mt-1">
              {MESSAGING_CAMPAIGNS.map(({ name, cpl, leads, width, highlight }) => (
                <div key={`${cpl}-${leads}`} className={`rounded-xl p-3 border ${highlight ? 'bg-[#eff6ff] border-[#bfdbfe]' : 'bg-[#f9f9f7] border-[#e8e8e8]'}`}>
                  {highlight && (
                    <div className="text-[8px] font-bold text-[#1d4ed8] uppercase tracking-[0.08em] mb-1">{name}</div>
                  )}
                  <div className="text-[18px] font-black text-[#1d4ed8] tracking-[-0.02em] leading-none mb-0.5">
                    {leads}
                  </div>
                  <div className="text-[9px] text-[#aaa] font-medium mb-2">msgs</div>
                  <div className="h-1 bg-[#e0e0e0] rounded-full overflow-hidden mb-1.5">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#1d4ed8] to-[#60a5fa]"
                      style={{ width }}
                    />
                  </div>
                  <div className="text-[11px] font-bold text-[#555]">{cpl}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-white border-t border-b border-[#e8e8e8] px-6 md:px-10 py-10">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#1d4ed8] mb-4">
            What I Do
          </p>
          <h2 className="text-2xl font-extrabold text-[#111] tracking-tight mb-1.5">Services</h2>
          <p className="text-sm text-[#777] font-medium mb-7">
            Full-cycle Meta Ads and Google Ads management, from strategy to results
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SERVICES.map(({ icon: Icon, title, desc, tags }, i) => (
            <FadeIn
              key={title}
              delay={i * 0.07}
              className="bg-[#f9f9f7] border border-[#e8e8e8] rounded-2xl p-6"
            >
              <div className="w-9 h-9 rounded-lg bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center mb-3.5">
                <Icon size={16} strokeWidth={1.5} className="text-[#1d4ed8]" />
              </div>
              <h3 className="text-sm font-extrabold text-[#111] mb-1.5">{title}</h3>
              <p className="text-xs text-[#777] leading-relaxed mb-3">{desc}</p>
              <div className="flex flex-wrap gap-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold text-[#1d4ed8] bg-[#eff6ff] border border-[#bfdbfe] px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="work" className="px-6 md:px-10 py-10">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#1d4ed8] mb-4">
            Featured Work
          </p>
          <h2 className="text-2xl font-extrabold text-[#111] tracking-tight mb-1.5">Case Studies</h2>
          <p className="text-sm text-[#777] font-medium mb-7">Real campaigns, real numbers</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {CASE_STUDIES.map(({ img, category, num, title, desc, tags }, i) => (
            <FadeIn
              key={title}
              delay={i * 0.08}
              className="bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden"
            >
              <div className="h-[120px] bg-gradient-to-br from-[#e8f5ee] to-[#d0ebe0] relative border-b border-[#e8e8e8]">
                <img
                  src={img}
                  alt={title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
                <span className="absolute top-2.5 right-2.5 bg-white/90 border border-[#e8e8e8] text-[9px] font-bold text-[#777] px-2 py-1 rounded-full uppercase tracking-[0.05em]">
                  {category}
                </span>
              </div>
              <div className="p-4">
                <div className="text-[22px] font-black text-[#1d4ed8] tracking-[-0.03em] mb-0.5">
                  {num}
                </div>
                <h3 className="text-[13px] font-bold text-[#111] mb-1.5">{title}</h3>
                <p className="text-[11px] text-[#777] leading-relaxed">{desc}</p>
                <div className="flex flex-wrap gap-1 mt-2.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-semibold text-[#1d4ed8] bg-[#eff6ff] border border-[#bfdbfe] px-1.5 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-white border-t border-b border-[#e8e8e8] px-6 md:px-10 py-10">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#1d4ed8] mb-4">
            Social Proof
          </p>
          <h2 className="text-2xl font-extrabold text-[#111] tracking-tight mb-1.5">
            What Clients Say
          </h2>
          <p className="text-sm text-[#777] font-medium mb-7">From real clients and colleagues</p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {TESTIMONIALS.map(({ text, name, role, init }) => (
            <FadeIn key={name} className="bg-[#f9f9f7] border border-[#e8e8e8] rounded-2xl p-5">
              <p className="text-[12px] text-amber-400 tracking-widest mb-2.5">★★★★★</p>
              <p className="text-xs text-[#777] leading-relaxed mb-3.5 italic">{text}</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center text-[13px] font-bold text-[#1d4ed8] flex-shrink-0">
                  {init}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111]">{name}</p>
                  <p className="text-[10px] text-[#777]">{role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 md:px-10 py-10">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#1d4ed8] mb-4">
            Background
          </p>
          <h2 className="text-2xl font-extrabold text-[#111] tracking-tight mb-1.5">About Eron</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          <FadeIn delay={0.05} className="bg-white border border-[#e8e8e8] rounded-2xl p-6">
            <p className="text-[13px] text-[#777] leading-[1.7] mb-4">
              Meta Ads & Google Ads Specialist with <strong className="text-[#111]">3+ years</strong> managing
              paid advertising campaigns across real estate and e-commerce. I handle everything from
              campaign strategy and audience targeting to ad creative production and performance
              reporting.
            </p>
            <p className="text-[13px] text-[#777] leading-[1.7] mb-5">
              Before going full-time freelance, I ran Meta Ads funnels as a{' '}
              <strong className="text-[#111]">Senior Property Consultant at Antel Land</strong>,
              generating $1M+ USD in closed deals and ranking Top 2 nationally.
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-semibold text-[#111] bg-[#f5f5f3] border border-[#e8e8e8] px-3 py-1.5 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="bg-white border border-[#e8e8e8] rounded-2xl p-6">
            <div className="flex flex-col gap-2.5">
              {ABOUT_QUICK.map(({ Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-3 py-3 bg-[#f9f9f7] rounded-lg border border-[#e8e8e8]"
                >
                  <Icon size={15} strokeWidth={1.5} className="text-[#1d4ed8] flex-shrink-0" />
                  <div>
                    <p className="text-[10px] text-[#777] font-medium">{label}</p>
                    <p className="text-[13px] font-bold text-[#111]">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#111] px-6 md:px-10 py-14 text-center">
        <FadeIn>
          <p className="text-[10px] font-bold tracking-[0.12em] uppercase text-white/35 mb-3">
            Let's Work Together
          </p>
          <h2 className="text-[32px] font-black text-white tracking-[-0.03em] mb-2 leading-tight">
            Ready to scale your <span className="text-[#60a5fa]">ad results?</span>
          </h2>
          <p className="text-[14px] text-white/45 mb-7">
            Book a free strategy call. No commitment, just results.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="https://wa.me/639559413969?text=Hi%20Eron!%20I%20saw%20your%20portfolio%20and%20I%27m%20interested%20in%20working%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#60a5fa] text-black text-[13px] font-extrabold px-6 py-3 rounded-lg active:scale-[0.98] transition-transform"
            >
              Book a Free Strategy Call
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
            <a
              href="/Eron-Caina-Meta-Google-Ads-Specialist-CV.pdf"
              download
              className="inline-flex items-center gap-2 bg-white/[0.08] text-white text-[13px] font-semibold px-6 py-3 rounded-lg border border-white/[0.12] active:scale-[0.98] transition-transform"
            >
              <Download size={13} strokeWidth={2} />
              Download CV
            </a>
          </div>
          <p className="mt-6 text-[12px] text-white/30">
            Or email:{' '}
            <a
              href="mailto:eroncca08@gmail.com"
              className="text-white/50 hover:text-white/70 transition-colors"
            >
              eroncca08@gmail.com
            </a>
          </p>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] px-6 md:px-10 py-5 flex flex-wrap justify-between items-center gap-2">
        <span className="text-[12px] font-bold text-white/40">Eron Carlo Caina</span>
        <span className="text-[11px] text-white/25">
          Meta Ads & Google Ads Specialist · eroncaina-portfolio.vercel.app
        </span>
      </footer>
    </div>
  )
}
