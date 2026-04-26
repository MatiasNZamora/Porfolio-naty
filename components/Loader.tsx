'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'gone'>('in')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    // nombre termina de animarse → hold
    const t1 = setTimeout(() => setPhase('hold'), 1000)
    // empieza salida
    const t2 = setTimeout(() => setPhase('out'),  3400)
    // desmonta y libera scroll
    const t3 = setTimeout(() => {
      setPhase('gone')
      document.body.style.overflow = ''
    }, 4400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
      document.body.style.overflow = ''
    }
  }, [])

  if (phase === 'gone') return null

  return (
    <>
      <div className={`loader loader--${phase}`} aria-hidden="true">

        {/* Panel que sube al salir */}
        <div className="loader__panel">

          {/* Blob decorativo */}
          <div className="loader__blob" />

          <div className="loader__text">
            <span className="loader__first">Nataly</span>
            <span className="loader__last">Montiveros</span>
          </div>

          {/* Línea de progreso */}
          <div className="loader__bar">
            <div className={`loader__fill loader__fill--${phase}`} />
          </div>

        </div>

      </div>

      <style jsx>{`
        /* ── Overlay ── */
        .loader {
          position: fixed;
          inset: 0;
          z-index: 9990;
          pointer-events: all;
        }

        /* ── Panel ── */
        .loader__panel {
          position: absolute;
          inset: 0;
          background: var(--ivory);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          transform: translateY(0);
          transition: transform 0.9s cubic-bezier(0.76, 0, 0.24, 1);
        }

        .loader--out .loader__panel {
          transform: translateY(-100%);
        }

        /* ── Blob ── */
        .loader__blob {
          position: absolute;
          width: 560px;
          height: 560px;
          border-radius: 50%;
          background: var(--rose);
          filter: blur(80px);
          opacity: 0.55;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1);   }
          50%       { transform: translate(-50%, -50%) scale(1.08); }
        }

        /* ── Texto ── */
        .loader__text {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          gap: 4px;
        }

        .loader__first,
        .loader__last {
          display: block;
          font-family: 'Fraunces', serif;
          font-weight: 300;
          letter-spacing: -0.025em;
          line-height: 1;
          opacity: 0;
          transform: translateY(40px);
        }

        .loader__first {
          font-size: clamp(64px, 14vw, 140px);
          font-style: italic;
          color: var(--ink);
          animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.3, 1) 0.1s forwards;
        }

        .loader__last {
          font-size: clamp(28px, 6vw, 58px);
          font-style: normal;
          color: var(--rose-deep);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.3, 1) 0.35s forwards;
        }

        @keyframes rise {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ── Barra de progreso ── */
        .loader__bar {
          position: relative;
          z-index: 1;
          width: clamp(160px, 28vw, 280px);
          height: 1px;
          background: var(--line);
          border-radius: 99px;
          overflow: hidden;
        }

        .loader__fill {
          height: 100%;
          background: var(--rose-deep);
          border-radius: 99px;
          width: 0%;
          transition: width 1.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .loader__fill--hold,
        .loader__fill--out {
          width: 100%;
        }
      `}</style>
    </>
  )
}
