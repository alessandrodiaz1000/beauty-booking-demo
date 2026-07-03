import styles from './MonthlyReport.module.css'

const stats = [
  { value: '18', label: 'prenotazioni dal sistema' },
  { value: '7', label: 'nuove clienti' },
  { value: '6', label: 'nuove recensioni Google' },
  { value: '4', label: 'clienti tornate dal follow-up' },
]

export function MonthlyReport() {
  return (
    <section className="section">
      <span className="section-label">Report</span>
      <h2 className="section-title">Un colpo d&apos;occhio al mese</h2>
      <p className="section-subtitle">
        Niente dashboard complicate — solo i numeri utili per capire se il sistema funziona.
      </p>

      <div className={`card ${styles.report}`}>
        <div className={styles.header}>
          <h3 className={styles.period}>This month</h3>
          <span className={styles.badge}>Demo</span>
        </div>

        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={stat.label} className={styles.stat}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </li>
          ))}
        </ul>

        <p className={styles.disclaimer}>Dati demo per mostrare il report mensile.</p>
      </div>
    </section>
  )
}
