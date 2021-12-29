import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Footer } from '../components/footer'
import { Header } from '../components/Header'
import { ProductItemsContainer } from '../components/ProductItemsContainer'

import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
   <div className={styles.container}>
      <Header/>
      <Banner/>
      
      <main>
        <section>
          <span className={styles.titleSection}>Anunciados hoje</span>

          <ProductItemsContainer/>
        </section>
      </main>
      <Footer/>
   </div>
  )
}

export default Home
