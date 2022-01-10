import styles from './style.module.scss'
import Image from 'next/image'
import { FeedbackStars } from '../FeedbackStars'
import Link from 'next/link'
import { IProduct } from '../../types/IProduct'
import { useEffect, useState } from 'react'
import { formatPrice } from '../../utils/formatPrice'

interface Props {
  product: IProduct;
}

export const ProductItem = ({ product }: Props) => {
  const [ currentPrice, setCurrentPrice ] = useState(0);

  useEffect(() => {
    if(!product?.price) return;
    
    const discount = (product.price * product.discount)/100
    setCurrentPrice(product.price - discount)
  },[product])

  const loader = (imageUrl: string) => imageUrl;

  return(
    <Link href={`/Product/${product.id}`} passHref>
      <div className={styles.container}>
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

        <div className={styles.detailsContainer}>
          <span className={styles.productName}>{product.name}</span>

          <FeedbackStars size={25} stars={product.averageRating}/>

          <div className={styles.priceContainer}>
            { product.discount !== 0 && 
              <span className={styles.oldPrice}>{formatPrice(product.price)}</span> }
            
            <span className={styles.currentPrice}>{formatPrice(currentPrice)}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}