import { useState } from 'react'
import { Input } from '../../Input';
import { ModalContainer } from '../../ModalContainer'
import styles from './style.module.scss'

export const CreateFeedbackModal = () => {
  const [ title, setTitle ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ recomendation, setRecomendation ] = useState();
  const [ stars, setStars ] = useState(0);

  return(
    <ModalContainer selector="#modal">
      <div className={styles.background}>
        <div className={styles.container}>
          <Input
            value={title}
            setValue={(value) => setTitle(value)}
            title="Titulo"
            type="text"
          />
        </div>
      </div>
    </ModalContainer>
  )
}