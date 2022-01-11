import Image from 'next/image'
import { useState } from 'react'
import { 
  MdOutlineFavoriteBorder, 
  MdOutlineShoppingCart, 
  MdOutlineInventory2, 
  MdOutlineAssignment } from 'react-icons/md'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MyAnnounces } from '../components/MyAnnounces'
import { MyCartProfile } from '../components/MyCartProfile'
import { MyFavorites } from '../components/MyFavorites'
import { MyHistoryProducts } from '../components/MyHistoryProducts'

import styles from '../styles/profile.module.scss'

type ContentProps = "MyCart" | "History" | "Announces" | 'MyFavorites'

export const ProfileContent = () => {
  const [ content, setContent ] = useState<ContentProps>("MyCart");

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
        { content === "MyFavorites" && <MyFavorites/> }

        <nav>
          <button 
            type="button" 
            className={`${styles.menu_button} ${ content === "MyCart" && styles.active}`}
            onClick={() => setContent("MyCart")}
          >
            <MdOutlineShoppingCart size={38} color={content === "MyCart" ? "#ffffff":"#6E0AD6"}/> 

            Meu carrinho
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "History" && styles.active}`}
            onClick={() => setContent("History")}
          >
            <MdOutlineAssignment size={38} color={content === "History" ? "#ffffff":"#6E0AD6"}/> 
            Compras feitas
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "Announces" && styles.active}`}
            onClick={() => setContent("Announces")}
          >
            <MdOutlineInventory2 size={38} color={content === "Announces" ? "#ffffff":"#6E0AD6"}/> 
            Meus anúncios
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "MyFavorites" && styles.active}`}
            onClick={() => setContent("MyFavorites")}
          >
           <MdOutlineFavoriteBorder size={38} color={content === "MyFavorites" ? "#ffffff":"#6E0AD6"}/> 
            Meus favoritos
          </button>
        </nav>
      </main>
      <Footer/>
    </div>
  )
}