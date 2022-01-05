import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useProduct } from '../../contexts/product'
import { api } from '../../services/api'
import { IProduct } from '../../types/IProduct'
import { Feedbacks } from '../Feedbacks'
import { ProductDescription } from '../ProductDescription'
import { ProductDetailsHeader } from '../ProductDetailsHeader'
import styles from './style.module.scss'

export function ProductMain(){
  const { setProductsContext } = useProduct();
  const router = useRouter();

  useEffect(() => {
    if(!router.query.id) return;

    api.get(`/products/${router.query.id}`)
      .then(({ data }) => setProductsContext(data));
  },[router, setProductsContext])

  return(
    <main className={styles.container}>
      <ProductDetailsHeader/>
      <ProductDescription/>
      <Feedbacks/>
    </main>
  )
}