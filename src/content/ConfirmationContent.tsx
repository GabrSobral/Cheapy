import { useRouter } from "next/router"
import { Header } from "../components/Header"
import { SignPageBanner } from "../components/SignPageBanner"

import styles from '../styles/signIn.module.scss'

export const ConfirmationContent = () => {
  const router = useRouter();
  
  function sendAgain(){
    router.push(`/Register?name=${router.query.name}&email=${router.query.email}&token=oiamdaoisjdoaism`)
  }

  return(
    <div className={styles.container}>
      <Header/>

      <main>
        <section>
          <div className={styles.wrapper}>
            <div className={styles.title_container}>
              <h2>Precisamos confirmar <br/>uma coisa...</h2>
                <span>Enviamos um e-mail para  a sua caixa  de mensagens, pois precisamos confirmar a sua identidade. <br/>Por favor, verifique a sua caixa de e-mail (ou spam, caso seja necessário).</span>
            </div>

            <button 
              type="button" 
              className={styles.send_again}
              onClick={sendAgain}>
              Enviar e-mail novamente
            </button>

          </div>
        </section>

        <SignPageBanner/>
      </main>
    </div>
  )
}