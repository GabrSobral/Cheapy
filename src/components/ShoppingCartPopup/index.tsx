import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MdDeleteOutline } from "react-icons/md"
import { useMyCart } from "../../contexts/MyCartContext"
import { CartContainer } from "./container"
import styles from './style.module.scss'

export const ShoppingCartPopup = () => {
  const { MyCartState, removeFromCart } = useMyCart();
  const [ isVisible, setIsVisible ] = useState(true);
  const loader = (imageUrl: string) => imageUrl;

  return(
    <CartContainer selector="#shoppingCart">
      { MyCartState.myCartItems.length > 0 &&
        <div className={styles.cart_container}>
          <button type="button" onClick={() => setIsVisible(p => !p)}>
            { isVisible ? "Minimizar" : "Exibir" } carrinho
          </button>
          
          { isVisible && 
            <div className={styles.list}>
              {  MyCartState.myCartItems.map((item, index) => 
              <>
                <div className={styles.cart_item_popup}>
                  <div className={styles.image_container}>
                    <Image
                      loader={() => loader(item.thumb)}
                      src={item.thumb} 
                      alt="imagem do produto" 
                      layout="fill" 
                      objectFit="cover"
                    />
                  </div>

                  <div className={styles.content}>
                    <Link href={`/Product/${"asd"}`}>
                      <a className={styles.product_name}>{item.name}</a>
                    </Link>
                  </div>
                  <button 
                    type="button" 
                    onClick={() => removeFromCart(item, index)}>
                    <MdDeleteOutline size={24} color="#E45353"/>
                  </button>
                </div>
              </>
              ) }
            </div>
          }
        </div>
      }
    </CartContainer>
  )
}