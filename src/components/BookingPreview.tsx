import { useState } from 'react'
import styles from './BookingPreview.module.css'

const SERVICES = ['Manicure', 'Pedicure', 'Semipermanente', 'Ceretta']
const DAYS = ['Lun 7', 'Mar 8', 'Mer 9', 'Gio 10']
const TIMES = ['10:30', '14:00', '17:30']

export function BookingPreview() {
  const [selectedService, setSelectedService] = useState('Semipermanente')
  const [selectedDay, setSelectedDay] = useState('Mer 9')
  const [selectedTime, setSelectedTime] = useState('14:00')

  return (
    <section className="section" id="booking-preview">
      <span className="section-label">Prenotazione</span>
      <h2 className="section-title">Prenota in 3 passaggi</h2>
      <p className="section-subtitle">
        Meno messaggi manuali, più ordine. Le clienti scelgono servizio, giorno e orario da sole.
      </p>

      <div className={`card ${styles.widget}`}>
        <div className={styles.step}>
          <span className={styles.stepNum}>1</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Scegli servizio</h3>
            <div className={styles.chips}>
              {SERVICES.map((s) => (
                <button
                  key={s}
                  type="button"
                  className={`${styles.chip} ${selectedService === s ? styles.chipActive : ''}`}
                  onClick={() => setSelectedService(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.step}>
          <span className={styles.stepNum}>2</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Scegli orario</h3>
            <div className={styles.chips}>
              {DAYS.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`${styles.chip} ${selectedDay === d ? styles.chipActive : ''}`}
                  onClick={() => setSelectedDay(d)}
                >
                  {d}
                </button>
              ))}
            </div>
            <div className={`${styles.chips} ${styles.timeChips}`}>
              {TIMES.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`${styles.chip} ${styles.timeChip} ${selectedTime === t ? styles.chipActive : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.step}>
          <span className={styles.stepNum}>3</span>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>Ricevi conferma e reminder</h3>
            <div className={styles.confirmBox}>
              <p className={styles.confirmText}>
                <strong>{selectedService}</strong> · {selectedDay} alle {selectedTime}
              </p>
              <p className={styles.confirmHint}>
                Conferma immediata + promemoria il giorno prima
              </p>
            </div>
          </div>
        </div>

        <button type="button" className={`btn btn-primary btn-block ${styles.confirmBtn}`}>
          Conferma appuntamento
        </button>
      </div>
    </section>
  )
}
