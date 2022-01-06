import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useProduct } from '../../contexts/product'
import { api } from '../../services/api'
import { IProduct } from '../../types/IProduct'
import { Feedbacks } from '../Feedbacks'
import { ProductDescription } from '../ProductDescription'
import { ProductDetailsHeader } from '../ProductDetailsHeader'
import styles from './style.module.scss'

interface Props {
  product: IProduct
}

export function ProductMain({ product }: Props){
  const { setProductsContext } = useProduct();

  useEffect(() => {
    setProductsContext(product);
  },[setProductsContext, product]);

  return(
    <main className={styles.container}>
      <ProductDetailsHeader/>
      <ProductDescription/>
      <Feedbacks/>
    </main>
  )
}