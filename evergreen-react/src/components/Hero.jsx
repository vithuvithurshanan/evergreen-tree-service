import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <picture>
        <source srcSet="/images/hero.avif" type="image/avif" />
        <img
          src="/images/hero.webp"
          alt=""
          className={styles.heroBg}
          fetchPriority="high"
          loading="eager"
        />
      </picture>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.badge}>🏆 ISA Certified Arborists</div>
        <picture>
          <source srcSet="/images/logo.avif" type="image/avif" />
          <img
            src="/images/logo.webp"
            alt="Evergreen Tree Service"
            className={styles.heroLogo}
            width="376"
            height="210"
            fetchPriority="high"
          />
        </picture>
        <p className={styles.tagline}>Where expert care meets the trees you love.</p>
        <div className={styles.actions}>
          <a href="#contact" className={styles.btnSolid}>GET A FREE QUOTE</a>
          <a href="#services" className={styles.btnOutline}>OUR SERVICES</a>
        </div>
        <div className={styles.trustBar}>
          <span>✅ Licensed &amp; Insured</span>
          <span>✅ Free Estimates</span>
          <span>✅ 24/7 Emergency</span>
          <span>✅ Family Owned</span>
        </div>
      </div>
      {/* Wave bottom */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" fill="#f5f0e8" />
        </svg>
      </div>
    </section>
  )
}
