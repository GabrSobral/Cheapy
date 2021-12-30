import Image from 'next/image'
import { FeedbackStars } from '../../FeedbackStars'
import styles from './style.module.scss'

export const FeedbackAndDiscount = () => {
  return(
    <div className={styles.feedback_discount}>
      <div className={styles.feedback}>
        <FeedbackStars size={32}/>
        <span>203 avaliações</span>
      </div>

      <span className={styles.discount}>
        10% de desconto
      </span>
    </div>
  )
}