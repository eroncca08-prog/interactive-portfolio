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
import { ArrowLeft } from 'lucide-react'

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
        <div className="flex items-center gap-2.5">
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
          <span
            className="font-semibold text-sm tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            eron.ai
          </span>
        </div>
        <div className="flex items-center gap-3">
          <AnimatePresence>
            {hasMessages && (
              <motion.button
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.2 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleBack}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  background: 'rgba(0,229,255,0.12)',
                  border: '1px solid rgba(0,229,255,0.35)',
                  color: '#00e5ff',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <ArrowLeft size={15} strokeWidth={2.5} />
                Home
              </motion.button>
            )}
          </AnimatePresence>
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
              {/* Avatar */}
              <motion.div
                className="w-44 h-44"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Avatar state={avatarState} className="w-44 h-44" />
              </motion.div>

              {/* Greeting */}
              <div className="space-y-1.5">
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
                  transition={{ delay: 0.32, duration: 0.38 }}
                >
                  Real Estate Lead Generation & Inside Sales VA · Cavite, PH
                </motion.p>
              </div>

              {/* Suggestion chips */}
              <AnimatePresence>
                {showSuggestions && (
                  <SuggestionChips chips={SUGGESTIONS} onSelect={handleSuggestion} />
                )}
              </AnimatePresence>

              <ContactBar />
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
          isLoading={isLoading}
          hasMessages={hasMessages}
        />
      </div>
    </div>
  )
}
