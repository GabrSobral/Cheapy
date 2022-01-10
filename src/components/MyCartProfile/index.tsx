import styles from '../../styles/profile.module.scss'
import { Button } from '../Button'
import { CartItem } from '../CartItem'

export const MyCartProfile = () => {
  return(
    <section className={styles.content}>
      <h3>Meu carrinho</h3>
      <div className={styles.list}>
        <div className={styles.list_container}>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </div>

        <div className={styles.list_footer}>
          <span>Total a pagar: R$2.698,00</span>
        </div>
      </div>

      <div className={styles.button_container}>
        <Button
          imageSrc="/payment_card.svg"
          imageAlt="Efetuar pagamento"
          text="Efetuar pagamento"
          onClick={() => alert("Pagamento efetuado")}
        />
      </div>
    </section>
  )
}