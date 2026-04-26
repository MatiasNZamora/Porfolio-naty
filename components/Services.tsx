'use client'

import { useLang } from './LangProvider'

export default function Services() {
  const { lang } = useLang()
  const es = lang === 'es'

  const svcs = [
    {
      titleEs: <>Diseño <em>UX/UI</em></>,
      titleEn: <>UX/UI <em>Design</em></>,
      descEs: 'Apps móviles y sitios web que se sienten naturales de usar. Investigo, prototipo y entrego archivos listos para desarrollo.',
      descEn: 'Mobile apps and websites that feel natural to use. I research, prototype and deliver dev-ready files.',
      items: [
        { es: 'Wireframes',         en: 'Wireframes'      },
        { es: 'Prototipos',         en: 'Prototypes'      },
        { es: 'Sistemas de diseño', en: 'Design systems'  },
        { es: 'Handoff a desarrollo', en: 'Dev handoff'   },
      ],
    },
    {
      titleEs: <>Identidad <em>visual</em></>,
      titleEn: <>Visual <em>identity</em></>,
      descEs: 'Logos, paletas y sistemas que tu marca pueda usar por años. Pensado para escalar de la tarjeta de presentación al feed de Instagram.',
      descEn: 'Logos, palettes and systems your brand can use for years. Built to scale from a business card to your Instagram feed.',
      items: [
        { es: 'Logo y variantes',  en: 'Logo & variants'   },
        { es: 'Manual de marca',   en: 'Brand guidelines'  },
        { es: 'Tipografía y color',en: 'Type & color'      },
        { es: 'Aplicaciones',      en: 'Applications'      },
      ],
    },
    {
      titleEs: <>Contenido <em>digital</em></>,
      titleEn: <>Digital <em>content</em></>,
      descEs: 'Piezas para Instagram, campañas de marketing y plantillas de community management que mantienen tu marca consistente.',
      descEn: 'Instagram pieces, marketing campaigns and community templates that keep your brand consistent.',
      items: [
        { es: 'Posts y reels',         en: 'Posts & reels'       },
        { es: 'Plantillas editables',  en: 'Editable templates'  },
        { es: 'Calendario editorial',  en: 'Content calendar'    },
        { es: 'Campañas pagas',        en: 'Paid campaigns'      },
      ],
    },
  ]

  return (
    <section id="services" className="rev">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">03 / {es ? 'Servicios' : 'Services'}</div>
            <h2>
              {es ? <>Lo que <em>hago</em> por vos</> : <>What I <em>do</em> for you</>}
            </h2>
          </div>
          <div className="desc">
            {es
              ? 'Trabajo con vos desde la estrategia hasta la entrega. Tres áreas conectadas que pueden tomarse por separado o como un paquete completo.'
              : 'I work with you from strategy to delivery. Three connected areas you can take separately or as a full package.'}
          </div>
        </div>

        <div className="services">
          {svcs.map((s, i) => (
            <div key={i} className="svc">
              <div className="ico" />
              <h3>{es ? s.titleEs : s.titleEn}</h3>
              <p>{es ? s.descEs : s.descEn}</p>
              <ul>
                {s.items.map((item, j) => (
                  <li key={j}>
                    <span>{es ? item.es : item.en}</span>
                    <span>0{j + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
