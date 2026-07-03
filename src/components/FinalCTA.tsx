import { scrollTo, WHATSAPP_URL } from '../utils'
import styles from './FinalCTA.module.css'

export function FinalCTA() {
  return (
    <section className={`section ${styles.cta}`} id="final-cta">
      <div className={`card ${styles.card}`}>
        <h2 className={styles.headline}>Vuoi provarlo per 30 giorni?</h2>
        <p className={styles.subcopy}>
          Pilot per i primi centri in zona: 50€ il primo mese. Dopo 30 giorni continui solo se ti
          è utile.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => scrollTo('booking-preview')}
          >
            Prenota una demo
          </button>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-block"
          >
            Scrivici su WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
