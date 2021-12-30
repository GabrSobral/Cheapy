import Image from 'next/image'
import { FeedbackAndDiscount } from './FeedbackAndDiscount'
import { Images } from './Images'
import { Price } from './Price'
import styles from './style.module.scss' 
import { Tags } from './Tags'

export const ProductDetailsHeader = () => {
  return(
    <section className={styles.container}>
      <Images/>

      <div className={styles.details_container}>
        <div className={styles.top}>
          <h2 className={styles.product_name}>
            Smartphone Samsung Galaxy A32 128GB violeta 4G - 4GB RAM Tela 6.4 Câm. Quádrupla + Selfie 20MP
          </h2>

          <FeedbackAndDiscount/>
          <Tags/>
        </div>

        <div>
          <Price/>

          <button type="button" className={styles.add_to_cart}>
            Adicionar ao carrinho
            <div className={styles.add_to_cart_icon}>
              <Image 
                src="/shopping_cart.svg" 
                alt="Ícone de carrinho de compras"
                width={36}
                height={36}
                />
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}