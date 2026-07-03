import { SafeImage } from './SafeImage'
import styles from './GoogleProfile.module.css'

const features = [
  { icon: '📅', label: 'Link prenotazione' },
  { icon: '💅', label: 'Servizi elencati' },
  { icon: '📸', label: 'Foto del salone' },
  { icon: '⭐', label: 'Recensioni visibili' },
  { icon: '💬', label: 'Contatto WhatsApp' },
]

function MockGoogleCard() {
  return (
    <div className={`card ${styles.mockCard}`}>
      <div className={styles.mockHeader}>
        <div className={styles.mockAvatar}>BL</div>
        <div>
          <h3 className={styles.mockName}>Be-Luce Beauty Studio</h3>
          <p className={styles.mockRating}>4,6 ★ · 48 recensioni</p>
          <p className={styles.mockAddress}>Centro estetico · Montenero, Milano</p>
        </div>
      </div>
      <div className={styles.mockActions}>
        <span className={styles.mockBtn}>Prenota</span>
        <span className={styles.mockBtnSecondary}>Chiama</span>
        <span className={styles.mockBtnSecondary}>Indicazioni</span>
      </div>
    </div>
  )
}

export function GoogleProfile() {
  return (
    <section className="section">
      <span className="section-label">Google Business</span>
      <h2 className="section-title">
        Più facile da trovare. Più facile da prenotare. Più facile da recensire.
      </h2>
      <p className="section-subtitle">
        Il profilo Google del salone diventa il punto di partenza per nuove clienti e prenotazioni.
      </p>

      <div className={styles.features}>
        {features.map((f) => (
          <div key={f.label} className={styles.feature}>
            <span className={styles.featureIcon}>{f.icon}</span>
            <span className={styles.featureLabel}>{f.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.preview}>
        <SafeImage
          src="assets/google-profile.png"
          alt="Profilo Google Business Be-Luce"
          className={styles.screenshot}
          fallback={<MockGoogleCard />}
        />
      </div>
    </section>
  )
}
