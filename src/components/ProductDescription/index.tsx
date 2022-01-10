import { useProduct } from '../../contexts/product';

export const ProductDescription = () => {
  const { product } = useProduct();
  return(
    <section>
      <h3>Descrição do produto</h3>
      <p>{product?.description}</p>
    </section>
  )
}