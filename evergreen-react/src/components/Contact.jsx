import { useEffect, useRef, useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const formWrapperRef = useRef(null)
  const [showForm, setShowForm] = useState(false)

  // The embedded form iframe pulls in a heavy third-party bundle
  // (leadconnectorhq, Facebook pixel, Cloudflare Turnstile). Defer
  // mounting it until the section is about to scroll into view so
  // it doesn't add to initial page load / main-thread work.
  useEffect(() => {
    const el = formWrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowForm(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!showForm) return
    if (!document.querySelector('script[src="https://link.kdlead.com/js/form_embed.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://link.kdlead.com/js/form_embed.js'
      script.async = true
      document.body.appendChild(script)
    }
  }, [showForm])

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.info}>
          <p className={styles.label}>Get In Touch</p>
          <h2>Let's Talk About<br />Your Trees</h2>
          <p className={styles.intro}>
            Whether you need a quick trim or a full removal, we're here to help.
            One of our certified arborists will get back to you within 1 business day.
          </p>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📍</span>
              <div><strong>Based In</strong><span>181 Elm St, Buffalo, NY 14203</span></div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>📞</span>
              <div><strong>Call Us</strong><span><a href="tel:7164428792">716-442-8792</a></span></div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>✉️</span>
              <div><strong>Email Us</strong><span><a href="mailto:info@evergreentreeservice.com">info@evergreentreeservice.com</a></span></div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>🕐</span>
              <div><strong>Response Time</strong><span>Within 1 business day</span></div>
            </div>
            <div className={styles.detailItem}>
              <span className={styles.detailIcon}>⚡</span>
              <div><strong>Emergency Service</strong><span>Available 7 days a week</span></div>
            </div>
          </div>
          <div className={styles.promise}>
            <span>✅ Free, no-obligation quotes</span>
            <span>✅ ISA Certified Arborists</span>
            <span>✅ Fully licensed &amp; insured</span>
          </div>
        </div>

        {/* RIGHT — iframe, wrapper clips the empty bottom gap */}
        <div className={styles.formWrapper} ref={formWrapperRef}>
          {showForm && (
            <iframe
              src="https://link.kdlead.com/widget/form/V8xh7J6oUX3GeflXfxhS"
              id="inline-V8xh7J6oUX3GeflXfxhS"
              scrolling="no"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 0"
              data-height="901"
              data-layout-iframe-id="inline-V8xh7J6oUX3GeflXfxhS"
              data-form-id="V8xh7J6oUX3GeflXfxhS"
              title="Contact Form"
            />
          )}
        </div>

      </div>
    </section>
  )
}
