import Image from 'next/image'
import styles from './style.module.scss'

export const FeedbackAndDiscount = () => {
  return(
    <div className={styles.feedback_discount}>
      <div className={styles.feedback}>
        <div>
          <Image src="/StarFilled.svg" width={32} height={32} alt="Star"/>
          <Image src="/StarFilled.svg" width={32} height={32} alt="Star"/>
          <Image src="/StarFilled.svg" width={32} height={32} alt="Star"/>
          <Image src="/Star.svg" width={32} height={32} alt="Star"/>
          <Image src="/Star.svg" width={32} height={32} alt="Star"/>
        </div>
        <span>203 avaliações</span>
      </div>

      <span className={styles.discount}>
        10% de desconto
      </span>
    </div>
  )
}