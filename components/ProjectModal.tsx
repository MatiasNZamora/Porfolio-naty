'use client'

import { useEffect, useState, useCallback } from 'react'

export interface Project {
  id: string
  slug: string
  year: string
  tag: string
  titleEs: string[]
  titleEn: string[]
  italicWord: string
  variant: string
  tagBg: string | null
  visualColor: string | null
  descEs: string
  descEn: string
  tools: string[]
  images: string[]
  webUrl: string | null
  githubUrl: string | null
}

interface Props {
  project: Project
  lang: string
  onClose: () => void
}

export default function ProjectModal({ project, lang, onClose }: Props) {
  const [current, setCurrent]   = useState(0)
  const [expanded, setExpanded] = useState<string | null>(null)
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({})
  const [closing, setClosing]   = useState(false)
  const es = lang === 'es'

  const close = useCallback(() => {
    if (closing) return
    setClosing(true)
    setTimeout(onClose, 260)
  }, [closing, onClose])

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      if (expanded) { setExpanded(null); return }
      close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [expanded, close])

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const total = project.images.length
  const prev  = () => setCurrent(i => (i - 1 + total) % total)
  const next  = () => setCurrent(i => (i + 1) % total)

  // Build title with italic word
  const lines = es ? project.titleEs : project.titleEn
  const titleNodes = lines.map((line, i) => {
    if (line.includes(project.italicWord)) {
      const parts = line.split(project.italicWord)
      return (
        <span key={i}>
          {i > 0 && <br />}
          {parts[0]}
          <em>{project.italicWord}</em>
          {parts[1]}
        </span>
      )
    }
    return <span key={i}>{i > 0 && <br />}{line}</span>
  })

  return (
    <>
      {/* Backdrop — click not closes per spec (only X / Escape) */}
      <div className={`modal-backdrop${closing ? ' closing' : ''}`}>

        <div className="modal-panel" role="dialog" aria-modal="true">

          {/* ── Close ── */}
          <button className="modal-close" onClick={close} aria-label="Cerrar">
            ×
          </button>

          {/* ── Left: Carousel ── */}
          <div className="modal-carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {project.images.map((src, i) => (
                <div
                  key={i}
                  className="carousel-slide"
                  onClick={() => !imgErrors[i] && setExpanded(src)}
                  title={es ? 'Clic para ampliar' : 'Click to expand'}
                >
                  {imgErrors[i] ? (
                    <div className="carousel-placeholder">
                      <span>{project.slug} · {i + 1}</span>
                    </div>
                  ) : (
                    <>
                      <img
                        src={src}
                        alt={`${project.slug} image ${i + 1}`}
                        onError={() => setImgErrors(prev => ({ ...prev, [i]: true }))}
                      />
                      <span className="carousel-zoom-hint">
                        {es ? 'ampliar' : 'expand'} ↗
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Arrows */}
            {total > 1 && (
              <>
                <button className="carousel-arr carousel-arr--prev" onClick={prev} aria-label="Anterior">
                  ←
                </button>
                <button className="carousel-arr carousel-arr--next" onClick={next} aria-label="Siguiente">
                  →
                </button>

                {/* Dots */}
                <div className="carousel-dots" role="tablist">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      role="tab"
                      aria-selected={i === current}
                      className={`carousel-dot${i === current ? ' active' : ''}`}
                      onClick={() => setCurrent(i)}
                      aria-label={`Imagen ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── Right: Info ── */}
          <div className="modal-info">
            <div className="modal-meta-row">
              <span>Project · {project.id}</span>
              <span>{project.year}</span>
            </div>

            <span
              className="tag"
              style={project.tagBg ? { background: project.tagBg } : undefined}
            >
              {project.tag}
            </span>

            <h2 className="modal-title">{titleNodes}</h2>

            <p className="modal-desc">
              {es ? project.descEs : project.descEn}
            </p>

            {/* Tools */}
            <div className="modal-tools">
              <h5>{es ? 'Herramientas' : 'Tools'}</h5>
              <div className="skill-tags">
                {project.tools.map(tool => (
                  <span key={tool} className="skill-tag">{tool}</span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="modal-actions">
              <button
                className="btn primary"
                disabled={!project.webUrl}
                onClick={() => project.webUrl && window.open(project.webUrl, '_blank', 'noopener,noreferrer')}
                title={!project.webUrl ? (es ? 'Sin sitio web disponible' : 'No website available') : undefined}
              >
                {es ? 'Ver sitio' : 'Visit site'} ↗
              </button>

              <button
                className="btn outline"
                disabled={!project.githubUrl}
                onClick={() => project.githubUrl && window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                title={!project.githubUrl ? (es ? 'Sin repositorio disponible' : 'No repository available') : undefined}
              >
                GitHub →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {expanded && (
        <div className="lightbox" onClick={() => setExpanded(null)}>
          <button
            className="lightbox-close"
            onClick={() => setExpanded(null)}
            aria-label="Cerrar imagen"
          >
            ×
          </button>
          <img
            src={expanded}
            className="lightbox-img"
            alt="Imagen ampliada"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
