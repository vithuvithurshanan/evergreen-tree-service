import styles from './Location.module.css'

export default function Location() {
  return (
    <section className={styles.section} id="location">
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.label}>Find Us</p>
          <h2>Our Service Area</h2>
          <p>
            Evergreen Tree Service is based in Buffalo, New York, and proudly serves
            the surrounding communities including Amherst, Cheektowaga, Tonawanda,
            West Seneca, and the greater WNY area.
          </p>
          <p>
            Our office is open Monday to Friday. For urgent matters or emergency
            tree services, we're reachable 7 days a week.
          </p>
          <a href="#faqs" className={styles.btnOutline}>VISIT OUR FAQs</a>

          <div className={styles.contactDetails}>
            <a
              href="https://www.google.com/maps?q=181+Elm+St,+Buffalo,+NY+14203"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 181 Elm St, Buffalo, NY 14203
            </a>
            <a href="tel:7164428792">
              📞 (716) 442-8792
            </a>
            <a href="mailto:info@evergreentreeservice.com">
              ✉️ info@evergreentreeservice.com
            </a>
          </div>

          <p className={styles.note}>
            Have questions about our services, service area, or accessibility?
            Reach out — we're happy to help.
          </p>
        </div>

        <div className={styles.map}>
          <iframe
            title="Evergreen Tree Service location — Buffalo NY"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.243!2d-78.8784!3d42.8864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d312e97e4b50d5%3A0x3e2cde5d0b4c6a1!2s181%20Elm%20St%2C%20Buffalo%2C%20NY%2014203!5e0!3m2!1sen!2sus!4v1680000000000"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

