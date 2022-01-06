import Image from 'next/image'
import { useEffect } from 'react'
import { useProduct } from '../../contexts/product'
import { FeedbackAndDiscount } from './FeedbackAndDiscount'
import { Images } from './Images'
import { Price } from './Price'
import { Tags } from './Tags'

import styles from './style.module.scss' 
import { Button } from '../Button'

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

          <Button
            text="Adicionar ao carrinho"
            imageAlt="Ícone de carrinho de compras"
            imageSrc="/shopping_cart.svg"
          />
        </div>
      </div>
    </section>
  )
}