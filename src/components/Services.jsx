import Reveal from './Reveal'
import { SERVICES } from '../data/site'

export default function Services() {
  return (
    <section id="services" className="section">
      <Reveal className="services-head">
        <span className="section-eyebrow">Що пропоную</span>
        <h2 className="section-title">Напрями тренувань</h2>
        <p className="section-sub">
          Обери ціль — підлаштую програму, навантаження і темп саме під тебе.
        </p>
      </Reveal>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="service-card glass">
            <div className="service-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
