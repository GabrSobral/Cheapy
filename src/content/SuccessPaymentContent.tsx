import { useRouter } from 'next/router'
import LottieView from 'react-lottie'

import { ArrowLeft } from '../images/ArrowLeft'
import PaymentSuccessful from '../animations/PaymentSuccessful.json'

import styles from '../styles/successfulPayment.module.scss'

export const SuccessPaymentContent = () => {
  const { push } = useRouter();

  return(
    <div className={styles.container}>
      <div>
        <h3>Tudo concluído!</h3>
        <span>
          Sua compra está sendo processada, <br/> alertaremos você por e-mail quando a sua compra for deferida. 🎁
        </span>

        <button type="button" onClick={() => { push("/"); }}>
          Voltar à tela principal
          <ArrowLeft color="#fff" size={24}/>
        </button>
      </div>

      <div>
        <LottieView options={{ animationData: PaymentSuccessful, loop: false }}/>
      </div>
    </div>
  )
} 