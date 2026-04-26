'use client'

import LiveClock from './LiveClock'
import { useLang } from './LangProvider'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer>
      <div className="wrap inner-footer">
        <span>© 2026 Nataly Montiveros — La Rioja, AR</span>
        <LiveClock />
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '7px' }}>
          Made with cariño
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" style={{ color: 'var(--rose-deep)', flexShrink: 0 }}>
            <g transform="translate(10,10)">
              <ellipse cx="0" cy="-4.2" rx="2"  ry="3.7" transform="rotate(0)"   />
              <ellipse cx="0" cy="-4.2" rx="2"  ry="3.7" transform="rotate(72)"  />
              <ellipse cx="0" cy="-4.2" rx="2"  ry="3.7" transform="rotate(144)" />
              <ellipse cx="0" cy="-4.2" rx="2"  ry="3.7" transform="rotate(216)" />
              <ellipse cx="0" cy="-4.2" rx="2"  ry="3.7" transform="rotate(288)" />
              <circle cx="0" cy="0" r="2.2" fill="var(--rose-mist)" />
            </g>
          </svg>
        </span>
      </div>
    </footer>
  )
}
