import { useProduct } from '../../contexts/product';
import styles from './style.module.scss'

export const ProductDescription = () => {
  const { product } = useProduct();
  return(
    <section className={styles.prudct_description}>
      <h3>Descrição do produto</h3>
      <p>{product?.description}</p>
    </section>
  )
}