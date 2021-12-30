import { NextPage } from 'next';
import { useEffect } from 'react';
import { Feedbacks } from '../components/Feedbacks';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProductDescription } from '../components/ProductDescription';
import { ProductDetailsHeader } from '../components/ProductDetailsHeader';
import { ProductProvider, useProduct } from '../contexts/product';

import styles from '../styles/product.module.scss'

const Product: NextPage = () => {
  return(
    <div className={styles.container}>
      <Header/>

      <ProductProvider>
        <main>
          <ProductDetailsHeader/>
          <ProductDescription/>
          <Feedbacks/>
        </main>
      </ProductProvider>
      
      <Footer/>
    </div>
  )
}
export default Product;

