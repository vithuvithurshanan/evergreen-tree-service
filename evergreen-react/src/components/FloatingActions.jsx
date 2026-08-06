import { useState, useEffect } from 'react'

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <div className="float-actions">
      {showTop && (
        <button className="float-btn float-top" onClick={scrollTop} aria-label="Back to top">
          <span>↑</span>
          <span className="label">Top</span>
        </button>
      )}
      <a
        href="https://wa.me/17164428792"
        className="float-btn float-whats"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <span>💬</span>
        <span className="label">WhatsApp</span>
      </a>
      <a
        href="tel:7164428792"
        className="float-btn float-call"
        aria-label="Call us"
      >
        <span>📞</span>
        <span className="label">Call Now</span>
      </a>
    </div>
  )
}
