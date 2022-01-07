import Image from 'next/image'
import { useProduct } from '../../../contexts/product'
import { FeedbackStars } from '../../FeedbackStars'
import styles from './style.module.scss'

export const FeedbackAndDiscount = () => {
  const { product } = useProduct();

  return(
    <div className={styles.feedback_discount}>
      <div className={styles.feedback}>
        <FeedbackStars size={32} stars={product?.averageRating || 0}/>
        <span>{product?.feedbacks} avaliações</span>
      </div>

      {product?.discount !== 0 &&
        <span className={styles.discount}>
          {product?.discount}% de desconto
        </span>
      }
    </div>
  )
}