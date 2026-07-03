import { GOOGLE_MAPS_URL, WHATSAPP_URL } from '../utils'
import styles from './Location.module.css'

export function Location() {
  return (
    <section className="section">
      <h2 className="section-title">Ci trovi in zona Montenero</h2>
      <p className="section-subtitle">
        Be-Luce Beauty Studio si trova in zona Montenero, facilmente raggiungibile da Porta
        Romana, Guastalla e XXII Marzo.
      </p>

      <div className={`card ${styles.mapCard}`}>
        <div className={styles.pin} aria-hidden />
        <p className={styles.address}>Montenero · Milano</p>
        <p className={styles.hint}>Zona Porta Romana</p>
      </div>

      <div className={styles.actions}>
        <a href={GOOGLE_MAPS_URL} className="btn btn-secondary btn-block">
          Apri su Google Maps
        </a>
        <a href={WHATSAPP_URL} className="btn btn-primary btn-block">
          Scrivici su WhatsApp
        </a>
      </div>
    </section>
  )
}
