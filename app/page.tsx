import { LangProvider } from '@/components/LangProvider'
import Cursor         from '@/components/Cursor'
import RevealObserver from '@/components/RevealObserver'
import ScrollToTop    from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'
import Loader         from '@/components/Loader'
import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import Marquee        from '@/components/Marquee'
import About          from '@/components/About'
import Work           from '@/components/Work'
import Services       from '@/components/Services'
import Skills         from '@/components/Skills'
import Contact        from '@/components/Contact'
import Footer         from '@/components/Footer'

export default function Home() {
  return (
    <LangProvider>
      {/* Loading screen */}
      <Loader />

      {/* Helpers */}
      <Cursor />
      <RevealObserver />
      <ScrollToTop />
      <WhatsAppButton />

      {/* Layout */}
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Work />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </LangProvider>
  )
}
