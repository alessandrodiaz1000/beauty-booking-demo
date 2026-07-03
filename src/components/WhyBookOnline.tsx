import styles from './WhyBookOnline.module.css'

const steps = [
  {
    step: '1',
    title: 'Scegli il trattamento',
    text: 'Consulta i servizi principali e indica quello che preferisci.',
  },
  {
    step: '2',
    title: "Richiedi l'orario",
    text: 'Inserisci giorno e fascia oraria più comodi per te.',
  },
  {
    step: '3',
    title: 'Ricevi conferma',
    text: 'Il centro ti confermerà la disponibilità sul telefono.',
  },
]

export function WhyBookOnline() {
  return (
    <section className="section">
      <h2 className="section-title">Prenotare è semplice</h2>

      <div className={styles.grid}>
        {steps.map((item) => (
          <article key={item.step} className={`card ${styles.card}`}>
            <span className={styles.step}>{item.step}</span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
