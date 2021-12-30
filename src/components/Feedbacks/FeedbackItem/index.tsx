import Image from 'next/image'
import { IFeedback } from '../../../types/IFeedback'
import { FeedbackStars } from '../../FeedbackStars'
import styles from './style.module.scss'

interface Props {
  feedback: IFeedback;
}

export const FeedbackItem = ({ feedback }: Props) => {
  return(
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <div className={styles.img}>
            <Image src="/img1.jpg" alt="foto de perfil" width={48} height={48}/>
          </div>
          <span>{feedback.user.name}</span>
        </div>

        <FeedbackStars size={32} stars={feedback.stars}/>
      </div>

      <div className={styles.content}>
        <span className={styles.stitle}>{feedback.title}</span>
        <p>{feedback.content}</p>
      </div>

      <div className={styles.recomendation} style={{ color: feedback.recomendation ? "#8FE281" : "#E45353" }}>
        <Image src={`/${feedback.recomendation ? "check" : "x"}.svg`} alt="check" width={24} height={24}/>
        {feedback.recomendation ? "Recomendo este produto" : "Não recomendo este produto"}
      </div>
    </div>
  )
}