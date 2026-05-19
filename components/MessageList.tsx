'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Message } from 'ai'
import MessageBubble from './MessageBubble'
import ProjectCards from './ProjectCards'

interface MessageListProps {
  messages: Message[]
  isLoading: boolean
  showProjects: boolean
}

export default function MessageList({ messages, isLoading, showProjects }: MessageListProps) {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  const lastAiIndex = [...messages].map((m, i) => ({ m, i })).reverse().find(({ m }) => m.role === 'assistant')?.i ?? -1

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-2xl mx-auto w-full">
      <AnimatePresence initial={false}>
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            <MessageBubble message={message} />

            {showProjects && message.role === 'assistant' && index === lastAiIndex && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                className="mt-5 ml-9"
              >
                <ProjectCards />
              </motion.div>
            )}
          </motion.div>
        ))}
      </AnimatePresence>

      {isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-end gap-2.5"
        >
          <div
            className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold"
            style={{
              background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,229,255,0.3))',
              border: '1px solid rgba(0,229,255,0.35)',
              color: '#00e5ff',
            }}
          >
            EC
          </div>
          <div
            className="px-4 py-3.5 rounded-2xl rounded-bl-sm"
            style={{
              background: 'var(--ai-bubble)',
              border: '1px solid rgba(0,229,255,0.12)',
            }}
          >
            <div className="flex gap-1.5 items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="w-2 h-2 rounded-full block"
                  style={{
                    background: '#00e5ff',
                    animation: 'dotBounce 1.4s ease-in-out infinite',
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}

      <div ref={bottomRef} className="h-1" />
    </div>
  )
}
