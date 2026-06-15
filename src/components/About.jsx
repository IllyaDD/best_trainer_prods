import Reveal from './Reveal'
import { ABOUT, PHOTOS } from '../data/site'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="about">
        <Reveal className="about-photo glass">
          <img src={PHOTOS.about} alt="Роман у залі" />
        </Reveal>

        <Reveal delay={0.1} className="about-body">
          <span className="section-eyebrow">Про мене</span>
          <h2 className="section-title">{ABOUT.title}</h2>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="about-points">
            {ABOUT.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
