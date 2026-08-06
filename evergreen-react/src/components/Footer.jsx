import { useState } from 'react'
import styles from './Footer.module.css'

/* ---- Modal content ---- */
const COMPANY = 'Evergreen Tree Service'
const ADDRESS = '181 Elm St, Buffalo, NY 14203'
const PHONE   = '716-442-8792'
const EMAIL   = 'info@evergreentreeservice.com'

const TERMS = {
  title: 'Terms & Conditions',
  date: 'Effective Date: January 19, 2025 | Last Updated: July 9, 2026',
  sections: [
    {
      heading: '1. Business Identity',
      body: `These Terms and Conditions govern your use of the services provided by ${COMPANY}, located at ${ADDRESS}. Contact: ${PHONE} | ${EMAIL}.`,
    },
    {
      heading: '2. Age Requirement (18+)',
      body: 'By using this website or enrolling in our services, including SMS messaging, you confirm that you are at least 18 years of age. Our SMS program is not directed to individuals under 18.',
    },
    {
      heading: '3. Terminology',
      body: `"Client," "You," and "Your" refers to the user of this website. "The Company," "We," "Our," and "Us" refers to ${COMPANY}.`,
    },
    {
      heading: '4a. SMS Program Description & Message Types',
      body: `By providing your phone number and checking the SMS consent checkbox on our contact forms, you agree to receive recurring automated text messages from ${COMPANY}. Messages may include: free estimate confirmations and scheduling notifications, appointment reminders and project status updates, customer support and service follow-up communications, promotional offers and seasonal announcements related to our tree care services.`,
    },
    {
      heading: '4b. Message Frequency',
      body: 'Message frequency varies based on your service activity and interactions with us. You may receive up to 4–8 messages per month. Frequency may increase during active service periods.',
    },
    {
      heading: '4c. Message & Data Rates',
      body: `Message and data rates may apply for any messages sent to you from us and to us from you. Charges are determined by your mobile carrier and your individual service plan. ${COMPANY} is not responsible for any carrier charges.`,
    },
    {
      heading: '4d. How to Opt Out (STOP)',
      body: 'You can opt out of receiving SMS messages at any time by replying STOP to any message we send. After opting out, you will receive a one-time confirmation message and will no longer receive SMS messages from us unless you re-enroll.',
    },
    {
      heading: '4e. How to Get Help (HELP)',
      body: `For help with our SMS program, reply HELP to any message or contact us directly at: Phone: ${PHONE} | Email: ${EMAIL}.`,
    },
    {
      heading: '4f. Carrier Liability Disclaimer',
      body: `Mobile carriers are not liable for delayed or undelivered messages. ${COMPANY} cannot guarantee delivery of SMS messages. Delivery of information through SMS may be subject to your mobile carrier's capability and coverage area.`,
    },
    {
      heading: '4g. Supported Carriers',
      body: 'Our SMS program is supported by all major U.S. wireless carriers including AT&T, Verizon, T-Mobile, and Sprint. Not all carriers are supported for all messages.',
    },
    {
      heading: '5. Cookies',
      body: 'We use cookies in accordance with our Privacy Policy to improve user experience and website functionality.',
    },
    {
      heading: '6. Intellectual Property & License',
      body: `Unless otherwise stated, ${COMPANY} owns the intellectual property rights for all content on this website. You may not copy, reproduce, republish, sell, or redistribute any material without prior written permission.`,
    },
    {
      heading: '7. Comments & User Content',
      body: `${COMPANY} reserves the right to monitor and remove any comments or user-generated content on our platforms that are inappropriate, offensive, or violate these terms.`,
    },
    {
      heading: '8. Content Liability',
      body: `We are not responsible for content that appears on external websites linking to us. You agree to defend and protect ${COMPANY} against any claims arising from your website or digital properties.`,
    },
    {
      heading: '9. Disclaimer',
      body: `To the maximum extent permitted by applicable law, ${COMPANY} excludes all warranties, representations, and conditions relating to our website and services. We are not liable for any loss or damage arising from the use of our website or services.`,
    },
    {
      heading: '10. Changes to These Terms',
      body: 'We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with a revised "Last Updated" date. Continued use of our website or services constitutes acceptance of the updated terms.',
    },
    {
      heading: '11. Contact Information',
      body: `${COMPANY} · ${ADDRESS} · ${PHONE} · ${EMAIL}`,
    },
  ],
}

const PRIVACY = {
  title: 'Privacy Policy',
  date: 'Effective Date: January 19, 2025 | Last Updated: July 9, 2026',
  sections: [
    {
      heading: '1. Information We Collect',
      body: `We may collect the following categories of personal information when you contact us, request a quote, submit a web form, or use our services: Full name, mailing or service address, email address, mobile phone number, service request details and project descriptions, communication history and preferences.`,
    },
    {
      heading: '2a. How We Collect Your Mobile Number',
      body: `We collect your mobile phone number when you voluntarily provide it through our website contact forms, phone calls, or other direct communication channels. By providing your mobile number and checking the SMS consent checkbox on our forms, you expressly consent to receive SMS communications from ${COMPANY}.`,
    },
    {
      heading: '2b. Types of Messages We Send',
      body: 'By opting in, you may receive recurring automated text messages including: free estimate confirmations and appointment reminders, project status updates and scheduling notifications, customer support and follow-up communications, promotional offers and seasonal service announcements.',
    },
    {
      heading: '2c. Message Frequency',
      body: 'Message frequency varies based on your interactions with us, ongoing service needs, and active promotions. You may receive up to 4–8 messages per month depending on your service activity.',
    },
    {
      heading: '2d. Message & Data Rates',
      body: `Message and data rates may apply. Charges are determined by your mobile carrier and your individual service plan. ${COMPANY} is not responsible for any charges incurred from your mobile carrier.`,
    },
    {
      heading: '2e. How to Opt Out (STOP)',
      body: `You may cancel SMS messages at any time by replying STOP to any text message you receive from us. After opting out, you will receive one final confirmation message and will no longer receive SMS communications from ${COMPANY} unless you re-enroll.`,
    },
    {
      heading: '2f. How to Get Help (HELP)',
      body: `For help with our SMS program, reply HELP to any message, or contact us directly at: Phone: ${PHONE} | Email: ${EMAIL}.`,
    },
    {
      heading: '3. Mobile Information & SMS Consent — No Third-Party Sharing',
      body: 'No mobile information (including your mobile phone number and SMS opt-in consent data) will be shared with third parties or affiliates for marketing or promotional purposes. All other categories of personal data exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties under any circumstances.',
    },
    {
      heading: '4. How We Use Your Information',
      body: 'We use the personal information we collect to: provide and manage tree care services, respond to inquiries and service requests, schedule appointments and send reminders, send promotional communications (with your consent), improve our website and service quality, comply with applicable laws and regulations.',
    },
    {
      heading: '5. Cookies and Tracking Technologies',
      body: 'We use cookies and similar technologies to improve website functionality, analyze traffic, and enhance user experience. Cookies do not store sensitive personal information. By continuing to use this website, you consent to our use of cookies in accordance with this policy.',
    },
    {
      heading: '6. Data Security',
      body: 'We implement reasonable administrative, technical, and physical security measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction. However, no method of electronic transmission or storage is 100% secure.',
    },
    {
      heading: '7. Data Retention',
      body: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by applicable law. When your data is no longer needed, we securely delete or anonymize it.',
    },
    {
      heading: '8. Your Privacy Rights',
      body: `Depending on your location, you may have the right to: access a copy of the personal data we hold about you, request correction of inaccurate data, request deletion of your personal data (including your mobile number and SMS consent record), opt out of SMS by replying STOP, or opt out of marketing by contacting us. To exercise any of these rights, contact us at ${EMAIL} or call ${PHONE}.`,
    },
    {
      heading: '9. Changes to This Privacy Policy',
      body: 'We may update this Privacy Policy from time to time. We will post the updated policy on this page with a revised "Last Updated" date. Continued use of our website or services after any changes constitutes your acceptance of the updated policy.',
    },
    {
      heading: '10. Contact Information',
      body: `${COMPANY} · ${ADDRESS} · ${PHONE} · ${EMAIL}`,
    },
  ],
}

function Modal({ doc, onClose }) {
  if (!doc) return null
  return (
    <div className={styles.backdrop} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.card}>
        <div className={styles.modalHeader}>
          <h3>{doc.title}</h3>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close">×</button>
        </div>
        <div className={styles.modalBody}>
          <p className={styles.metaDate}>{doc.date}</p>
          {doc.sections.map(s => (
            <div key={s.heading}>
              <h4>{s.heading}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Footer() {
  const [modal, setModal] = useState(null)

  return (
    <>
      <footer className={styles.footer}>
        {/* Grid */}
        <div className={styles.grid}>
          {/* Brand col */}
          <div className={styles.brandCol}>
            <div className={styles.brandTitle}>
              <img src="/images/logo.png" alt="Evergreen Tree Service" className={styles.footerLogo} />
            </div>
            <p className={styles.desc}>
              Professional, certified arborists serving Buffalo, NY and the
              surrounding communities. Licensed · Insured · Family‑owned.
            </p>
            <div className={styles.socials}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>

          {/* Navigation col */}
          <div className={styles.col}>
            <h4>Navigation</h4>
            <ul className={styles.navList}>
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#location">Location</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services col */}
          <div className={styles.col}>
            <h4>Services</h4>
            <ul className={styles.navList}>
              <li><a href="#services">Tree Trimming</a></li>
              <li><a href="#services">Tree Removal</a></li>
              <li><a href="#services">Stump Grinding</a></li>
              <li><a href="#services">Emergency Services</a></li>
              <li><a href="#services">Land Clearing</a></li>
              <li><a href="#services">Tree Health</a></li>
            </ul>
          </div>

          {/* Contact col */}
          <div className={styles.col}>
            <h4>Contact</h4>
            <p className={styles.info}>📍 181 Elm St<br />Buffalo, NY 14203</p>
            <p className={styles.info}><a href="tel:7164428792">📞 (716) 442-8792</a></p>
            <p className={styles.info}><a href="mailto:info@evergreentreeservice.com">✉️ info@evergreentreeservice.com</a></p>
            <div className={styles.hours}>
              <strong>Business Hours</strong>
              <p>Mon – Fri: 7am – 6pm</p>
              <p>Sat: 8am – 4pm</p>
              <span className={styles.emergency}>🚨 24/7 Emergency</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <div className={styles.bottomInner}>
            <p className={styles.copy}>© 2026 Evergreen Tree Service. All rights reserved.</p>
            <div className={styles.legal}>
              <button className={styles.legalBtn} onClick={() => setModal(PRIVACY)}>Privacy Policy</button>
              <button className={styles.legalBtn} onClick={() => setModal(TERMS)}>Terms &amp; Conditions</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {modal && <Modal doc={modal} onClose={() => setModal(null)} />}
    </>
  )
}
