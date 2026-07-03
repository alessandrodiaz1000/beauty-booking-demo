import { useState, type FormEvent } from 'react'
import { SERVICE_OPTIONS } from '../utils'
import styles from './BookingForm.module.css'

type FormData = {
  nome: string
  telefono: string
  servizio: string
  giorno: string
  orario: string
  note: string
}

const emptyForm: FormData = {
  nome: '',
  telefono: '',
  servizio: '',
  giorno: '',
  orario: '',
  note: '',
}

export function BookingForm() {
  const [form, setForm] = useState<FormData>(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="section" id="booking">
        <h2 className="section-title">Prenota il tuo appuntamento</h2>
        <div className={`card ${styles.success}`}>
          <div className={styles.successIcon} aria-hidden>✓</div>
          <p className={styles.successText}>
            Richiesta inviata. Ti ricontatteremo per confermare l&apos;appuntamento.
          </p>
          <button
            type="button"
            className={`btn btn-secondary btn-sm ${styles.resetBtn}`}
            onClick={() => {
              setForm(emptyForm)
              setSubmitted(false)
            }}
          >
            Invia un&apos;altra richiesta
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="section" id="booking">
      <h2 className="section-title">Prenota il tuo appuntamento</h2>
      <p className="section-subtitle">
        Scegli il trattamento, indica giorno e orario preferiti e conferma la richiesta.
        Ti ricontatteremo per confermare la disponibilità.
      </p>

      <form className={`card ${styles.form}`} onSubmit={handleSubmit}>
        <label className={styles.field}>
          <span className={styles.label}>Nome</span>
          <input
            type="text"
            required
            value={form.nome}
            onChange={(e) => update('nome', e.target.value)}
            placeholder="Il tuo nome"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Telefono</span>
          <input
            type="tel"
            required
            value={form.telefono}
            onChange={(e) => update('telefono', e.target.value)}
            placeholder="Es. 333 123 4567"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Servizio</span>
          <select
            required
            value={form.servizio}
            onChange={(e) => update('servizio', e.target.value)}
            className={styles.input}
          >
            <option value="">Seleziona un trattamento</option>
            {SERVICE_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Giorno preferito</span>
          <input
            type="date"
            required
            value={form.giorno}
            onChange={(e) => update('giorno', e.target.value)}
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Orario preferito</span>
          <input
            type="time"
            required
            value={form.orario}
            onChange={(e) => update('orario', e.target.value)}
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>Note facoltative</span>
          <textarea
            value={form.note}
            onChange={(e) => update('note', e.target.value)}
            placeholder="Es. prima volta, preferenze particolari..."
            rows={3}
            className={`${styles.input} ${styles.textarea}`}
          />
        </label>

        <button type="submit" className="btn btn-primary btn-block">
          Richiedi prenotazione
        </button>
      </form>
    </section>
  )
}
