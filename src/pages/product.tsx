import { NextPage } from 'next';
import { Header } from '../components/Header';
import { ProductDetailsHeader } from '../components/ProductDetailsHeader';
import styles from '../styles/product.module.scss'

const Product: NextPage = () => {
  return(
    <div className={styles.container}>
      <Header/>

      <main>
        <ProductDetailsHeader/>

        <div className={styles.prudct_description}>
          <h3>Descrição do produto</h3>
          <p>
            Tenha uma solução para o seu dia a dia sem deixar nada para trás com o Galaxy A32 da Samsung. Realize fotos especiais e únicas com o conjunto de 4 câmeras na parte de trás do aparelho. Divirta-se e compartilhe seus momentos especiais ao fotografar com a câmera de selfie de 20MP. A tela de 6,4 polegadas com resolução FHD+ deste smartphone oferece uma experiência de visualização imersiva, seja ao ver seus vídeos, fotos ou simplesmente acessar as redes sociais. Oferece um processador Octa-Core e 4GB de memória RAM para que você tenha tudo ao alcance dos dedos de maneira mais fácil. O armazenamento interno de 128GB entrega muita conveniência para salvar seus documentos de maneira segura. E se mesmo assim achar pouco, você pode usar um cartão MicroSD de até 1TB para aumentar essa capacidade. Fique sempre conectado com a tecnologia 4G e Wi-Fi em um aparelho dual chip! Tenha bateria para o dia todo, afinal estamos falando de 5000mAh, além de contar com carregamento rápido de 15W. A cor violeta destaca o design moderno do produto e combina perfeitamente com seu dia a dia. 
          </p>
        </div>
      </main>
    </div>
  )
}
export default Product;

