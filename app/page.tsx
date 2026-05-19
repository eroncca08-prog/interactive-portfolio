'use client'

import { useChat } from 'ai/react'
import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Avatar, { type AvatarState } from '@/components/Avatar'
import SuggestionChips from '@/components/SuggestionChips'
import MessageList from '@/components/MessageList'
import ChatInput from '@/components/ChatInput'
import ThemeToggle from '@/components/ThemeToggle'
import ContactBar from '@/components/ContactBar'
import TestimonialsSection from '@/components/TestimonialsSection'
import { ArrowLeft, Play, CalendarDays } from 'lucide-react'

const MouseEffect = dynamic(() => import('@/components/MouseEffect'), { ssr: false })

const SUGGESTIONS = [
  { label: 'Show me your projects', icon: '🚀' },
  { label: 'What are your top skills?', icon: '⚡' },
  { label: 'How can we collaborate?', icon: '🤝' },
  { label: 'Tell me a fun fact about you', icon: '✨' },
]

const PROJECT_KEYWORDS = ['project', 'portfolio', 'work', 'campaign', 'case study', 'showcase']

export default function Page() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [avatarState, setAvatarState] = useState<AvatarState>('idle')
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [showProjects, setShowProjects] = useState(false)
  const wasLoadingRef = useRef(false)

  const { messages, setMessages, input, handleInputChange, handleSubmit, isLoading, append } = useChat({
    api: '/api/chat',
  })

  const handleBack = useCallback(() => {
    setMessages([])
    setShowSuggestions(true)
    setShowProjects(false)
    setAvatarState('idle')
    wasLoadingRef.current = false
  }, [setMessages])

  const hasMessages = messages.length > 0

  // Sync theme class to <html>
  useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  // Avatar state driven by isLoading
  useEffect(() => {
    if (isLoading) {
      wasLoadingRef.current = true
      setAvatarState('thinking')
      return
    }
    if (wasLoadingRef.current) {
      wasLoadingRef.current = false
      setAvatarState('talking')
      const t = setTimeout(() => setAvatarState('idle'), 2800)
      return () => clearTimeout(t)
    }
  }, [isLoading])

  // Show project cards when user asks about projects
  useEffect(() => {
    const lastUser = [...messages].reverse().find((m) => m.role === 'user')
    if (lastUser) {
      const lower = lastUser.content.toLowerCase()
      if (PROJECT_KEYWORDS.some((kw) => lower.includes(kw))) {
        setShowProjects(true)
      }
    }
  }, [messages])

  const handleSuggestion = useCallback(
    (text: string) => {
      setShowSuggestions(false)
      append({ role: 'user', content: text })
    },
    [append],
  )

  const handleFormSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      if (!input.trim() || isLoading) return
      setShowSuggestions(false)
      handleSubmit(e)
    },
    [input, isLoading, handleSubmit],
  )

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  }, [])

  return (
    <div
      className="min-h-[100dvh] flex flex-col relative"
      style={{ background: 'var(--bg)' }}
    >
      <MouseEffect />

      {/* ── Navigation bar ── */}
      <nav className="flex items-center justify-between px-5 py-4 relative z-10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <AnimatePresence mode="popLayout">
            {hasMessages ? (
              <motion.button
                key="back"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.22 }}
                whileTap={{ scale: 0.93 }}
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold flex-shrink-0"
                style={{
                  background: 'rgba(0,229,255,0.14)',
                  border: '1.5px solid rgba(0,229,255,0.45)',
                  color: '#00e5ff',
                  backdropFilter: 'blur(8px)',
                  boxShadow: '0 0 12px rgba(0,229,255,0.15)',
                }}
              >
                <ArrowLeft size={15} strokeWidth={2.5} />
                Home
              </motion.button>
            ) : (
              <motion.span
                key="logo"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="font-semibold text-sm tracking-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                eron.ai
              </motion.span>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {hasMessages && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6, width: 0 }}
                animate={{ opacity: 1, scale: 1, width: 32 }}
                exit={{ opacity: 0, scale: 0.6, width: 0 }}
                transition={{ duration: 0.3 }}
                className="h-8 rounded-full overflow-hidden ring-1 ring-cyan-400/25 flex-shrink-0"
              >
                <Avatar state={avatarState} className="w-8 h-8" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-3">
          {!hasMessages && (
            <span
              className="font-semibold text-sm tracking-tight hidden"
            />
          )}
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </nav>

      {/* ── Main content ── */}
      <main className="flex-1 flex flex-col overflow-hidden min-h-0">
        <AnimatePresence mode="wait">
          {!hasMessages ? (
            /* Hero state */
            <motion.div
              key="hero"
              className="flex-1 flex flex-col items-center justify-center text-center px-4 gap-7"
              exit={{ opacity: 0, y: -24, transition: { duration: 0.25 } }}
            >
              {/* Avatar + video button */}
              <motion.div
                className="relative w-44 h-44"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Avatar state={avatarState} className="w-44 h-44" />
                <a
                  href="https://www.facebook.com/profile.php?id=61573811056989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap"
                  style={{
                    background: 'rgba(0,0,0,0.75)',
                    border: '1px solid rgba(0,229,255,0.35)',
                    color: '#00e5ff',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <Play size={10} fill="#00e5ff" strokeWidth={0} />
                  Watch my work
                </a>
              </motion.div>

              {/* Greeting */}
              <div className="space-y-2 mt-3">
                <motion.h1
                  className="text-4xl md:text-5xl font-bold tracking-tight"
                  style={{ color: 'var(--text-primary)' }}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.18, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  Hey, I'm Eron Carlo 👋
                </motion.h1>
                <motion.p
                  className="text-base md:text-lg font-medium"
                  style={{ color: 'var(--text-muted)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.38 }}
                >
                  I turn Facebook Ads into closed deals — ₱60M+ in sales to prove it.
                </motion.p>
                <motion.div
                  className="flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.38, duration: 0.35 }}
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#22c55e' }} />
                    <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#22c55e' }} />
                  </span>
                  <span className="text-xs font-medium" style={{ color: '#22c55e' }}>
                    Available for hire
                  </span>
                </motion.div>
              </div>

              {/* Stats */}
              <motion.div
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
              >
                {[
                  { value: '₱60M+', label: 'Property Sales' },
                  { value: '200%', label: 'Quota Exceeded' },
                  { value: 'Top 6', label: 'Consultant Rank' },
                  { value: '5+ yrs', label: 'Experience' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center px-4 py-2.5 rounded-2xl"
                    style={{
                      background: 'rgba(0,229,255,0.06)',
                      border: '1px solid rgba(0,229,255,0.18)',
                    }}
                  >
                    <span
                      className="text-xl font-bold tracking-tight"
                      style={{ color: '#00e5ff' }}
                    >
                      {stat.value}
                    </span>
                    <span
                      className="text-xs font-medium mt-0.5"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Suggestion chips */}
              <AnimatePresence>
                {showSuggestions && (
                  <SuggestionChips chips={SUGGESTIONS} onSelect={handleSuggestion} />
                )}
              </AnimatePresence>

              {/* CTA */}
              <motion.a
                href="mailto:eroncca08@gmail.com?subject=Let's%20Work%20Together"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.35 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
                style={{
                  background: '#00e5ff',
                  color: '#000',
                  boxShadow: '0 0 24px rgba(0,229,255,0.35)',
                }}
              >
                <CalendarDays size={15} strokeWidth={2.5} />
                Book a Free Strategy Call
              </motion.a>

              <ContactBar />

              {/* Testimonials */}
              <TestimonialsSection />
            </motion.div>
          ) : (
            /* Chat state */
            <motion.div
              key="chat"
              className="flex-1 flex flex-col overflow-hidden min-h-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.28 }}
            >
              <MessageList
                messages={messages}
                isLoading={isLoading}
                showProjects={showProjects}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ── Chat input — always anchored at bottom ── */}
      <div className="flex-shrink-0 px-4 pt-2 pb-6 relative z-10">
        <ChatInput
          input={input}
          onChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onBack={handleBack}
          isLoading={isLoading}
          hasMessages={hasMessages}
        />
      </div>
    </div>
  )
}
