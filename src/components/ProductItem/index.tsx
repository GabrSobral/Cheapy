import styles from './style.module.scss'
import Image from 'next/image'
import { FeedbackStars } from '../FeedbackStars'
import Link from 'next/link'
import { IProduct } from '../../types/IProduct'
import { useEffect, useState } from 'react'
import { formatPrice } from '../../utils/formatPrice'

interface Props {
  product: IProduct;
  isEditable?: boolean;
}

export const ProductItem = ({ product, isEditable = false }: Props) => {
  const [ currentPrice, setCurrentPrice ] = useState(0);

  useEffect(() => {
    if(!product?.price) return;
    
    const discount = (product.price * product.discount)/100
    setCurrentPrice(product.price - discount)
  },[product])

  const loader = (imageUrl: string) => imageUrl;

  return(
      <div className={styles.container}>
        <Link href={`/Product/${product.id}`} passHref>
          <div className={styles.imageContainer}>

            { product.discount !== 0 &&
              <div className={styles.discount}>
                <span>-{product.discount}%</span>
              </div> }

            <Image 
              loader={() => loader(product.thumb)}
              src={product.thumb} 
              alt="imagem do produto" 
              layout="fill" 
              objectFit="cover"
            />
          </div>
        </Link>

        <div className={styles.detailsContainer}>
        <Link href={`/Product/${product.id}`}>
          <a className={styles.productName}>{product.name}</a>
        </Link>

          <FeedbackStars size={25} stars={product.averageRating}/>

          <div className={styles.priceContainer}>
            { product.discount !== 0 && 
              <span className={styles.oldPrice}>{formatPrice(product.price)}</span> }
            
            <span className={styles.currentPrice}>{formatPrice(currentPrice)}</span>
          </div>

          { isEditable &&  
            <button type="button" className={styles.edit}>Editar</button>
          }
        </div>
      </div>
  )
}