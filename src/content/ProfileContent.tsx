import Image from 'next/image'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MyAnnounces } from '../components/MyAnnounces'
import { MyCartProfile } from '../components/MyCartProfile'
import { MyHistoryProducts } from '../components/MyHistoryProducts'
import styles from '../styles/profile.module.scss'

export const ProfileContent = () => {
  const [ content, setContent ] = useState<"MyCart" | "History" | "Announces">("MyCart");

  return(
    <div className={styles.container}>
      <Header/>
      <main>
        <div className={styles.image_container}>
          <div className={styles.image}>
            <Image 
              src="https://github.com/formidablae.png" 
              alt="Imagem de perfil do usuário"
              layout="fill"
              objectFit="cover"
              blurDataURL="https://github.com/formidablae.png"
              placeholder="blur"
            />
          </div>
          <span className={styles.username}>Gabriel Sobral dos Santos</span>
          <span>Santos - São Paulo</span>
        </div>

        { content === "MyCart" && <MyCartProfile/> }
        { content === "History" && <MyHistoryProducts/> }
        { content === "Announces" && <MyAnnounces/> }

        <nav>
          <button 
            type="button" 
            className={`${styles.menu_button} ${ content === "MyCart" && styles.active}`}
            onClick={() => setContent("MyCart")}
          >
            <Image 
              src={`/my_shopping_cart.svg`}
              alt="Meu carrinho" 
              width={38} 
              height={38}
            />  
            Meu carrinho
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "History" && styles.active}`}
            onClick={() => setContent("History")}
          >
            <Image 
              src="/list.svg" 
              alt="Histórico de compras" 
              width={38} 
              height={38}
            />  
            Histórico de compras
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "Announces" && styles.active}`}
            onClick={() => setContent("Announces")}
          >
            <Image 
              src="/my_products.svg" 
              alt="Meus anúncios" 
              width={38} 
              height={38}
            />  
            Meus anúncios
          </button>
        </nav>
      </main>
      <Footer/>
    </div>
  )
}