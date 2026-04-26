'use client'

import { useLang } from './LangProvider'

const designTools = ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign', 'Canva Pro']

const uxSkills = {
  es: ['Wireframing', 'User research', 'Sistemas de diseño', 'Mapas de flujo', 'Tests de usabilidad'],
  en: ['Wireframing', 'User research', 'Design systems', 'User flows', 'Usability tests'],
}

const marketingSkills = {
  es: ['Meta Ads', 'Google Ads', 'Mailchimp', 'Notion', 'Community management', 'Calendario editorial'],
  en: ['Meta Ads', 'Google Ads', 'Mailchimp', 'Notion', 'Community management', 'Content calendar'],
}

const softSkills = {
  es: ['Comunicación clara', 'Trabajo en equipo', 'Atención al detalle', 'Pensamiento crítico', 'Curiosidad'],
  en: ['Clear communication', 'Teamwork', 'Attention to detail', 'Critical thinking', 'Curiosity'],
}

function Tags({ items }: { items: string[] }) {
  return (
    <div className="skill-tags">
      {items.map(tag => (
        <span key={tag} className="skill-tag">{tag}</span>
      ))}
    </div>
  )
}

export default function Skills() {
  const { lang } = useLang()
  const es = lang === 'es'

  return (
    <section id="skills" className="rev" style={{ background: 'var(--ivory-warm)' }}>
      <div className="wrap">
        <div className="sec-head">
          <div>
            <div className="sec-num">04 / Skills</div>
            <h2>
              {es ? <>Herramientas <em>&amp;</em> oficios</> : <>Tools <em>&amp;</em> craft</>}
            </h2>
          </div>
          <div className="desc">
            {es
              ? 'Un mix de software y disciplinas que vengo afilando entre la facultad, los cursos y los proyectos reales.'
              : "A mix of software and disciplines I've been sharpening between university, courses and real client work."}
          </div>
        </div>

        <div className="skills">
          {/* Left: stats */}
          <div>
            <div className="skill-cat">
              <h4>{es ? 'Años en diseño' : 'Years designing'}</h4>
              <p className="stat-num">
                04<sup>+</sup>
              </p>
            </div>
            <div className="skill-cat">
              <h4>{es ? 'Proyectos entregados' : 'Projects shipped'}</h4>
              <p className="stat-num small">
                20<sup>+</sup>
              </p>
            </div>
          </div>

          {/* Right: tags */}
          <div>
            <div className="skill-cat">
              <h4>{es ? 'Diseño & prototipado' : 'Design & prototyping'}</h4>
              <Tags items={designTools} />
            </div>
            <div className="skill-cat">
              <h4>{es ? 'UX & estrategia' : 'UX & strategy'}</h4>
              <Tags items={es ? uxSkills.es : uxSkills.en} />
            </div>
            <div className="skill-cat">
              <h4>{es ? 'Marketing & redes' : 'Marketing & social'}</h4>
              <Tags items={es ? marketingSkills.es : marketingSkills.en} />
            </div>
            <div className="skill-cat">
              <h4>Soft skills</h4>
              <Tags items={es ? softSkills.es : softSkills.en} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
