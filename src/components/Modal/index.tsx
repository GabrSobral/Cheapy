import { useEffect, useRef } from 'react'
import LottieView from 'react-lottie'

import { ModalContainer } from "../ModalContainer"
import { Check } from '../../images/Check'
import { X } from '../../images/X'
import LogoutAnimation from '../../animations/Logout.json'
import AnnouncedAnimation from '../../animations/Announced.json'

import styles from './style.module.scss'

interface Props {
  closeModal: () => void;
  buttons: "Yes/No" | "Confirm";
  confirmFunc: () => void | Promise<void>;
  confirmTitle?: string;
  text: string;
  haveX?: boolean;
  animation?: "Logout" | "Announced"
}

export const Modal = ({ 
  closeModal,
  buttons,
  confirmFunc,
  confirmTitle = "Confirmar",
  text,
  haveX = false,
  animation
} : Props) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', (event: any) => {
      if(!event.target || !modal.current) return;
      if(!modal.current.contains(event.target))
        closeModal();
    })
  },[closeModal])

  const animations = {
    Logout: LogoutAnimation,
    Announced: AnnouncedAnimation
  }

  return(
    <ModalContainer selector="#modal">
      <div className={styles.background}>
        <div className={styles.container} ref={modal}>
          { haveX &&
            <button type="button" onClick={closeModal} className={styles.close}>
              <X color="#E45353" size={28}/>
            </button>
          }
          { animation && 
            <LottieView
              height={226}
              options={{
                animationData: animations[animation],
                autoplay: true,
                loop:false,
              }}
            />
          }
          <h3>{text}</h3>

          <div className={styles.button_container}>
            { buttons === "Yes/No" &&
              <>
              <button type="button" onClick={closeModal}>
                Não <X color="#fff" size={28}/>
              </button>
              <button type="button" onClick={confirmFunc}>
                Sim <Check color="#fff" size={24}/>
              </button>
              </>
            }

            { buttons === "Confirm" && 
              <button type="button" className={styles.confirmButton} onClick={confirmFunc}>
                {confirmTitle}
                <Check size={18} color="#fff"/>
              </button>
            }
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}