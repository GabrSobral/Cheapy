import styles from '../../styles/profile.module.scss'
import { Button } from '../Button'
import { CartItem } from '../CartItem'

export const MyHistoryProducts = () => {
  return(
    <section className={styles.content}>
      <h3>Histórico de compras</h3>
      <div className={styles.list}>
        <div className={styles.list_container}>
          <CartItem isHistory/>
          <CartItem isHistory/>
        </div>

        <div className={styles.list_footer}>
          <span>Total gasto: R$2.698,00</span>
        </div>
      </div>
    </section>
  )
}