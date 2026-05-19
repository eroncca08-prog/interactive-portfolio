'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function ViberIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.03 4.456.36 7.344.285 10.937c-.074 3.594-.166 10.325 6.297 12.142h.006l-.006 2.786s-.043.981.609 1.18c.793.241 1.26-.511 2.017-1.33.418-.453.994-1.117 1.428-1.619 3.935.33 6.958-.427 7.305-.538.794-.258 5.288-.834 6.021-6.79.756-6.136-.366-10.007-2.399-11.764l-.001-.001c-.604-.539-3.011-2.305-7.68-2.407-.34-.008-.676-.012-.984-.008l.5.396zM11.46 1.754c.278-.004.57-.001.87.006 4.116.09 6.223 1.619 6.72 2.062 1.734 1.491 2.659 4.951 2.01 10.313-.613 5.007-4.216 5.342-4.871 5.556-.291.096-3.044.759-6.461.542 0 0-2.562 3.094-3.363 3.901-.125.127-.27.178-.369.154-.139-.033-.177-.194-.175-.429l.021-3.909c-5.402-1.49-5.108-7.073-5.045-10.186.065-3.112.615-5.585 2.341-7.327 1.943-1.83 5.435-2.173 7.135-2.193l.187.51z"/>
      <path d="M12.11 5.604s.422-.029.65.214c.208.22.202.65.202.65s-.027 1.749-.772 2.496c-.621.617-1.53.746-2.08.808l-.148.017s-.215.024-.338-.111c-.147-.161-.101-.443-.101-.443l.128-.878s.034-.265.23-.386c.208-.129.567-.097.567-.097s.374.035.495-.233c.157-.349.079-1.538.079-1.538s-.028-.498-.912-.499zm.006 1.403c.039 0 .07.031.07.07v.524c0 .039-.031.07-.07.07h-.138c-.039 0-.07-.031-.07-.07v-.524c0-.039.031-.07.07-.07h.138zm2.41-.81c.225 0 .445.048.645.143.498.233.874.686 1.003 1.227.053.218.07.447.046.675l-.001.01c-.051.456-.253.874-.575 1.191-.313.308-.72.494-1.154.527l-.086.004c-.047.001-.086-.037-.086-.084v-.375c0-.044.034-.081.078-.085.284-.024.549-.145.748-.344.199-.199.316-.468.328-.747l.001-.066c.001-.228-.063-.449-.186-.638-.135-.207-.337-.367-.575-.455-.12-.044-.247-.067-.375-.067h-.004c-.047 0-.085-.038-.085-.085v-.374c0-.047.038-.085.085-.085l.193.001z"/>
    </svg>
  )
}

const CONTACTS = [
  {
    key: 'email',
    label: 'Email',
    display: 'eroncca08@gmail.com',
    href: 'mailto:eroncca08@gmail.com',
    color: '#00e5ff',
    bg: 'rgba(0,229,255,0.08)',
    border: 'rgba(0,229,255,0.28)',
    Icon: Mail,
    isLucide: true,
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    display: '+63 955 941 3969',
    href: 'https://wa.me/639559413969',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    border: 'rgba(37,211,102,0.28)',
    Icon: WhatsAppIcon,
    isLucide: false,
  },
  {
    key: 'viber',
    label: 'Viber',
    display: '+63 955 941 3969',
    href: 'viber://chat?number=%2B639559413969',
    color: '#9B72F5',
    bg: 'rgba(155,114,245,0.08)',
    border: 'rgba(155,114,245,0.28)',
    Icon: ViberIcon,
    isLucide: false,
  },
]

const ContactBar = memo(function ContactBar() {
  return (
    <motion.div
      className="flex flex-col items-center gap-2 w-full max-w-xs"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.4 }}
    >
      <p className="text-[10px] font-semibold tracking-widest uppercase" style={{ color: 'var(--text-muted)', opacity: 0.55 }}>
        Get in touch
      </p>
      <div className="flex flex-col gap-1.5 w-full">
        {CONTACTS.map((c, i) => (
          <motion.a
            key={c.key}
            href={c.href}
            target={c.key === 'email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.75 + i * 0.08, duration: 0.3 }}
            whileHover={{ scale: 1.02, x: 2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl w-full"
            style={{
              background: c.bg,
              border: `1px solid ${c.border}`,
              color: c.color,
              textDecoration: 'none',
            }}
          >
            <span className="flex-shrink-0">
              {c.isLucide
                ? <Mail size={13} strokeWidth={2} />
                : <c.Icon />
              }
            </span>
            <div className="flex flex-col items-start min-w-0">
              <span className="text-[9px] font-semibold tracking-widest uppercase opacity-70 leading-none mb-0.5">
                {c.label}
              </span>
              <span className="text-[11px] font-medium truncate leading-none">
                {c.display}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
})

export default ContactBar
