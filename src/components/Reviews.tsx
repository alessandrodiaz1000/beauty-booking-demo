import { SafeImage } from './SafeImage'
import styles from './Reviews.module.css'

const reviews = [
  {
    text: 'Precisi, professionali e gentilissimi.',
    author: 'Laura M.',
    stars: 5,
  },
  {
    text: 'Manicure e pedicure perfette, torno sempre qui.',
    author: 'Sara B.',
    stars: 5,
  },
  {
    text: 'Ambiente pulito, prezzi onesti e servizio veloce.',
    author: 'Chiara R.',
    stars: 5,
  },
]

function MockGoogleSummary() {
  return (
    <div className={`card ${styles.mockSummary}`}>
      <div className={styles.googleIcon}>G</div>
      <div>
        <p className={styles.summaryRating}>4,6 ★ · 48 recensioni Google</p>
        <p className={styles.summarySub}>Be-Luce Beauty Studio · Montenero</p>
      </div>
    </div>
  )
}

export function Reviews() {
  return (
    <section className="section">
      <span className="section-label">Recensioni</span>
      <h2 className="section-title">Clienti che tornano e lo raccontano</h2>
      <p className={styles.followUp}>
        Dopo ogni appuntamento, le clienti soddisfatte ricevono automaticamente il link per
        lasciare una recensione.
      </p>

      <div className={styles.cards}>
        {reviews.map((review) => (
          <article key={review.author} className={`card ${styles.reviewCard}`}>
            <div className={styles.stars}>
              {'★'.repeat(review.stars)}
              <span className={styles.starMuted}>{'★'.repeat(5 - review.stars)}</span>
            </div>
            <p className={styles.reviewText}>&ldquo;{review.text}&rdquo;</p>
            <span className={styles.author}>— {review.author}</span>
          </article>
        ))}
      </div>

      <div className={styles.previewWrap}>
        <SafeImage
          src="assets/reviews-screenshot.png"
          alt="Anteprima recensioni Google"
          className={styles.screenshot}
          fallback={<MockGoogleSummary />}
        />
      </div>
    </section>
  )
}
