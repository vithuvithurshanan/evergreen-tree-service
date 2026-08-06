import { useState } from 'react'
import styles from './Testimonials.module.css'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Buffalo, NY',
    stars: 5,
    text: 'Evergreen removed a massive oak that was dangerously close to our house. Professional, fast, and left the yard cleaner than they found it. Highly recommend!',
  },
  {
    name: 'James T.',
    location: 'Amherst, NY',
    stars: 5,
    text: 'Called them after a storm knocked a tree onto our fence. They responded within 2 hours and handled everything. Fair price, great work.',
  },
  {
    name: 'Linda R.',
    location: 'Cheektowaga, NY',
    stars: 5,
    text: 'Had three stumps ground down and the whole thing was done in under an hour. The crew was friendly and the cleanup was spotless.',
  },
  {
    name: 'David K.',
    location: 'Tonawanda, NY',
    stars: 5,
    text: 'Very knowledgeable team. They assessed our trees and were honest — only recommended the work that was actually needed. Rare to find that.',
  },
  {
    name: 'Maria S.',
    location: 'Lancaster, NY',
    stars: 5,
    text: 'Beautiful pruning job on our old maple. It looks healthier than ever. James clearly loves what he does and it shows in the work.',
  },
]

function Stars({ count }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = reviews.length

  const prev = () => setCurrent(c => (c - 1 + total) % total)
  const next = () => setCurrent(c => (c + 1) % total)

  const visible = [
    reviews[(current) % total],
    reviews[(current + 1) % total],
    reviews[(current + 2) % total],
  ]

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <p className={styles.label}>What Clients Say</p>
        <h2>Real Reviews from Real Neighbours</h2>

        <div className={styles.track}>
          {visible.map((r, i) => (
            <div key={`${r.name}-${i}`} className={`${styles.card} reveal reveal-delay-${i + 1}`}>
              <Stars count={r.stars} />
              <p className={styles.text}>"{r.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <span>{r.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button onClick={prev} aria-label="Previous review">←</button>
          <div className={styles.dots}>
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.active : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next review">→</button>
        </div>
      </div>
    </section>
  )
}
