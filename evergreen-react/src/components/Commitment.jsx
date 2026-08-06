import styles from './Commitment.module.css'

const items = [
  { title: 'Free, transparent quotes',    desc: 'No surprises, ever.' },
  { title: 'Certified expertise',         desc: 'ISA Certified Arborists on every job.' },
  { title: 'Full cleanup',               desc: 'We leave your property spotless.' },
  { title: 'Respect for your property',  desc: 'We protect driveways, gardens, and structures throughout all work.' },
  { title: 'Honest recommendations',     desc: 'We only suggest work your trees actually need.' },
  { title: 'Safety first',              desc: 'All crew members are trained, insured, and follow industry best practices.' },
  { title: 'On-time arrival',           desc: 'We respect your schedule and communicate clearly if anything changes.' },
  { title: 'Environmental care',        desc: 'We recycle wood chips and debris where possible.' },
]

export default function Commitment() {
  return (
    <section className={styles.section} id="commitment">
      <div className={styles.container}>
        <h2>Our Commitment to You</h2>
        <ul className={styles.list}>
          {items.map(item => (
            <li key={item.title} className={styles.item}>
              <strong>{item.title}</strong> — {item.desc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
