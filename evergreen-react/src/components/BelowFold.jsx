import Stats from './Stats'
import About from './About'
import Services from './Services'
import WaveDivider from './WaveDivider'
import Testimonials from './Testimonials'
import Location from './Location'
import FAQ from './FAQ'
import Story from './Story'
import Contact from './Contact'

export default function BelowFold() {
  return (
    <>
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
    </>
  )
}
