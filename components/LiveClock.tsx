'use client'

import { useEffect, useState } from 'react'

export default function LiveClock() {
  const [time, setTime] = useState('—')

  useEffect(() => {
    const fmt = () => {
      const t = new Intl.DateTimeFormat('es-AR', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Argentina/Buenos_Aires',
      }).format(new Date())
      setTime(t + ' AR')
    }
    fmt()
    const id = setInterval(fmt, 30_000)
    return () => clearInterval(id)
  }, [])

  return <span className="liveclock">{time}</span>
}
