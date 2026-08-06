import styles from './Services.module.css'

const services = [
  { icon: '🌳', title: 'Tree Pruning & Trimming', desc: 'Shape, thin, and maintain your trees for health, safety, and curb appeal.' },
  { icon: '🪚', title: 'Tree Removal',            desc: 'Safe, efficient removal of hazardous, dead, or unwanted trees of any size.' },
  { icon: '🌱', title: 'Stump Grinding',          desc: 'Clean stump removal down to below grade — no trace left behind.' },
  { icon: '⚡', title: 'Emergency Service',        desc: 'Storm damage response and hazard mitigation available 7 days a week.' },
  { icon: '🔍', title: 'Tree Health Assessment',  desc: 'Certified arborist inspections, disease diagnosis, and treatment plans.' },
  { icon: '🏡', title: 'Lot Clearing',            desc: 'Full-property clearing for new builds, landscaping projects, or land prep.' },
]

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        <p className={`${styles.label} reveal`}>What We Do</p>
        <h2 className="reveal reveal-delay-1">Our Services</h2>
        <p className={`${styles.subtitle} reveal reveal-delay-2`}>
          Professional tree care for every need — from routine maintenance to
          complex removals. We bring the right equipment, skills, and care to every job.
        </p>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <div key={s.title} className={`${styles.card} reveal reveal-delay-${(i % 3) + 1}`}>
              <span className={styles.icon}>{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a href="#contact" className={styles.cardLink}>Get a Quote →</a>
            </div>
          ))}
        </div>

        <div className={`${styles.note} reveal`}>
          <span className={styles.noteIcon}>💡</span>
          <div>
            <strong>Free, No-Obligation Quotes</strong>
            <p>A certified arborist will assess your property and provide a detailed written estimate before any work begins. We never start without your approval.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
