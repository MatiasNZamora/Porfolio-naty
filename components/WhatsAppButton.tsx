'use client'

import { useEffect, useState } from 'react'

const WA_URL = 'https://wa.me/5493804349965'

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className={`wa-btn${visible ? ' wa-btn--show' : ''}`}
      >
        {/* WhatsApp icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.412A9.956 9.956 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.946 7.946 0 0 1-4.078-1.117l-.292-.174-3.053.866.86-3.017-.19-.31A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Zm4.39-5.985c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.014-.374-1.932-1.194-.714-.638-1.196-1.426-1.337-1.666-.14-.24-.015-.37.105-.49.108-.107.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.194-.468-.392-.404-.54-.412l-.46-.008a.882.882 0 0 0-.64.3c-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.617.573.248 1.02.396 1.368.507.575.183 1.098.157 1.512.095.461-.069 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z"/>
        </svg>
      </a>

      <style jsx>{`
        .wa-btn {
          position: fixed;
          bottom: 36px;
          left: 36px;
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
          text-decoration: none;
        }

        .wa-btn--show {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .wa-btn:hover {
          background: var(--rose);
          border-color: var(--rose-deep);
          box-shadow: 0 8px 24px rgba(224, 163, 155, 0.35);
          transform: translateY(-3px) scale(1.05);
        }

        @media (max-width: 720px) {
          .wa-btn {
            bottom: 24px;
            left: 20px;
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
    </>
  )
}
