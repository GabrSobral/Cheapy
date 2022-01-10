import styles from '../../styles/profile.module.scss'
import { IProduct } from '../../types/IProduct'
import { ProductItem } from '../ProductItem'

export const MyAnnounces = () => {
  const product: IProduct = {
    id: "asd213d12",
    name: "Nome de teste",
    thumb: "https://github.com/diego3g.png",
    advertiser: {
      id: "12312qwd",
      name: "Teste"
    },
    averageRating: 3.5,
    discount: 10,
    feedbacks: 32,
    images: [],
    price: 1932,
    tags: [],
    description: ""
  }
  return(
    <section className={styles.content}>
      <h3>Histórico de compras</h3>
      <div className={styles.announces_list}>
        <ProductItem product={product} isEditable />
        <ProductItem product={product} isEditable />
        <ProductItem product={product} isEditable />
        <ProductItem product={product} isEditable />
      </div>
    </section>
  )
}