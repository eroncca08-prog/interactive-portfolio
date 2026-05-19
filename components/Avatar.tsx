'use client'

import { memo, useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export type AvatarState = 'idle' | 'thinking' | 'talking'

const TOTAL_FRAMES = 96

const frameUrl = (n: number) =>
  `/avatar-frames/frame_${String(Math.max(1, Math.min(TOTAL_FRAMES, n))).padStart(4, '0')}.webp`

interface AvatarProps {
  state?: AvatarState
  className?: string
}

const Avatar = memo(function Avatar({ state = 'idle', className = '' }: AvatarProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  const targetRef = useRef(1.0)
  const currentRef = useRef(1.0)
  const displayedRef = useRef(1)
  const rafRef = useRef<number>(0)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const x = useSpring(rawX, { stiffness: 55, damping: 16, mass: 0.9 })
  const y = useSpring(rawY, { stiffness: 55, damping: 16, mass: 0.9 })

  useEffect(() => {
    const preload = (start: number, end: number) => {
      for (let i = start; i <= end; i++) new Image().src = frameUrl(i)
    }
    preload(1, 24)
    const t1 = setTimeout(() => preload(25, 60), 600)
    const t2 = setTimeout(() => preload(61, 96), 1400)

    const onMouseMove = (e: MouseEvent) => {
      const ratio = e.clientX / window.innerWidth
      targetRef.current = 1 + ratio * (TOTAL_FRAMES - 1)

      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      rawX.set(((e.clientX - cx) / cx) * 22)
      rawY.set(((e.clientY - cy) / cy) * 14)

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      idleTimerRef.current = setTimeout(() => {
        targetRef.current = 1
        rawX.set(0)
        rawY.set(0)
      }, 2200)
    }

    const tick = () => {
      currentRef.current += (targetRef.current - currentRef.current) * 0.09
      const frame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(currentRef.current)))
      if (frame !== displayedRef.current && imgRef.current) {
        displayedRef.current = frame
        imgRef.current.src = frameUrl(frame)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMouseMove)
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current)
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [rawX, rawY])

  const isThinking = state === 'thinking'

  return (
    <motion.div style={{ x, y }} className={`relative select-none ${className}`}>
      {/* CSS-driven float — no Framer Motion loop, no React state updates */}
      <div
        className="relative w-full h-full"
        style={{
          animation: isThinking
            ? 'avatarFloatSlow 1.3s ease-in-out infinite'
            : 'avatarFloat 4.2s ease-in-out infinite',
        }}
      >
        {/* Ambient glow ring — CSS animation */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: '0 0 30px 4px rgba(0,229,255,0.25), 0 0 70px rgba(0,229,255,0.08)',
            animation: isThinking ? 'glowPulse 1.2s ease-in-out infinite' : 'none',
          }}
        />

        {/* Circular frame */}
        <div
          className="relative rounded-full overflow-hidden w-full h-full"
          style={{ border: '2px solid rgba(0,229,255,0.3)' }}
        >
          <img
            ref={imgRef}
            src="/avatar-frames/frame_0001.webp"
            alt="Eron Carlo Caina"
            style={{
              position: 'absolute',
              width: '110%',
              height: 'auto',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -28%)',
              filter: isThinking ? 'brightness(0.82)' : 'brightness(1)',
              transition: 'filter 0.4s ease',
              userSelect: 'none',
              WebkitUserDrag: 'none',
            } as React.CSSProperties}
            draggable={false}
          />
        </div>

        {/* Thinking dots — CSS animation via dotBounce keyframe */}
        {isThinking && (
          <div className="absolute -top-1 -right-2 flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-2 h-2 rounded-full"
                style={{
                  background: '#00e5ff',
                  animation: 'dotBounce 0.75s ease-in-out infinite',
                  animationDelay: `${i * 0.18}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
})

export default Avatar
