import { scrollTo, WHATSAPP_URL } from '../utils'
import styles from './FinalCTA.module.css'

export function FinalCTA() {
  return (
    <section className={`section ${styles.cta}`}>
      <div className={`card ${styles.card}`}>
        <h2 className={styles.headline}>Pronta per il tuo prossimo appuntamento?</h2>
        <p className={styles.subcopy}>
          Prenota manicure, pedicure o il tuo trattamento beauty in pochi secondi.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => scrollTo('booking')}
          >
            Prenota ora
          </button>
          <a href={WHATSAPP_URL} className="btn btn-secondary btn-block">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
