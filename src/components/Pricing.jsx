import Reveal from './Reveal'
import { PRICING } from '../data/site'

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <Reveal className="pricing-head">
        <span className="section-eyebrow">Ціни</span>
        <h2 className="section-title">Вартість тренувань</h2>
        <p className="section-sub">
          Прозорі ціни без прихованих платежів. Обери формат, що підходить тобі.
        </p>
      </Reveal>

      <div className="pricing-grid">
        {PRICING.map((p, i) => (
          <Reveal
            key={p.name}
            delay={i * 0.1}
            className={`price-card glass${p.featured ? ' featured' : ''}`}
          >
            {p.featured && <span className="price-tag">Популярне</span>}
            <h3>{p.name}</h3>
            <div className="price-amount">
              <b>{p.price}</b>
              <span>{p.unit}</span>
            </div>
            <ul className="price-perks">
              {p.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <a
              href="#contact"
              className={`btn ${p.featured ? 'btn-primary' : 'btn-ghost'}`}
            >
              Записатися
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
