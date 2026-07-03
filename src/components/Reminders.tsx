import styles from './Reminders.module.css'

const messages = [
  {
    type: 'Conferma',
    text: 'Ciao Giulia, appuntamento confermato per domani alle 15:30 per Semipermanente.',
    time: '14:02',
  },
  {
    type: 'Promemoria',
    text: 'Ti ricordiamo il tuo appuntamento da Be-Luce domani alle 15:30.',
    time: '09:00',
  },
  {
    type: 'Recensione',
    text: 'Grazie per essere passata oggi. Se ti sei trovata bene, ci aiuti con una recensione Google?',
    time: '18:45',
  },
]

export function Reminders() {
  return (
    <section className="section">
      <span className="section-label">Promemoria</span>
      <h2 className="section-title">Meno messaggi da scrivere a mano</h2>
      <p className="section-subtitle">
        Conferme, promemoria e richieste recensione partono da sole — tu ti concentri sul lavoro in
        salone.
      </p>

      <div className={styles.phone}>
        <div className={styles.phoneHeader}>
          <span className={styles.phoneTitle}>Be-Luce Beauty Studio</span>
          <span className={styles.phoneStatus}>online</span>
        </div>

        <div className={styles.bubbles}>
          {messages.map((msg) => (
            <div key={msg.type} className={styles.messageGroup}>
              <span className={styles.msgLabel}>{msg.type}</span>
              <div className={styles.bubble}>
                <p>{msg.text}</p>
                <span className={styles.time}>{msg.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
