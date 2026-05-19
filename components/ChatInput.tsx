'use client'

import { ChangeEvent, FormEvent, KeyboardEvent, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp, Loader2, ArrowLeft } from 'lucide-react'

interface ChatInputProps {
  input: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  onSubmit: (e: FormEvent) => void
  onBack?: () => void
  isLoading: boolean
  hasMessages: boolean
}

export default function ChatInput({ input, onChange, onSubmit, onBack, isLoading, hasMessages }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = `${Math.min(ta.scrollHeight, 128)}px`
  }, [input])

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (input.trim() && !isLoading) {
        onSubmit(e as unknown as FormEvent)
      }
    }
  }

  const canSend = input.trim().length > 0 && !isLoading

  return (
    <div className="max-w-2xl mx-auto w-full">
      {hasMessages && onBack && (
        <motion.button
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 mb-3 px-4 py-2 rounded-full text-sm font-semibold w-full justify-center"
          style={{
            background: 'rgba(0,229,255,0.1)',
            border: '1.5px solid rgba(0,229,255,0.4)',
            color: '#00e5ff',
          }}
        >
          <ArrowLeft size={15} strokeWidth={2.5} />
          Back to Home
        </motion.button>
      )}
      <form onSubmit={onSubmit}>
        <div
          className="flex items-end gap-2 rounded-2xl border px-4 py-3 transition-all duration-200 focus-within:border-cyan-400/40 focus-within:shadow-[0_0_0_1px_rgba(0,229,255,0.15)]"
          style={{
            background: 'var(--bg-surface)',
            borderColor: 'var(--border)',
          }}
        >
          <textarea
            ref={textareaRef}
            value={input}
            onChange={onChange}
            onKeyDown={handleKeyDown}
            placeholder={
              hasMessages
                ? 'Ask me anything...'
                : 'Ask about my skills, projects, or how I can help your business...'
            }
            rows={1}
            disabled={isLoading}
            className="flex-1 resize-none bg-transparent outline-none text-sm leading-relaxed overflow-y-auto disabled:opacity-60"
            style={{
              color: 'var(--text-primary)',
              maxHeight: '128px',
              fontFamily: 'var(--font-outfit)',
            }}
          />
          <motion.button
            type="submit"
            disabled={!canSend}
            whileTap={{ scale: 0.88 }}
            className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: canSend ? '#00e5ff' : 'transparent',
              color: canSend ? '#000' : 'var(--text-muted)',
              border: canSend ? 'none' : '1px solid var(--border)',
              boxShadow: canSend ? '0 0 16px rgba(0,229,255,0.35)' : 'none',
            }}
          >
            {isLoading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <ArrowUp size={14} strokeWidth={2.5} />
            )}
          </motion.button>
        </div>
        <p className="text-center text-xs mt-2" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>
          Powered by AI · Ask me anything · Press Enter to send
        </p>
      </form>
    </div>
  )
}
