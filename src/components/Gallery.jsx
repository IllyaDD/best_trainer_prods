import Reveal from './Reveal'
import { PHOTOS } from '../data/site'

export default function Gallery() {
  return (
    <section id="gallery" className="section">
      <Reveal className="gallery-head">
        <span className="section-eyebrow">Галерея</span>
        <h2 className="section-title">У залі</h2>
        <p className="section-sub">Робота, прогрес і атмосфера тренувань.</p>
      </Reveal>

      <div className="gallery-grid">
        {PHOTOS.gallery.map((src, i) => (
          <Reveal key={src + i} delay={i * 0.06} className="gallery-item glass">
            <img src={src} alt={`Роман — фото ${i + 1}`} loading="lazy" />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
