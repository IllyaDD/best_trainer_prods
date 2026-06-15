import { motion } from 'framer-motion'
import { TRAINER, PHOTOS } from '../data/site'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="hero-badge">Веду набір на тренування</span>
        <h1>
          Тренуйся з <span className="grad">{TRAINER.nameInstr}</span>
        </h1>
        <p className="hero-role">{TRAINER.role}</p>
        <p className="hero-tagline">{TRAINER.tagline}</p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Записатися на тренування
          </a>
          <a href="#pricing" className="btn btn-ghost">
            Переглянути ціни
          </a>
        </div>

        <div className="hero-stats">
          {TRAINER.stats.map((s) => (
            <div key={s.label} className="hero-stat glass">
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hero-photo glass"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        <img src={PHOTOS.hero} alt={`${TRAINER.name} — ${TRAINER.role}`} />
      </motion.div>
    </header>
  )
}
