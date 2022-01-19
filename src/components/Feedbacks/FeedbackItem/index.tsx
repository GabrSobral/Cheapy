import Image from 'next/image'
import { IFeedback } from '../../../types/IFeedback'
import { GetUserId } from '../../../utils/parseJWT'
import { FeedbackStars } from '../../FeedbackStars'
import styles from './style.module.scss'

interface Props {
  feedback: IFeedback;
}

export const FeedbackItem = ({ feedback }: Props) => {
  const loader = (image: string) => image;

  return(
    <div className={`
      ${styles.container} 
      ${feedback.user.id === GetUserId() && styles.my}`}
    >
      <div className={styles.top}>
        <div>
          <div className={styles.img}>
            { feedback.user.photo && 
              <Image 
                loader={() => loader(feedback.user.photo)}
                src={feedback.user.photo} 
                alt={`foto de perfil de ${feedback.user.name}`} 
                width={48} 
                height={48}
              />
            }
          </div>
          <span>{feedback.user.name}</span>
        </div>

        <FeedbackStars size={32} stars={feedback.stars}/>
      </div>

      <div className={styles.content}>
        <span className={styles.stitle}>{feedback.title}</span>
        <p>{feedback.message}</p>
      </div>

      <div className={styles.recomendation} style={{ color: feedback.recomendation ? "#8FE281" : "#E45353" }}>
        <Image src={`/${feedback.recomendation ? "check" : "x"}.svg`} alt="check" width={24} height={24}/>
        {feedback.recomendation ? "Recomendo este produto" : "Não recomendo este produto"}
      </div>
    </div>
  )
}