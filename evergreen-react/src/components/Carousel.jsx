import { useState, useEffect, useCallback } from 'react'
import styles from './Carousel.module.css'

// Placeholder slides — replace src values with real image paths
const placeholders = [
  { bg: '#4a7c4e' },
  { bg: '#2d4a2e' },
  { bg: '#7aab6e' },
  { bg: '#5a8f5e' },
  { bg: '#3d6640' },
]

export default function Carousel({ images }) {
  const slides = images && images.length ? images : placeholders
  const [current, setCurrent] = useState(0)

  const next = useCallback(() =>
    setCurrent(c => (c + 1) % slides.length), [slides.length])

  const goTo = (i) => setCurrent(i)

  useEffect(() => {
    const t = setInterval(next, 4000)
    return () => clearInterval(t)
  }, [next])

  // Touch swipe
  let startX = 0
  const onTouchStart = (e) => { startX = e.touches[0].clientX }
  const onTouchEnd  = (e) => {
    const diff = startX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) setCurrent(c =>
      diff > 0 ? (c + 1) % slides.length : (c - 1 + slides.length) % slides.length
    )
  }

  return (
    <div className={styles.carousel} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      <div
        className={styles.track}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) =>
          slide.src ? (
            <img key={i} src={slide.src} alt={slide.alt || `Slide ${i + 1}`} className={styles.slide} />
          ) : (
            <div key={i} className={styles.slide} style={{ background: slide.bg }} />
          )
        )}
      </div>

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
