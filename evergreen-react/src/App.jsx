import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import WaveDivider from './components/WaveDivider'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import FAQ from './components/FAQ'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'

export default function App() {
  // Wire up scroll reveal for all .reveal elements
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    const attach = () => {
      document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
        .forEach(el => obs.observe(el))
    }

    attach()
    // Re-attach after short delay for dynamically rendered cards
    const t = setTimeout(attach, 400)
    return () => { obs.disconnect(); clearTimeout(t) }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />

        <WaveDivider topColor="#2d4a2e" bottomColor="#ffffff" />
        <About />

        <WaveDivider topColor="#ffffff" bottomColor="#f5f0e8" />
        <Services />

        <WaveDivider topColor="#f5f0e8" bottomColor="#2d4a2e" />
        <WaveDivider topColor="#2d4a2e" bottomColor="#ffffff" />
        <Testimonials />

        <WaveDivider topColor="#ffffff" bottomColor="#f5f0e8" />
        <Location />

        <WaveDivider topColor="#f5f0e8" bottomColor="#ffffff" />
        <FAQ />

        <WaveDivider topColor="#ffffff" bottomColor="#f5f0e8" />
        <Story />

        <WaveDivider topColor="#f5f0e8" bottomColor="#ede5d5" />

        <WaveDivider topColor="#ede5d5" bottomColor="#f5f0e8" />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
