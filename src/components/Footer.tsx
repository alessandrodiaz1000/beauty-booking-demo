import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>Be-Luce Beauty Studio</p>
      <p className={styles.location}>Montenero · Milano</p>
      <p className={styles.note}>
        Demo creata per mostrare il sistema di prenotazione e recensioni
      </p>
    </footer>
  )
}
