import { GetServerSideProps, NextPage } from 'next';
import { ProductContent } from '../../content/ProductContent';
import { ProductProvider } from '../../contexts/product';
import { api } from '../../services/api';

import { IProduct } from '../../types/IProduct';

interface ProductProps {
  product: IProduct
}

const Product: NextPage<ProductProps> = ({ product }: ProductProps) => {
  return(
    <ProductProvider>
      <ProductContent product={product}/>
    </ProductProvider>
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