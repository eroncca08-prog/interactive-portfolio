'use client'

import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Message } from 'ai'

interface MessageBubbleProps {
  message: Message
}

const MessageBubble = memo(function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} items-end gap-2.5`}>
      {!isUser && (
        <div
          className="w-7 h-7 rounded-full flex-shrink-0 mb-0.5 flex items-center justify-center text-[10px] font-bold tracking-tight"
          style={{
            background: 'linear-gradient(135deg, rgba(0,229,255,0.15), rgba(0,229,255,0.3))',
            border: '1px solid rgba(0,229,255,0.35)',
            color: '#00e5ff',
          }}
        >
          EC
        </div>
      )}

      <div
        className={`max-w-[78%] md:max-w-[68%] px-4 py-3 ${
          isUser ? 'rounded-2xl rounded-br-sm' : 'rounded-2xl rounded-bl-sm'
        }`}
        style={{
          background: isUser ? 'var(--user-bubble)' : 'var(--ai-bubble)',
          border: isUser ? '1px solid var(--border)' : '1px solid rgba(0,229,255,0.12)',
          boxShadow: isUser ? 'none' : '0 4px 24px rgba(0,229,255,0.04)',
          color: 'var(--text-primary)',
        }}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        ) : (
          <div className="prose-chat text-sm">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                strong: ({ children }) => (
                  <strong style={{ color: '#00e5ff', fontWeight: 600 }}>{children}</strong>
                ),
                code: ({ children }) => (
                  <code
                    className="font-mono text-xs px-1.5 py-0.5 rounded"
                    style={{
                      background: 'rgba(0,229,255,0.08)',
                      border: '1px solid rgba(0,229,255,0.18)',
                      color: '#00e5ff',
                    }}
                  >
                    {children}
                  </code>
                ),
                ul: ({ children }) => (
                  <ul className="pl-4 space-y-1 my-1">{children}</ul>
                ),
                li: ({ children }) => (
                  <li className="text-sm leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                    {children}
                  </li>
                ),
                p: ({ children }) => (
                  <p className="leading-relaxed mb-2 last:mb-0">{children}</p>
                ),
                h1: ({ children }) => (
                  <h1 className="font-semibold text-base mb-2">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-semibold text-sm mb-1.5">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-medium text-sm mb-1">{children}</h3>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )}
      </div>

      {isUser && (
        <div
          className="w-7 h-7 rounded-full flex-shrink-0 mb-0.5 flex items-center justify-center text-[10px] font-bold"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            color: 'var(--text-muted)',
          }}
        >
          You
        </div>
      )}
    </div>
  )
})

export default MessageBubble
