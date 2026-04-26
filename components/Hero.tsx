'use client'

import LiveClock from './LiveClock'
import { useLang } from './LangProvider'

export default function Hero() {
  const { lang } = useLang()

  return (
    <header className="hero">
      <div className="blob b1" />
      <div className="blob b2" />
      <div className="wrap">
        <div className="label">
          {lang === 'es'
            ? 'Diseñadora Multimedial · La Rioja, AR'
            : 'Multimedia Designer · La Rioja, AR'}
        </div>

        <h1>
          {lang === 'es' ? (
            <>
              Diseño <em>cálido</em>, claro y con <em>intención</em>.
            </>
          ) : (
            <>
              Design that&apos;s <em>warm</em>, clear, and made with{' '}
              <em>intention</em>.
            </>
          )}
        </h1>

        <div className="meta">
          <p>
            {lang === 'es'
              ? 'Soy Nataly, diseñadora UX/UI y multimedial. Acompaño a marcas y emprendimientos a construir productos digitales con identidad propia — desde la primera idea hasta el último píxel.'
              : "I'm Nataly, a UX/UI and multimedia designer. I help brands and small teams shape digital products with character — from the first sketch to the final pixel."}
          </p>

          <div className="col">
            <h4>{lang === 'es' ? 'Disponibilidad' : 'Availability'}</h4>
            <p>
              {lang === 'es' ? (
                <>Aceptando proyectos<br />Mayo · 2026</>
              ) : (
                <>Accepting projects<br />May · 2026</>
              )}
            </p>
          </div>

          <div className="col">
            <h4>{lang === 'es' ? 'Basada en' : 'Based in'}</h4>
            <p>
              La Rioja, Argentina<br />
              UTC −3 · <LiveClock />
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
