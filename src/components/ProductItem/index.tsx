import styles from './style.module.scss'
import Image from 'next/image'
import { FeedbackStars } from '../FeedbackStars'
import Link from 'next/link'

export const ProductItem = () => {
  return(
    <Link href="/product" passHref>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.discount}>
            <span>-10%</span>
          </div>
          <Image src="/img1.jpg" alt="imagem do produto" layout="fill" objectFit="cover"/>
        </div>

        <div className={styles.detailsContainer}>
          <span className={styles.productName}>
            Smartphone Samsung Galaxy A32 128GB Violeta 4G
          </span>

          <FeedbackStars size={25}/>

          <div className={styles.priceContainer}>
            <span className={styles.oldPrice}>R$1.999.00</span>
            <span className={styles.currentPrice}>R$1.349.00</span>
          </div>
        </div>
      </div>
    </Link>
  )
}