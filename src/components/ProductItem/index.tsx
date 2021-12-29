import styles from './style.module.scss'
import Image from 'next/image'

export const ProductItem = () => {
  return(
    <a href="#">
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

          <div className={styles.starsContainer}>
            <Image src="/StarFilled.svg" alt="Star of feedback" width={25} height={25}/>
            <Image src="/StarFilled.svg" alt="Star of feedback" width={25} height={25}/>
            <Image src="/StarFilled.svg" alt="Star of feedback" width={25} height={25}/>
            <Image src="/Star.svg" alt="Star of feedback" width={25} height={25}/>
            <Image src="/Star.svg" alt="Star of feedback" width={25} height={25}/>
          </div>

          <div className={styles.priceContainer}>
            <span className={styles.oldPrice}>R$1.999.00</span>
            <span className={styles.currentPrice}>R$1.349.00</span>
          </div>
        </div>
      </div>
    </a>
  )
}