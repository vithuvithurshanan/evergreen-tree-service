import Carousel from './Carousel'
import styles from './About.module.css'

const aboutImages = [
  { src: '/images/carousel/t1.webp', alt: 'Tree care work' },
  { src: '/images/carousel/t2.webp', alt: 'Pruning in progress' },
  { src: '/images/carousel/t3.webp', alt: 'Stump removal' },
  { src: '/images/carousel/t4.webp', alt: 'Healthy trees' },
  { src: '/images/carousel/t5.webp', alt: 'Aerial work' },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.label}>About</p>
          <h2>Evergreen Tree Service</h2>
          <p>
            Evergreen Tree Service is a certified, locally owned arborist company
            dedicated to the health, safety, and beauty of the trees on your property.
            We believe every tree tells a story — and with the right care, that story
            can last for generations.
          </p>
          <p>
            Our team brings professional expertise and a genuine love of trees to
            every job. Whether it's routine pruning, hazard removal, or emergency
            response, we work carefully, cleanly, and with full respect for your
            property and the natural world around it.
          </p>
          <p>
            We serve residential and commercial clients across the region, offering
            honest assessments, transparent pricing, and work you can count on.
            No upsells, no surprises — just dependable tree care done right.
          </p>
        </div>
        <Carousel images={aboutImages} />
      </div>
    </section>
  )
}
