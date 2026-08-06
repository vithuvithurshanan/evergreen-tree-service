import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const stats = [
  { value: 20,   suffix: '+', label: 'Years Experience' },
  { value: 1500, suffix: '+', label: 'Trees Serviced' },
  { value: 100,  suffix: '%', label: 'Satisfaction Rate' },
  { value: 24,   suffix: '/7', label: 'Emergency Response' },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        let start = 0
        const duration = 1800
        const step = Math.ceil(value / (duration / 16))
        const timer = setInterval(() => {
          start += step
          if (start >= value) { setCount(value); clearInterval(timer) }
          else setCount(start)
        }, 16)
      }
    }, { threshold: 0.3 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [value])

  return <span ref={ref} className={styles.value}>{count}{suffix}</span>
}

export default function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {stats.map((s, i) => (
          <div key={i} className={`${styles.item} reveal reveal-delay-${i + 1}`}>
            <Counter value={s.value} suffix={s.suffix} />
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
