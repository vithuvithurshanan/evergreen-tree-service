import { useState } from 'react'
import styles from './MailingList.module.css'

export default function MailingList() {
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className={styles.section} id="mailing">
      <div className={styles.container}>
        <h2>Stay in the Loop</h2>
        <p>Seasonal tips, service reminders, and local tree care news — delivered to your inbox.</p>

        {submitted ? (
          <p className={styles.confirm}>Thanks for subscribing! 🌿</p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit">SUBSCRIBE</button>
          </form>
        )}
      </div>
    </section>
  )
}
