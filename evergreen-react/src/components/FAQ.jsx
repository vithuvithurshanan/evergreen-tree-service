import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Evergreen Tree Service is fully licensed and carries comprehensive liability insurance and WSIB coverage. We\'re happy to provide proof of insurance before any work begins.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Absolutely. All assessments and written quotes are free with no obligation. A certified arborist will visit your property and walk you through exactly what work is recommended and why.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Hamilton, Dundas, Ancaster, Stoney Creek, Flamborough, and surrounding areas in the greater Hamilton region. Not sure if you\'re in our service area? Give us a call.',
  },
  {
    q: 'Do you clean up after the job?',
    a: 'Yes, always. Full cleanup and debris removal is included with every service. We leave your property clean and tidy — often better than we found it.',
  },
  {
    q: 'Can you handle large or hazardous trees?',
    a: 'Yes. Our team is trained and equipped for trees of all sizes, including large hazard trees near homes, power lines, and structures. Safety is always our top priority.',
  },
  {
    q: 'How quickly can you respond to storm damage?',
    a: 'We offer emergency storm response 7 days a week. Contact us immediately for urgent situations — we prioritize safety hazards and typically respond within hours.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash, cheque, e-transfer, and all major credit cards. Payment is due upon completion unless other arrangements have been made in advance.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={styles.item}>
      <button
        className={styles.question}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {q}
        <span className={styles.icon}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className={styles.answer}>
          <p>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className={styles.section} id="faqs">
      <div className={styles.container}>
        <p className={styles.label}>A Few Common Questions</p>
        <h2>FAQs</h2>
        <div className={styles.list}>
          {faqs.map(f => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
        <p className={styles.contact}>
          Have more questions?{' '}
          <a href="mailto:info@evergreentreeservice.ca">Send us an email</a>
        </p>
      </div>
    </section>
  )
}
