import Image from 'next/image'
import { Button } from '../components/Button'
import { CartItem } from '../components/CartItem'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import styles from '../styles/profile.module.scss'

export const ProfileContent = () => {
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

        <section className={styles.content}>
          <h3>Meu carrinho</h3>
          <div className={styles.list}>
            <CartItem/>
            <CartItem/>
            <CartItem/>

            <div className={styles.list_footer}>
              <span>Total a pagar: R$2.698,00</span>
            </div>
          </div>

          <div className={styles.button_container}>
            <Button
              imageSrc="/payment_card.svg"
              imageAlt="Efetuar pagamento"
              text="Efetuar pagamento"
              onClick={() => alert("Pagamento efetuado")}
            />
          </div>
        </section>

        <nav>
          <button 
            type="button" 
            className={`${styles.menu_button} ${styles.active}`}
          >
            <Image 
              src="/my_shopping_cart.svg" 
              alt="Meu carrinho" 
              width={38} 
              height={38}
            />  
            Meu carrinho
          </button>

          <button 
            type="button" 
            className={`${styles.menu_button} ${styles.active}`}
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
            className={`${styles.menu_button} ${styles.active}`}
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