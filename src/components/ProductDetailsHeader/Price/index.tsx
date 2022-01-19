import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useProduct } from '../../../contexts/product'
import styles from './style.module.scss'

export const Price = () => {
  const { product } = useProduct();
  const [ isFavorited, setIsFavorited ] = useState(false);
  const [ finalPrice, setFinalPrice ] = useState(0);

  useEffect(() => {
    if(!product?.price) return;
    
    const discount = (product.price * product.discount)/100
    setFinalPrice(product.price - discount)
  },[product])

  return(
    <div className={styles.price_container}>
      <div className={styles.prices}>
        {product?.discount !== 0 && 
          <div className={styles.old_price}>
            <span>De </span>
            <span>{formatPrice(product?.price || 0)}</span>
          </div>
        }

        <div className={styles.current_price}>
          <span>Por </span>
          <span>{formatPrice(finalPrice)}</span>
        </div>
      </div>
      
      <button type="button" onClick={() => setIsFavorited(prev => !prev)}>
        { isFavorited ?
          <MdFavorite size={36} color="#E45353"/>
          :
          <MdFavoriteBorder size={36} color="#999999"/>
        } 
      </button>
    </div>
  )
}