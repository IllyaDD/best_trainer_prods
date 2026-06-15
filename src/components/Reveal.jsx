import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

// Поява при скролі через IntersectionObserver + запобіжник:
// якщо observer не спрацював (швидкий скрол / нема підтримки) — за 1.2с
// контент усе одно стає видимим. Контент НІКОЛИ не лишається невидимим.
export default function Reveal({ children, delay = 0, y = 28, className }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fallback = setTimeout(() => setShown(true), 1200)

    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return () => clearTimeout(fallback)
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true)
          io.disconnect()
          clearTimeout(fallback)
        }
      },
      { threshold: 0.15 }
    )
    io.observe(el)
    return () => {
      io.disconnect()
      clearTimeout(fallback)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
