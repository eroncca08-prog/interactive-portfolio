'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function MouseEffect() {
  const gradientRef = useRef<HTMLDivElement>(null)
  const hueRef = useRef(180)
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafRef = useRef<number>(0)
  const isActiveRef = useRef(false)

  const createRing = useCallback((x: number, y: number, delay: number) => {
    const ring = document.createElement('div')
    ring.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border-radius: 50%;
      border: 2px solid rgba(0,229,255,0.55);
      pointer-events: none;
      z-index: 9998;
      transform: translate(-50%, -50%);
      animation: splashRing 0.65s ease-out ${delay}s forwards;
    `
    document.body.appendChild(ring)
    setTimeout(() => ring.remove(), (delay + 0.7) * 1000)
  }, [])

  const handleClick = useCallback(
    (e: MouseEvent) => {
      createRing(e.clientX, e.clientY, 0)
      createRing(e.clientX, e.clientY, 0.08)
      createRing(e.clientX, e.clientY, 0.18)
    },
    [createRing],
  )

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = gradientRef.current
    if (!el) return
    el.style.left = `${e.clientX}px`
    el.style.top = `${e.clientY}px`
    el.style.opacity = '1'
    isActiveRef.current = true

    if (inactivityTimer.current) clearTimeout(inactivityTimer.current)
    inactivityTimer.current = setTimeout(() => {
      if (gradientRef.current) gradientRef.current.style.opacity = '0'
      isActiveRef.current = false
    }, 2500)
  }, [])

  useEffect(() => {
    const animate = () => {
      hueRef.current = (hueRef.current + 0.7) % 360
      const el = gradientRef.current
      if (el) el.style.setProperty('--hue', String(Math.round(hueRef.current)))
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('click', handleClick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleClick)
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current)
    }
  }, [handleMouseMove, handleClick])

  return (
    <div
      ref={gradientRef}
      aria-hidden="true"
      className="mouse-gradient"
      style={{ opacity: 0 }}
    />
  )
}
