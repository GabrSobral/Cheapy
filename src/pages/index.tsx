import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'

import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
   <div className={styles.container}>
     <Header/>
     <Banner/>

      <main>
        <section>
          <span className={styles.titleSection}>Anunciados hoje</span>

        </section>
      </main>
   </div>
  )
}

export default Home