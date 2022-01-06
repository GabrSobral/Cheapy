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

const Product: NextPage<ProductProps> = ({ product }: ProductProps) => {
  return(
    <div className={styles.container}>
      <Header/>

      <ProductProvider>
        <ProductMain product={product} />
      </ProductProvider>
      
      <Footer/>
    </div>
  )
}
export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  if(!context.params?.id) return { props: {}};

  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  const { data } = await api.get(`/products/${context.params?.id}`, { httpsAgent: agent });

  return {
    props: {
      product: data
    }
  }
}