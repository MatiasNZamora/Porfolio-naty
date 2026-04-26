'use client'

import { useLang } from './LangProvider'

export default function About() {
  const { lang } = useLang()
  const es = lang === 'es'

  return (
    <section id="about" className="rev">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">
              01 / {es ? 'Sobre mí' : 'About'}
            </div>
            <h2>
              {es ? (
                <>Curiosa, <em>detallista</em>, siempre aprendiendo.</>
              ) : (
                <>Curious, <em>detail-driven</em>, always learning.</>
              )}
            </h2>
          </div>
          <div className="desc">
            {es
              ? 'Estudiante avanzada de Diseño y Producción Multimedial — UNLaR. Tres años explorando la intersección entre estrategia, estética y experiencia.'
              : "Senior student at UNLaR's Multimedia Design program. Three years exploring the intersection of strategy, aesthetics and experience."}
          </div>
        </div>

        <div className="about-grid">
          <div className="photo-frame">
            <div className="ph">retrato · 4:5</div>
          </div>

          <div className="about-text">
            {es ? (
              <>
                <p>
                  Tengo 28 años, vivo en{' '}
                  <strong>La Rioja, Argentina</strong>, y curso el tercer año de
                  la Licenciatura en Diseño y Producción Multimedial en la UNLaR.
                  Empecé este camino porque me fascina cómo las decisiones
                  visuales — un color, una tipografía, un microcopy — pueden
                  cambiar por completo la forma en que alguien se relaciona con
                  un producto.
                </p>
                <p>
                  Trabajo con marcas y emprendimientos diseñando interfaces para
                  apps y sitios, identidades visuales y piezas para redes.
                  Complemento la facultad con cursos de{' '}
                  <strong>
                    Marketing Digital, Community Management y UX/UI
                  </strong>{' '}
                  — me gusta entender el negocio, no solo dibujar pantallas.
                </p>
              </>
            ) : (
              <>
                <p>
                  I&apos;m 28, based in{' '}
                  <strong>La Rioja, Argentina</strong>, in my third year of the
                  Multimedia Design BA at UNLaR. I started this path because
                  I&apos;m fascinated by how visual decisions — a color, a
                  typeface, a microcopy — can completely change how someone
                  relates to a product.
                </p>
                <p>
                  I work with brands and small teams designing app and web
                  interfaces, visual identities, and social pieces. I complement
                  university with courses in{' '}
                  <strong>
                    Digital Marketing, Community Management and UX/UI
                  </strong>{' '}
                  — I like understanding the business, not just drawing screens.
                </p>
              </>
            )}

            <div className="pull">
              {es
                ? '"Diseñar es pensar en voz alta — y después editar hasta que quede simple."'
                : '"Design is thinking out loud — and then editing until it feels simple."'}
            </div>

            <div className="quick">
              <div className="item">
                <h5>{es ? 'Edad' : 'Age'}</h5>
                <p>28</p>
              </div>
              <div className="item">
                <h5>{es ? 'Universidad' : 'University'}</h5>
                <p>UNLaR · 3° {es ? 'año' : 'year'}</p>
              </div>
              <div className="item">
                <h5>{es ? 'Carrera' : 'Degree'}</h5>
                <p>{es ? 'Lic. Diseño y Producción Multimedial' : 'BA Multimedia Design'}</p>
              </div>
              <div className="item">
                <h5>{es ? 'Idiomas' : 'Languages'}</h5>
                <p>{es ? 'Español · Inglés básico' : 'Spanish · Basic English'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
