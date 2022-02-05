import { GetServerSideProps, NextPage } from 'next';
import { ProductContent } from '../../content/ProductContent';
import { ProductProvider } from '../../contexts/product';

const Product: NextPage = () => {
  return(
    <ProductProvider>
      <ProductContent/>
    </ProductProvider>
  )
}
export default Product;