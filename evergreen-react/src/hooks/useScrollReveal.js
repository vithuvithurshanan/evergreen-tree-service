import { useEffect, useRef } from 'react'

export default function useScrollReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('revealed')
        obs.unobserve(el)
      }
    }, { threshold: 0.12, ...options })

    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return ref
}
