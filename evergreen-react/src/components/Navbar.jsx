import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#',             label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#services',     label: 'Services' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#location',     label: 'Location' },
  { href: '#faqs',         label: 'FAQs' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeHref, setActiveHref] = useState('#')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (window.scrollY < 100) setActiveHref('#')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveHref('#' + entry.target.id)
        }
      })
    }, { rootMargin: '-40% 0px -55% 0px' })
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={close}>
          <img src="/images/logo.png" alt="Evergreen Tree Service" className={styles.logoImg} />
        </a>

        <nav className={styles.nav}>
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={activeHref === l.href ? styles.active : ''}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={styles.cta}>GET A QUOTE</a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className={activeHref === l.href ? styles.mobileActive : ''}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className={styles.mobileCta} onClick={close}>GET A QUOTE</a>
        </div>
      )}
    </header>
  )
}

