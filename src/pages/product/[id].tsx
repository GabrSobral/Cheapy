import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';

import { ProductMain } from '../../components/ProductMain';
import { ProductProvider } from '../../contexts/product';
import { api } from '../../services/api';

import styles from '../../styles/product.module.scss'
import { IProduct } from '../../types/IProduct';

interface ProductProps {
  product: IProduct
}

const Product: NextPage<ProductProps> = () => {
  return(
    <div className={styles.container}>
      <Header/>

      <ProductProvider>
        <ProductMain/>
      </ProductProvider>
      
      <Footer/>
    </div>
  )
}
export default Product;