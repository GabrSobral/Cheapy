import { Feedbacks } from "../components/Feedbacks"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { ProductDescription } from "../components/ProductDescription"
import { ProductDetailsHeader } from "../components/ProductDetailsHeader"

import styles from '../styles/product.module.scss'

export const ProductContent = () => {
  return (
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