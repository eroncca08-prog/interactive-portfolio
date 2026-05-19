'use client'

import { motion } from 'framer-motion'

interface Chip {
  label: string
  icon: string
}

interface SuggestionChipsProps {
  chips: Chip[]
  onSelect: (text: string) => void
}

export default function SuggestionChips({ chips, onSelect }: SuggestionChipsProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2 max-w-sm px-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.55, duration: 0.4 }}
    >
      {chips.map((chip, i) => (
        <motion.button
          key={chip.label}
          onClick={() => onSelect(chip.label)}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55 + i * 0.08, duration: 0.25 }}
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 relative overflow-hidden group"
          style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            color: 'var(--text-primary)',
          }}
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full"
            style={{ background: 'rgba(0,229,255,0.07)' }}
          />
          <span className="relative">{chip.icon}</span>
          <span className="relative">{chip.label}</span>
        </motion.button>
      ))}
    </motion.div>
  )
}
