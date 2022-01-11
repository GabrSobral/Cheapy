import Image from 'next/image'
import Link from 'next/link'
import styles from './style.module.scss'

interface Props {
  isHistory?: boolean;
}

export const CartItem = ({ isHistory = false }: Props) => {
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
        <div className={styles.first_container}>
          <Link href={"/"}>
            <a className={styles.title}>
              Smartphone Samsung Galaxy A32 128GB Violeta 4G - 4GB RAM Tela 6,4” Câm. Quádrupla + Selfie 20MP
            </a>
          </Link>

          { isHistory && <span>Comprado em: 28/12/2021 às 15:48</span> }
        </div>

        <div className={styles.quantity_price_container}>
          <div className={styles.quantity_container}>
            { !isHistory ?
              <>
                <button type="button">-</button>
                <span>1</span>
                <button type="button">+</button>
              </>
              :
              <span>1</span>
            }

          </div>
          <div>
            <span className={styles.price}>R$1.349,00</span>
          </div>
        </div>
      </div>
    </div>
  )
}