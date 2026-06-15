import { useState } from 'react'

const LINKS = [
  { href: '#about', label: 'Про мене' },
  { href: '#services', label: 'Послуги' },
  { href: '#pricing', label: 'Ціни' },
  { href: '#contact', label: 'Контакти' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav glass">
      <a href="#top" className="nav-logo">
        Roman<span>.</span>
      </a>

      <ul className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="btn btn-primary">
        Записатися
      </a>

      <button
        className="nav-burger"
        aria-label="Меню"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? '✕' : '☰'}
      </button>
    </nav>
  )
}
