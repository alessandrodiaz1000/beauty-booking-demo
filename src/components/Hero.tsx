import { SafeImage } from './SafeImage'
import { scrollTo, WHATSAPP_URL } from '../utils'
import styles from './Hero.module.css'

function HeroPlaceholder() {
  return (
    <div className="placeholder-visual">
      <div className="placeholder-content">
        <span className="placeholder-icon">✨</span>
        <span className="placeholder-label">Be-Luce Beauty Studio</span>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 6 }}>
          Montenero · Milano
        </span>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.content}>
        <span className="section-label">Centro beauty · Montenero</span>
        <h1 className={styles.headline}>
          Manicure, pedicure e trattamenti beauty in zona Montenero
        </h1>
        <p className={styles.subcopy}>
          Prenota dal telefono in pochi secondi. Ricevi promemoria automatici e, dopo la visita,
          lascia una recensione Google con un tap.
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className="btn btn-primary btn-block"
            onClick={() => scrollTo('booking-preview')}
          >
            Prenota ora
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

        <div className={styles.trust}>
          <span className="trust-pill">⭐ 4,6 su Google</span>
          <span className="trust-pill">48 recensioni</span>
          <span className="trust-pill">Clienti storiche in zona</span>
        </div>
      </div>

      <div className={styles.visual}>
        <SafeImage
          src="assets/hero-salon.jpg"
          alt="Interno del salone Be-Luce"
          className={styles.heroImage}
          fallback={<HeroPlaceholder />}
        />
      </div>
    </section>
  )
}
