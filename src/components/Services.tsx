import { scrollTo } from '../utils'
import styles from './Services.module.css'

type Service = {
  id: string
  name: string
  monogram: string
  duration: string
  description: string
}

const services: Service[] = [
  {
    id: 'manicure',
    name: 'Manicure',
    monogram: 'M',
    duration: '30 min',
    description: 'Cura precisa e veloce per mani sempre ordinate.',
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    monogram: 'P',
    duration: '45 min',
    description: 'Trattamento curato per piedi leggeri e in ordine.',
  },
  {
    id: 'semipermanente',
    name: 'Semipermanente',
    monogram: 'S',
    duration: '60 min',
    description: 'Colore duraturo e finitura pulita.',
  },
  {
    id: 'ricostruzione',
    name: 'Ricostruzione gel',
    monogram: 'G',
    duration: '90 min',
    description: 'Ricostruzione precisa e resistente.',
  },
  {
    id: 'ceretta',
    name: 'Ceretta',
    monogram: 'C',
    duration: '30 min',
    description: 'Servizio rapido, attento e professionale.',
  },
  {
    id: 'mani-piedi',
    name: 'Mani + piedi',
    monogram: 'M+P',
    duration: '90 min',
    description: 'Pacchetto completo per mani e piedi.',
  },
]

export function Services() {
  return (
    <section className="section" id="services">
      <h2 className="section-title">I nostri trattamenti</h2>
      <p className="section-subtitle">
        Scegli il servizio che preferisci e prenota il tuo appuntamento.
      </p>

      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.id} className={`card ${styles.card}`}>
            <div className={styles.top}>
              <div className={styles.monogram} aria-hidden>
                {service.monogram}
              </div>
              <div className={styles.meta}>
                <h3 className={styles.name}>{service.name}</h3>
                <span className={styles.duration}>{service.duration}</span>
              </div>
            </div>
            <p className={styles.description}>{service.description}</p>
            <button
              type="button"
              className={`btn btn-primary btn-sm ${styles.bookBtn}`}
              onClick={() => scrollTo('booking')}
            >
              Prenota
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
