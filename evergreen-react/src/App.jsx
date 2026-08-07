import { useEffect, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FloatingActions from './components/FloatingActions'

const BelowFold = lazy(() => import('./components/BelowFold'))
const Footer = lazy(() => import('./components/Footer'))

const REVEAL_SELECTOR = '.reveal, .reveal-left, .reveal-right'

export default function App() {
  // Wire up scroll reveal for all .reveal elements, including ones added
  // later by lazy-loaded chunks.
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll(REVEAL_SELECTOR).forEach(el => obs.observe(el))

    const mutationObs = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType !== 1) return
          if (node.matches(REVEAL_SELECTOR)) obs.observe(node)
          node.querySelectorAll?.(REVEAL_SELECTOR).forEach(el => obs.observe(el))
        })
      }
    })
    mutationObs.observe(document.body, { childList: true, subtree: true })

    return () => { obs.disconnect(); mutationObs.disconnect() }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <BelowFold />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <FloatingActions />
    </>
  )
}
