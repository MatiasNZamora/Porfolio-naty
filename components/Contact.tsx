'use client'

import { useLang } from './LangProvider'

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.412A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.946 7.946 0 0 1-4.078-1.117l-.292-.174-3.053.866.86-3.017-.19-.31A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Zm4.39-5.985c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.014-.374-1.932-1.194-.714-.638-1.196-1.426-1.337-1.666-.14-.24-.015-.37.105-.49.108-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.194-.468-.392-.404-.54-.412l-.46-.008a.882.882 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.617.573.248 1.02.396 1.368.507.575.183 1.098.157 1.512.095.461-.069 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <polyline points="2,4 12,13 22,4"/>
  </svg>
)

const contactLinks = [
  { label: 'Instagram', handle: '@NATYMONTIVEROS',       href: 'https://www.instagram.com/natymontiveros/',                    Icon: InstagramIcon },
  { label: 'LinkedIn',  handle: '/IN/NATALY-MONTIVEROS', href: 'https://www.linkedin.com/in/nataly-montiveros-bb29831b6/',     Icon: LinkedInIcon  },
  { label: 'WhatsApp',  handle: '+54 9 380 434 9965',    href: 'https://wa.me/5493804349965',                                  Icon: WhatsAppIcon  },
  { label: 'Email',     handle: 'HELLO@NATYMONTIVEROS',  href: 'mailto:hello@natymontiveros.com',                              Icon: EmailIcon     },
]

export default function Contact() {
  const { lang } = useLang()
  const es = lang === 'es'

  return (
    <section id="contact" className="rev">
      <div className="wrap">
        <div className="cta">
          <div className="inner-cta">
            <div>
              <div className="sec-num" style={{ color: 'rgba(255,255,255,0.6)' }}>
                05 / {es ? 'Contacto' : 'Contact'}
              </div>
              <h2 style={{ marginTop: '18px' }}>
                {es ? (
                  <>¿Tenés una <em>idea</em>?<br />Charlemos.</>
                ) : (
                  <>Got an <em>idea</em>?<br />Let&apos;s talk.</>
                )}
              </h2>
              <p
                style={{
                  marginTop: '28px',
                  color: 'rgba(255,255,255,0.7)',
                  maxWidth: '46ch',
                  fontSize: '15px',
                }}
              >
                {es
                  ? 'Respondo en menos de 24 horas. Cuéntame sobre tu proyecto, tu marca o lo que estés pensando — incluso si todavía es difuso.'
                  : "I reply within 24 hours. Tell me about your project, your brand or whatever you're thinking — even if it's still fuzzy."}
              </p>

              <div className="cta-buttons">
                <a className="btn primary" href="mailto:hello@natymontiveros.com">
                  {es ? 'Enviar email' : 'Send email'} ↗
                </a>
                <a className="btn ghost" href="/cv/nataly-montiveros-cv.pdf" download>
                  {es ? 'Descargar CV' : 'Download CV'}
                </a>
              </div>
            </div>

            <div className="links">
              {contactLinks.map(({ label, handle, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link__label">
                    <Icon />
                    {label}
                  </span>
                  <span>{handle}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
