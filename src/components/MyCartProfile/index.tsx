import { useMyCart } from '../../contexts/MyCartContext'
import styles from '../../styles/profile.module.scss'
import { formatPrice } from '../../utils/formatPrice'
import { Button } from '../Button'
import { CartItem } from '../CartItem'

export const MyCartProfile = () => {
  const { MyCartState, Pay } = useMyCart();

  return(
    <section className={styles.content}>
      <h3>Meu carrinho</h3>
      <div className={styles.list}>
        { MyCartState.myCartItems.length > 0 &&
          <>
            <div className={styles.list_container}>
              {MyCartState.myCartItems.map((item, index) => 
                <CartItem key={item.id} item={item} index={index}/>)}
            </div>

            <div className={styles.list_footer}>
              <span>
                Total a pagar: 
                {MyCartState.myCartItems.length !==0 && 
                  formatPrice(MyCartState.myCartItems.reduce(
                    (prev, current) => prev + (current.price * current.quantity), 0))}
              </span>
            </div>
          </>
        }
      </div>
      
      { MyCartState.myCartItems.length > 0 && 
        <div className={styles.button_container}>
          <Button
            icon={{ name: "payment", color: "#ffffff" }}
            text="Efetuar pagamento"
            onClick={Pay}
          />
        </div>
      }
    </section>
  )
}