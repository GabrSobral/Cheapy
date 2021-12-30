import Image from 'next/image'
import { useEffect } from 'react'
import { useProduct } from '../../contexts/product'
import { FeedbackAndDiscount } from './FeedbackAndDiscount'
import { Images } from './Images'
import { Price } from './Price'
import { Tags } from './Tags'

import styles from './style.module.scss' 

export const ProductDetailsHeader = () => {
  const { product } = useProduct();

  return(
    <section className={styles.container}>
      <Images/>

      <div className={styles.details_container}>
        <div className={styles.top}>
          <h2 className={styles.product_name}>{product?.name}</h2>

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