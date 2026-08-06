import styles from './Pricing.module.css'

const plans = [
  {
    title: 'Pruning & Trimming',
    icon: '✂️',
    price: '$150',
    suffix: '+HST',
    items: ['Small trees from $150', 'Medium trees from $300', 'Large trees from $500'],
    featured: false,
  },
  {
    title: 'Tree Removal',
    icon: '🪚',
    price: '$400',
    suffix: '+HST',
    items: ['Small trees from $400', 'Medium trees from $700', 'Large trees from $1,200'],
    featured: true,
    badge: 'Most Requested',
  },
  {
    title: 'Stump Grinding',
    icon: '🌱',
    price: '$150',
    suffix: '+HST',
    items: ['Per stump pricing', 'Multi-stump discounts', 'Full clean-up included'],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <p className={`${styles.label} reveal`}>Transparent Pricing</p>
        <h2 className="reveal reveal-delay-1">Simple, Honest Rates</h2>
        <p className={`${styles.subtitle} reveal reveal-delay-2`}>
          No hidden fees. No surprises. All estimates are free and in writing before any work begins.
        </p>

        <div className={styles.grid}>
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={`${styles.card} ${plan.featured ? styles.featured : ''} reveal reveal-delay-${i + 1}`}
            >
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}
              <div className={styles.cardIcon}>{plan.icon}</div>
              <h3>{plan.title}</h3>
              <div className={styles.priceBlock}>
                <span className={styles.from}>Starting at</span>
                <span className={styles.price}>{plan.price}</span>
                <span className={styles.suffix}>{plan.suffix}</span>
              </div>
              <ul>
                {plan.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              <a href="#contact" className={plan.featured ? styles.btnSolid : styles.btnOutline}>
                GET A QUOTE
              </a>
            </div>
          ))}
        </div>

        <p className={`${styles.footnote} reveal`}>
          Prices vary based on tree size, location, and accessibility.{' '}
          <a href="#contact">Contact us</a> for a free on-site assessment.
          Emergency and weekend rates may differ.
        </p>
      </div>
    </section>
  )
}
