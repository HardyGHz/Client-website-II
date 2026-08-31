import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Services from './components/Services'
import FrameFit from './components/FrameFit'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Visit from './components/Visit'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileDock from './components/MobileDock'

export default function App() {
  return (
    <>
      <div aria-hidden className="grain pointer-events-none fixed inset-0 z-[70] opacity-[0.035] mix-blend-multiply" />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <FrameFit />
        <Gallery />
        <Testimonials />
        <Visit />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </>
  )
}
