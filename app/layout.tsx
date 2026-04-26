import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Nataly Montiveros · Portfolio',
  description:
    'Diseñadora UX/UI y Multimedial — La Rioja, Argentina. Diseño cálido, claro y con intención.',
  openGraph: {
    title: 'Nataly Montiveros · Portfolio',
    description:
      'Diseñadora UX/UI y Multimedial — La Rioja, Argentina.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Fraunces:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=JetBrains+Mono:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
