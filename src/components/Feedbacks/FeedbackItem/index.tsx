import Image from 'next/image'
import { FeedbackStars } from '../../FeedbackStars'
import styles from './style.module.scss'

export const FeedbackItem = () => {
  return(
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <Image src="/img1" alt="foto de perfil" width={48} height={48}/>
          <span>Ana Silva Dos Santos</span>
        </div>

        <FeedbackStars size={25}/>
      </div>
    </div>
  )
}