'use client'

import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0
    let raf: number

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`
      }
    }

    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    const addHover = () => document.body.classList.add('cursor-hover')
    const removeHover = () => document.body.classList.remove('cursor-hover')

    document.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    const hoverEls = document.querySelectorAll('a, button, .skill-tag, .svc, .card')
    hoverEls.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      hoverEls.forEach(el => {
        el.removeEventListener('mouseenter', addHover)
        el.removeEventListener('mouseleave', removeHover)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
