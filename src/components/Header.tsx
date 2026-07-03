import { SafeImage } from './SafeImage'
import { scrollTo } from '../utils'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <SafeImage
            src="assets/logo.png"
            alt="BE-LUCE Beauty Studio"
            className={styles.logo}
            fallback={<span className={styles.logoFallback}>BL</span>}
          />
          <div className={styles.text}>
            <span className={styles.name}>BE-LUCE Beauty Studio</span>
            <span className={styles.location}>Montenero · Milano</span>
          </div>
        </div>
        <button
          type="button"
          className={`btn btn-primary btn-sm ${styles.cta}`}
          onClick={() => scrollTo('booking')}
        >
          Prenota
        </button>
      </div>
    </header>
  )
}
