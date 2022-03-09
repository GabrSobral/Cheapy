import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { formatPrice } from '../../../utils/formatPrice'
import { useProduct } from '../../../contexts/product'
import styles from './style.module.scss'
import { useUser } from '../../../contexts/user'

export const Price = () => {
  const { product, handleFavorite } = useProduct();
  const { UserState } = useUser();
  const [ isFavorited, setIsFavorited ] = useState(product?.isFavorited);
  const [ finalPrice, setFinalPrice ] = useState(0);

  useEffect(() => {
    if(!product?.price) return;

    const discount = (product.price * product.discount)/100;
    setFinalPrice(product.price - discount);
    setIsFavorited(product.isFavorited);
  },[product])

  async function setFavorite() {
    setIsFavorited(prev => !prev);
    await handleFavorite();
  }

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
      
      {
        UserState.name &&
        <button type="button" onClick={setFavorite}>
          {
            isFavorited === true ?
            <MdFavorite size={36} color="#E45353"/> :
              (isFavorited === false &&
                <MdFavoriteBorder size={36} color="#999999"/>)
          }
        </button>
      }
    </div>
  )
}