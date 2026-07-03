import { SafeImage } from './SafeImage'
import { scrollTo } from '../utils'
import styles from './Header.module.css'

const SALON_NAME = 'Be-Luce Beauty Studio'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <SafeImage
            src="assets/logo.png"
            alt={SALON_NAME}
            className={styles.logo}
            fallback={<span className={styles.name}>{SALON_NAME}</span>}
          />
          <span className={styles.location}>Montenero · Milano</span>
        </div>
        <button
          type="button"
          className={`btn btn-primary btn-sm ${styles.cta}`}
          onClick={() => scrollTo('booking-preview')}
        >
          Prenota
        </button>
      </div>
    </header>
  )
}
