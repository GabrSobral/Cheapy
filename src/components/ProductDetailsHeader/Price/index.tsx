import Image from 'next/image'
import { useState } from 'react'
import styles from './style.module.scss'

export const Price = () => {
  const [ isFavorited, setIsFavorited ] = useState(false);

  return(
    <div className={styles.price_container}>
      <div className={styles.prices}>
        <div className={styles.old_price}>
          <span>De </span>
          <span>R$1.999.00</span>
        </div>

        <div className={styles.current_price}>
          <span>Por </span>
          <span>R$1.349.00</span>
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