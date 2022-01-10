import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

export const CartItem = () => {
  return(
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="https://github.com/GabrSobral.png"
          alt="Images do produto"
          objectFit="cover"
          layout="fill"
        />
      </div>

      <div className={styles.content}>
        <div>
          <Link href={"/"}>
            <a className={styles.title}>
              Smartphone Samsung Galaxy A32 128GB Violeta 4G - 4GB RAM Tela 6,4” Câm. Quádrupla + Selfie 20MP
            </a>
          </Link>
        </div>
        <div className={styles.quantity_price_container}>
          <div className={styles.quantity_container}>
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </div>
          <div>
            <span className={styles.old_price}>R$1.999,00</span>
            <span className={styles.price}>R$1.349,00</span>
          </div>
        </div>
      </div>
    </div>
  )
}