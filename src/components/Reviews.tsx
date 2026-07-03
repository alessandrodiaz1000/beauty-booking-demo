import { GOOGLE_REVIEWS_URL } from '../utils'
import styles from './Reviews.module.css'

const highlights = [
  {
    title: 'Precisione nei dettagli',
    text: 'Manicure e pedicure curate, con attenzione al risultato finale.',
  },
  {
    title: 'Ambiente pulito',
    text: 'Strumenti igienizzati e servizio ordinato.',
  },
  {
    title: 'Gentilezza e disponibilità',
    text: 'Staff rapido, disponibile e professionale.',
  },
]

export function Reviews() {
  return (
    <section className="section">
      <h2 className="section-title">Cosa apprezzano le clienti</h2>
      <p className="section-subtitle">
        Dalle recensioni pubbliche emergono cura, precisione e gentilezza.
      </p>

      <div className={styles.cards}>
        {highlights.map((item) => (
          <article key={item.title} className={`card ${styles.card}`}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.text}</p>
          </article>
        ))}
      </div>

      <p className={styles.note}>Sintesi ispirata alle recensioni pubbliche su Google.</p>

      <a href={GOOGLE_REVIEWS_URL} className={`btn btn-secondary btn-block ${styles.cta}`}>
        Leggi le recensioni su Google
      </a>
    </section>
  )
}
