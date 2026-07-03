import { SafeImage } from './SafeImage'
import { scrollTo, WHATSAPP_URL } from '../utils'
import styles from './Hero.module.css'

function BrandedVisual() {
  return (
    <div className={styles.visualCard}>
      <div className={styles.shapeOne} aria-hidden />
      <div className={styles.shapeTwo} aria-hidden />
      <div className={styles.logoWrap}>
        <SafeImage
          src="assets/logo.png"
          alt=""
          className={styles.heroLogo}
          fallback={
            <span className={styles.heroLogoFallback}>BE-LUCE</span>
          }
        />
        <p className={styles.visualTagline}>Beauty Studio</p>
        <p className={styles.visualLocation}>Montenero · Milano</p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className={`section ${styles.hero}`}>
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Manicure, pedicure e trattamenti beauty in zona Montenero
        </h1>
        <p className={styles.subcopy}>
          Cura precisa, ambiente pulito e prenotazione semplice dal telefono.
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
            Scrivici su WhatsApp
          </a>
        </div>

        <div className={styles.trust}>
          <span className="trust-pill">⭐ 4,6 su Google</span>
          <span className="trust-pill">48 recensioni</span>
          <span className="trust-pill">Manicure &amp; Pedicure</span>
        </div>
      </div>

      <BrandedVisual />
    </section>
  )
}
