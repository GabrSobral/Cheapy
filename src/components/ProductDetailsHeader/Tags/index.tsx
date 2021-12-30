import { useProduct } from '../../../contexts/product'
import styles from './style.module.scss'

export const Tags = () => {
  const { product } = useProduct();

  return(
    <div className={styles.tags_container}>
      <span>Tags:</span>
      <div className={styles.tags}>
        {product?.tags.map(tag => <div key={tag.id}>{tag.name}</div>)}
      </div>
    </div>
  )
}