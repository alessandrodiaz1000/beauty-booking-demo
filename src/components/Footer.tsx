import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>BE-LUCE Beauty Studio</p>
      <p className={styles.location}>Montenero · Milano</p>
      <p className={styles.services}>
        Manicure · Pedicure · Ceretta · Semipermanente
      </p>
    </footer>
  )
}
