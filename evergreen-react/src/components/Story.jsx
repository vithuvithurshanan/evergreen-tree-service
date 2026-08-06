import Carousel from './Carousel'
import styles from './Story.module.css'

const storyImages = [
  { src: '/images/carousel/t6.webp', alt: 'Our team at work' },
  { src: '/images/carousel/t7.webp', alt: 'Tree climbing' },
  { src: '/images/carousel/t8.webp', alt: 'After service cleanup' },
  { src: '/images/carousel/t9.webp', alt: 'Healthy landscape' },
]

export default function Story() {
  return (
    <section className={styles.section} id="story">
      <div className={styles.container}>
        <Carousel images={storyImages} />
        <div className={styles.text}>
          <p className={styles.label}>The Story of</p>
          <h2>Evergreen Tree Service</h2>
          <p>
            Evergreen was founded by James Hartley, an ISA Certified Arborist with
            over 20 years of experience in tree care, urban forestry, and
            hazard assessment across southern Ontario.
          </p>
          <p>
            James started Evergreen with a simple belief: that great tree work
            comes from people who genuinely care about trees and the people who
            depend on them. Every member of our crew shares that belief, and it
            shows in the quality of our work.
          </p>
          <p>
            We're proud to be a local, family-run business — one that treats
            your property as if it were our own.
          </p>
        </div>
      </div>
    </section>
  )
}
