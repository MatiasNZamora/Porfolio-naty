'use client'

import { useState } from 'react'
import { useLang } from './LangProvider'
import ProjectModal, { type Project } from './ProjectModal'
import projectsData from '../data/projects.json'

const projects = projectsData as Project[]

function renderTitle(
  titleEs: string[],
  titleEn: string[],
  italicWord: string,
  lang: string
) {
  const lines = lang === 'es' ? titleEs : titleEn
  return lines.map((line, i) => {
    if (line.startsWith(italicWord)) {
      const rest = line.slice(italicWord.length)
      return (
        <span key={i}>
          {i > 0 && <br />}
          <em>{italicWord}</em>
          {rest}
        </span>
      )
    }
    return (
      <span key={i}>
        {i > 0 && <br />}
        {line}
      </span>
    )
  })
}

export default function Work() {
  const { lang } = useLang()
  const es = lang === 'es'
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <section
        id="work"
        className="rev"
        style={{ background: 'var(--ivory-warm)' }}
      >
        <div className="wrap">
          <div className="sec-head">
            <div>
              <div className="sec-num">
                02 / {es ? 'Proyectos' : 'Selected work'}
              </div>
              <h2>
                {es ? (
                  <>Trabajos <em>seleccionados</em></>
                ) : (
                  <>Selected <em>projects</em></>
                )}
              </h2>
            </div>
            <div className="desc">
              {es
                ? 'Una muestra reciente de productos digitales, identidades y experiencias que diseñé para clientes y proyectos académicos.'
                : 'A recent slice of digital products, identities and experiences for clients and academic projects.'}
            </div>
          </div>

          <div className="bento">
            {projects.map(p => (
              <button
                key={p.id}
                className={`card ${p.variant}`}
                onClick={() => setSelected(p)}
                aria-label={`Ver proyecto ${p.titleEs.join(' ')}`}
              >
                <div className="body">
                  <div className="meta">
                    <span>Project · {p.id}</span>
                    <span>{p.year}</span>
                  </div>
                  <div>
                    <span
                      className="tag"
                      style={p.tagBg ? { background: p.tagBg } : undefined}
                    >
                      {p.tag}
                    </span>
                    <h3>
                      {renderTitle(p.titleEs, p.titleEn, p.italicWord, lang)}
                    </h3>
                  </div>
                </div>
                <div
                  className="visual"
                  style={p.visualColor ? { background: p.visualColor } : undefined}
                />
                <div className="arrow">↗</div>
              </button>
            ))}

            {/* See all row */}
            <a className="card full" href="#">
              <h3>
                {es ? '+ Ver todos los proyectos' : '+ See all projects'}
              </h3>
              <span className="more">
                {projects.length} / 12 →
              </span>
            </a>
          </div>
        </div>
      </section>

      {selected && (
        <ProjectModal
          project={selected}
          lang={lang}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  )
}
