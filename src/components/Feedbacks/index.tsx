import { FeedbackItem } from './FeedbackItem'
import styles from './style.module.scss'

export const Feedbacks = () => {
  return(
    <section className={styles.feedbacks_container}>
      <div className={styles.feedbacks_container_top}>
        <h3>Avaliações</h3>

        <button type="button">
          Escrever avaliação
        </button>
      </div>

      <div className={styles.feedbacks_list}>
        <FeedbackItem/>
      </div>
    </section>
  )
}