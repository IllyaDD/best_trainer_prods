import Reveal from './Reveal'
import { CONTACTS } from '../data/site'

export default function Contact() {
  const tiles = [
    { ico: '📞', lbl: 'Телефон', val: CONTACTS.phone, href: CONTACTS.phoneHref },
    { ico: '✈️', lbl: 'Telegram', val: CONTACTS.telegram, href: CONTACTS.telegramHref },
    { ico: '📸', lbl: 'Instagram', val: CONTACTS.instagram, href: CONTACTS.instagramHref },
  ]

  return (
    <section id="contact" className="section">
      <Reveal className="contact-card glass">
        <span className="section-eyebrow">Контакти</span>
        <h2>Готовий почати?</h2>
        <p>
          Напиши або зателефонуй — підберемо зручний час і складемо план першого
          тренування.
        </p>

        <div className="contact-grid">
          {tiles.map((t) => (
            <a
              key={t.lbl}
              className="contact-tile"
              href={t.href}
              target={t.href.startsWith('http') ? '_blank' : undefined}
              rel={t.href.startsWith('http') ? 'noreferrer' : undefined}
            >
              <span className="ico">{t.ico}</span>
              <span className="lbl">{t.lbl}</span>
              <span className="val">{t.val}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
