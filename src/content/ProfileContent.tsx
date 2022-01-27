import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { 
  MdOutlineFavoriteBorder, 
  MdOutlineShoppingCart, 
  MdOutlineInventory2, 
  MdOutlineAssignment } from 'react-icons/md'
import { Modal } from '../components/Modal'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MyAnnounces } from '../components/MyAnnounces'
import { MyCartProfile } from '../components/MyCartProfile'
import { MyFavorites } from '../components/MyFavorites'
import { MyHistoryProducts } from '../components/MyHistoryProducts'
import { useUser } from '../contexts/user'

import styles from '../styles/profile.module.scss'
import { removeToken } from '../utils/JsonWebToken'

type ContentProps = "MyCart" | "History" | "Announces" | 'MyFavorites'

export const ProfileContent = () => {
  const { UserState, UserDispatch } = useUser();
  const [ isExitModalVisible, setIsExitModalVisible ] = useState(false);
  const [ content, setContent ] = useState<ContentProps>("MyCart");
  const router = useRouter();

  const loader = (image: string) => image;

  const exit = () => {
    removeToken();
    UserDispatch({ type: "logout" })
    setIsExitModalVisible(false)
    router.push("/");
  }

  return(
    <div className={styles.container}>
      <Header/>

      { isExitModalVisible && 
        <Modal
          haveX
          text="Você tem certeza de que quer nos deixar? 😭 "
          buttons="Confirm"
          confirmFunc={exit}
          closeModal={() => setIsExitModalVisible(false)}
          animation="Logout"
        />
      }

      <main>
        <div className={styles.image_container}>
          <div className={styles.image}>
            { UserState.photo && 
              <Image 
                loader={() => loader(UserState.photo)}
                src={UserState.photo}
                alt="Imagem de perfil do usuário"
                layout="fill"
                objectFit="cover"
                blurDataURL={UserState.photo}
                placeholder="blur"
              />
            }
          </div>
          <span className={styles.username}>{UserState.name}</span>
          <span>Santos - São Paulo</span>

          <button 
            type="button" 
            className={styles.exit_button}
            onClick={() => setIsExitModalVisible(true)}  
          >
            Sair
          </button>
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
            <MdOutlineShoppingCart 
              size={38} 
              color={content === "MyCart" ? "#ffffff":"#6E0AD6"}
            /> 

            Meu carrinho
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "History" && styles.active}`}
            onClick={() => setContent("History")}
          >
            <MdOutlineAssignment 
              size={38} 
              color={content === "History" ? "#ffffff":"#6E0AD6"}
            /> 
            Compras feitas
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "Announces" && styles.active}`}
            onClick={() => setContent("Announces")}
          >
            <MdOutlineInventory2 
              size={38} 
              color={content === "Announces" ? "#ffffff":"#6E0AD6"}
            /> 
            Meus anúncios
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${  content === "MyFavorites" && styles.active}`}
            onClick={() => setContent("MyFavorites")}
          >
            <MdOutlineFavoriteBorder 
              size={38} 
              color={content === "MyFavorites" ? "#ffffff":"#6E0AD6"}
            /> 
            Meus favoritos
          </button>
        </nav>
      </main>
      <Footer/>
    </div>
  )
}