import Image from 'next/image';
import { useEffect, useRef, useState } from 'react'
import { Input } from '../../Input';
import { ModalContainer } from '../../ModalContainer'
import { StarsButtons } from './StarsButtons';
import styles from './style.module.scss'

interface Props {
  closeModal: () => void;
}

export const CreateFeedbackModal = ({ closeModal }: Props) => {
  const [ title, setTitle ] = useState("");
  const [ message, setMessage ] = useState("");
  const [ recomendation, setRecomendation ] = useState<boolean | null>(null);
  const [ stars, setStars ] = useState<number | null>(null);

  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', (event: any) => {
      if(!event.target || !modal.current) return;
      if(!modal.current.contains(event.target))
        closeModal();
    })
  },[closeModal])

  return(
    <ModalContainer selector="#modal">
      <div className={styles.background}>
        <div className={styles.container} ref={modal}>
          <button onClick={closeModal} type="button" className={styles.close_button}>
            <Image 
              src="/x.svg" 
              alt="Fechar Modal" 
              width={32} 
              height={32} 
            />
          </button>

          <h3>Nova avaliação</h3>
            <form action="" className={styles.form}>
              <Input
                value={title}
                setValue={(value) => setTitle(value)}
                title="Titulo"
                type="text"
              />

              <Input
                value={message}
                setValue={(value) => setMessage(value)}
                title="Avaliação"
                type="textarea"
              />

            <div className={styles.recomendation_feedback}>
              <div className={styles.recomendation}>
                <span>Você recomenda este produto?</span>

                <div className={styles.radio_container}>
                  <div>
                    <input
                      checked={recomendation == true ? true:false} 
                      type="radio" 
                      id="answer-yes" 
                      name="answer" 
                      onChange={() => setRecomendation(true)}
                    />
                    <label htmlFor="answer-yes">Sim</label>
                  </div>

                  <div>
                    <input
                      checked={recomendation == false ? true:false} 
                      type="radio" 
                      id="answer-no" 
                      name="answer" 
                      onChange={() => setRecomendation(false)}
                    />
                    <label htmlFor="answer-no">Não</label>
                  </div>
                </div>
              </div>

              <StarsButtons currentStars={stars} setStars={(value) => setStars(value)}/>
            </div>

            <button 
              type="button" 
              className={styles.submitButton}
              disabled={!(title && message && (recomendation !== null) && (stars !== null))}
            >
              Concluir
            </button>
          </form>
         
        </div>
      </div>
    </ModalContainer>
  )
}