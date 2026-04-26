'use client'

import { useEffect, useState } from 'react'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <button
        onClick={scrollTop}
        aria-label="Volver arriba"
        className={`go-top${visible ? ' go-top--show' : ''}`}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <style jsx>{`
        .go-top {
          position: fixed;
          bottom: 36px;
          right: 36px;
          z-index: 100;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(224, 163, 155, 0.5);
          background: var(--rose-mist);
          color: var(--ink);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: none;
          opacity: 0;
          transform: translateY(14px) scale(0.9);
          transition: opacity 0.4s cubic-bezier(0.2, 0.7, 0.3, 1),
                      transform 0.4s cubic-bezier(0.2, 0.7, 0.3, 1),
                      background 0.25s,
                      box-shadow 0.25s;
          pointer-events: none;
        }

        .go-top--show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .go-top:hover {
          background: var(--rose);
          border-color: var(--rose-deep);
          box-shadow: 0 8px 24px rgba(224, 163, 155, 0.35);
          transform: translateY(-3px) scale(1.05);
        }

        @media (max-width: 720px) {
          .go-top {
            bottom: 24px;
            right: 20px;
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </>
  )
}
