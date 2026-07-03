import { SafeImage } from './SafeImage'
import { scrollTo } from '../utils'
import styles from './Services.module.css'

type Service = {
  id: string
  name: string
  emoji: string
  duration: string
  description: string
  image?: string
}

const services: Service[] = [
  {
    id: 'manicure',
    name: 'Manicure',
    emoji: '💅',
    duration: '30 min',
    description: 'Cura precisa e veloce per mani sempre ordinate.',
    image: 'assets/service-manicure.jpg',
  },
  {
    id: 'pedicure',
    name: 'Pedicure',
    emoji: '🦶',
    duration: '45 min',
    description: 'Trattamento curato per piedi leggeri e in ordine.',
    image: 'assets/service-pedicure.jpg',
  },
  {
    id: 'semipermanente',
    name: 'Semipermanente',
    emoji: '💗',
    duration: '60 min',
    description: 'Colore duraturo e finitura pulita.',
    image: 'assets/service-nails.jpg',
  },
  {
    id: 'ricostruzione',
    name: 'Ricostruzione gel',
    emoji: '✨',
    duration: '90 min',
    description: 'Ricostruzione precisa e resistente.',
    image: 'assets/service-nails.jpg',
  },
  {
    id: 'ceretta',
    name: 'Ceretta',
    emoji: '🌸',
    duration: '30 min',
    description: 'Servizio rapido, attento e professionale.',
    image: 'assets/service-waxing.jpg',
  },
  {
    id: 'mani-piedi',
    name: 'Mani + piedi',
    emoji: '🤍',
    duration: '90 min',
    description: 'Pacchetto completo per mani e piedi.',
    image: 'assets/service-manicure.jpg',
  },
]

function ServiceImageFallback({ emoji, name }: { emoji: string; name: string }) {
  return (
    <div className={styles.imageFallback}>
      <span className={styles.emoji}>{emoji}</span>
      <span className={styles.fallbackName}>{name}</span>
    </div>
  )
}

export function Services() {
  return (
    <section className="section" id="services">
      <span className="section-label">Servizi</span>
      <h2 className="section-title">Cosa puoi prenotare</h2>
      <p className="section-subtitle">
        Scegli il trattamento, l&apos;orario che preferisci e ricevi subito la conferma.
      </p>

      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.id} className={`card ${styles.card}`}>
            <div className={styles.imageWrap}>
              {service.image ? (
                <SafeImage
                  src={service.image}
                  alt={service.name}
                  className={styles.image}
                  fallback={<ServiceImageFallback emoji={service.emoji} name={service.name} />}
                />
              ) : (
                <ServiceImageFallback emoji={service.emoji} name={service.name} />
              )}
            </div>
            <div className={styles.body}>
              <div className={styles.header}>
                <h3 className={styles.name}>{service.name}</h3>
                <span className={styles.duration}>{service.duration}</span>
              </div>
              <p className={styles.description}>{service.description}</p>
              <button
                type="button"
                className={`btn btn-primary btn-sm ${styles.bookBtn}`}
                onClick={() => scrollTo('booking-preview')}
              >
                Prenota
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
