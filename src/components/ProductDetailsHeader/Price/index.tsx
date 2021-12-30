import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useProduct } from '../../../contexts/product'
import styles from './style.module.scss'

export const Price = () => {
  const { product } = useProduct();
  const [ isFavorited, setIsFavorited ] = useState(false);
  const [ finalPrice, setFinaLPrice ] = useState(0);

  useEffect(() => {
    if(!product?.price) return;
    
    const discount = (product.price * product.discount)/100
    setFinaLPrice(product.price - discount)
  },[product])

  return(
    <div className={styles.price_container}>
      <div className={styles.prices}>
        {product?.discount !== 0 && 
          <div className={styles.old_price}>
            <span>De </span>
            <span>{product?.price}</span>
          </div>
        }

        <div className={styles.current_price}>
          <span>Por </span>
          <span>{finalPrice}</span>
        </div>
      </div>
      
      <button type="button" onClick={() => setIsFavorited(prev => !prev)}>
        <Image 
          src={`/favorite_${isFavorited ? "filled" : "outlined"}.svg`} 
          alt="ícone de adicionar aos favorito"
          width={36}
          height={36}
        />
      </button>
    </div>
  )
}