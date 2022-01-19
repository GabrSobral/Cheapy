import { useProduct } from '../../contexts/product'
import { FeedbackAndDiscount } from './FeedbackAndDiscount'
import { Images } from './Images'
import { Price } from './Price'
import { Tags } from './Tags'

import styles from './style.module.scss' 
import { Button } from '../Button'
import { useMyCart } from '../../contexts/MyCartContext'
import { useEffect, useRef, useState } from 'react'

export const ProductDetailsHeader = () => {
  const { product } = useProduct();
  const { addToCart, MyCartState } = useMyCart();
  const [ alreadyInCart, setAlreadyInCart ] = useState(false);

  useEffect(() => {
    setAlreadyInCart(MyCartState.myCartItems.some(item => item.id === product?.id))
  },[MyCartState, product?.id])

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
            text={alreadyInCart ? "Produto ja está no carrinho" : "Adicionar ao carrinho"}
            icon={{ name: "shopping_cart", color: "#ffffff" }}
            onClick={() => product && addToCart(product)}
            disabled={alreadyInCart}
          />
        </div>
      </div>
    </section>
  )
}