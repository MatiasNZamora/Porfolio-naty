'use client'

import { useEffect, useState } from 'react'
import { useLang } from './LangProvider'

const links = {
  es: [
    { href: '#about',    label: 'Sobre mí'  },
    { href: '#work',     label: 'Proyectos' },
    { href: '#services', label: 'Servicios' },
    { href: '#skills',   label: 'Skills'    },
    { href: '#contact',  label: 'Contacto'  },
  ],
  en: [
    { href: '#about',    label: 'About'    },
    { href: '#work',     label: 'Work'     },
    { href: '#services', label: 'Services' },
    { href: '#skills',   label: 'Skills'   },
    { href: '#contact',  label: 'Contact'  },
  ],
}

export default function Navbar() {
  const { lang, setLang } = useLang()
  const [open, setOpen] = useState(false)

  // Escape key + scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className="top">
        <div className="wrap inner">
          <div className="brand">
            <span className="dot" />
            <span>Nataly Montiveros</span>
          </div>

          {/* Desktop links */}
          <div className="nav-links">
            {links[lang].map(l => (
              <a key={l.href} href={l.href}>{l.label}</a>
            ))}
          </div>

          <div className="nav-right">
            {/* Language switcher */}
            <div className="lang">
              <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className={`hamburger${open ? ' hamburger--open' : ''}`}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`mob-backdrop${open ? ' mob-backdrop--show' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className={`mob-menu${open ? ' mob-menu--open' : ''}`} aria-hidden={!open}>
        {/* Header del drawer */}
        <div className="mob-menu__head">
          <div className="brand">
            <span className="dot" />
            <span>Nataly Montiveros</span>
          </div>
          <button className="mob-menu__close" onClick={close} aria-label="Cerrar menú">×</button>
        </div>

        {/* Links */}
        <nav className="mob-menu__links">
          {links[lang].map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="mob-menu__link"
              style={{ transitionDelay: open ? `${i * 55 + 80}ms` : '0ms' }}
            >
              <span className="mob-menu__num">0{i + 1}</span>
              {l.label}
              <span className="mob-menu__arrow">↗</span>
            </a>
          ))}
        </nav>

        {/* Footer del drawer */}
        <div className="mob-menu__foot">
          <div className="lang">
            <button className={lang === 'es' ? 'active' : ''} onClick={() => { setLang('es'); close() }}>ES</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => { setLang('en'); close() }}>EN</button>
          </div>
          <span className="mob-menu__tagline">
            {lang === 'es' ? 'Diseñadora UX/UI · La Rioja' : 'UX/UI Designer · La Rioja'}
          </span>
        </div>
      </div>
    </>
  )
}
