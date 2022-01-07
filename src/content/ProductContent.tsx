import { useEffect } from "react"
import { Feedbacks } from "../components/Feedbacks"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ProductDescription } from "../components/ProductDescription"
import { ProductDetailsHeader } from "../components/ProductDetailsHeader"
import { useProduct } from "../contexts/product"

import styles from '../styles/product.module.scss'
import { IProduct } from "../types/IProduct"

interface Props {
  product: IProduct;
}

export const ProductContent = ({ product } : Props) => {
  const { setProductsContext } = useProduct();

  useEffect(() => {
    setProductsContext(product);
  },[setProductsContext, product]);

  return(
    <div className={styles.container}>
      <Header/>

      <main>
        <ProductDetailsHeader/>
        <ProductDescription/>
        <Feedbacks/>
      </main>
      
      <Footer/>
    </div> 
  )
}