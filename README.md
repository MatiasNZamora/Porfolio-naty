<div align="center">

<br />

<img src="https://readme-typing-svg.demolab.com?font=Georgia&size=40&pause=1000&color=E0A39B&center=true&vCenter=true&width=600&lines=Nataly+Montiveros;UX%2FUI+%26+Multimedia+Designer;La+Rioja%2C+Argentina" alt="Nataly Montiveros" />

<br />

**Diseño cálido, claro y con intención.**

<br />

[![Portfolio](https://img.shields.io/badge/Portfolio-natymontiveros.com-E0A39B?style=flat-square&labelColor=1F1A1C)](https://natymontiveros.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-nataly--montiveros-E0A39B?style=flat-square&labelColor=1F1A1C&logo=linkedin&logoColor=E0A39B)](https://www.linkedin.com/in/nataly-montiveros-bb29831b6/)
[![Instagram](https://img.shields.io/badge/Instagram-@natymontiveros-E0A39B?style=flat-square&labelColor=1F1A1C&logo=instagram&logoColor=E0A39B)](https://www.instagram.com/natymontiveros/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-contacto-E0A39B?style=flat-square&labelColor=1F1A1C&logo=whatsapp&logoColor=E0A39B)](https://wa.me/5493804349965)

</div>

---

<br />

## &nbsp;Sobre el proyecto

Portfolio personal diseñado y desarrollado desde cero — sin templates, sin componentes de UI externos. Cada decisión, desde la tipografía hasta las micro-interacciones, fue tomada con intención para reflejar mi identidad como diseñadora.

<br />

## &nbsp;Stack

| | Tecnología |
|---|---|
| **Framework** | Next.js 14 — App Router |
| **Lenguaje** | TypeScript |
| **Estilos** | CSS puro · styled-jsx |
| **Tipografías** | Fraunces · DM Sans · JetBrains Mono |
| **Animaciones** | CSS keyframes · Intersection Observer · rAF |
| **Deploy** | Vercel |

<br />

## &nbsp;Features

```
✿  Loading screen animado con presentación del nombre
✿  Cursor personalizado con lerp suave y estado hover
✿  Marquee con flores SVG como separadores
✿  Bento grid de proyectos con modal + carrusel de imágenes
✿  Lightbox para expandir imágenes
✿  Menú hamburguesa con drawer lateral animado
✿  Botones flotantes: Go Top · WhatsApp
✿  Soporte bilingüe ES / EN
✿  Reloj en vivo (UTC −3, La Rioja)
✿  60 fps — sin backdrop-filter en overlays
```

<br />

## &nbsp;Paleta

<div align="center">

| Token | Hex | |
|---|---|---|
| `--ivory` | `#FBF7F4` | ![#FBF7F4](https://placehold.co/14x14/FBF7F4/FBF7F4.png) |
| `--ivory-warm` | `#F4EDE6` | ![#F4EDE6](https://placehold.co/14x14/F4EDE6/F4EDE6.png) |
| `--rose-mist` | `#F7E4E0` | ![#F7E4E0](https://placehold.co/14x14/F7E4E0/F7E4E0.png) |
| `--rose` | `#F0CFC9` | ![#F0CFC9](https://placehold.co/14x14/F0CFC9/F0CFC9.png) |
| `--rose-deep` | `#E0A39B` | ![#E0A39B](https://placehold.co/14x14/E0A39B/E0A39B.png) |
| `--ink` | `#1F1A1C` | ![#1F1A1C](https://placehold.co/14x14/1F1A1C/1F1A1C.png) |
| `--ink-soft` | `#3A3236` | ![#3A3236](https://placehold.co/14x14/3A3236/3A3236.png) |
| `--ash` | `#8A7F7B` | ![#8A7F7B](https://placehold.co/14x14/8A7F7B/8A7F7B.png) |

</div>

<br />

## &nbsp;Estructura

```
nataly-portfolio/
├── app/
│   ├── layout.tsx           # Root layout + metadata
│   └── page.tsx             # Página principal
│
├── components/
│   ├── Loader.tsx            # Pantalla de carga animada
│   ├── Navbar.tsx            # Nav fija + hamburguesa mobile
│   ├── Cursor.tsx            # Cursor personalizado
│   ├── Hero.tsx
│   ├── Marquee.tsx           # Banda con flores SVG
│   ├── About.tsx
│   ├── Work.tsx              # Bento grid de proyectos
│   ├── ProjectModal.tsx      # Modal + carrusel + lightbox
│   ├── Services.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ScrollToTop.tsx       # Botón flotante ↑
│   ├── WhatsAppButton.tsx    # Botón flotante WhatsApp
│   ├── LiveClock.tsx
│   └── RevealObserver.tsx
│
├── data/
│   └── projects.json         # ← editá aquí tus proyectos
│
├── public/
│   ├── projects/{slug}/      # Imágenes de proyectos (WebP recomendado)
│   └── cv/                   # CV en PDF
│
└── styles/
    └── globals.css            # Todos los estilos + tokens
```

<br />

## &nbsp;Inicio rápido

```bash
git clone https://github.com/natymontiveros/portfolio.git
cd portfolio
npm install
npm run dev
# → http://localhost:3000
```

<br />

## &nbsp;Agregar un proyecto

Editá `data/projects.json` y agregá una entrada:

```json
{
  "id": "06",
  "slug": "nombre-proyecto",
  "year": "2026",
  "tag": "UX/UI · Web",
  "titleEs": ["Título", "Proyecto."],
  "titleEn": ["Project", "Title."],
  "italicWord": "Título",
  "variant": "large",
  "descEs": "Descripción en español.",
  "descEn": "Description in English.",
  "tools": ["Figma", "Illustrator"],
  "images": ["/projects/nombre-proyecto/img-1.jpg"],
  "webUrl": "https://...",
  "githubUrl": null
}
```

Las imágenes van en `public/projects/{slug}/`. Se recomienda **WebP** para mejor performance.

**Variantes de card:**

| Variant | Tamaño |
|---|---|
| `large` | 4 columnas × 2 filas — card principal |
| `med sq` | 2 × 2 — mediana neutra |
| `med sq peach` | 2 × 2 — mediana con fondo rosado |
| `wide` | 4 × 1 — ancha oscura |
| `sq` | 2 × 1 — pequeña |

<br />

## &nbsp;Deploy

```bash
npm i -g vercel
vercel
```

O conectá el repositorio directo desde [vercel.com](https://vercel.com) para deploy automático en cada push.

<br />

---

<div align="center">

<br />

Hecho con cariño en La Rioja, Argentina

<br />

*© 2026 Nataly Montiveros*

</div>
# Mi-portafolio
# Mi-portafolio
