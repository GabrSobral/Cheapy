import { useRouter } from 'next/router'

import { useUser } from "../../contexts/user"
import { removeToken } from "../../utils/JsonWebToken"
import { ModalContainer } from "../ModalContainer"

import styles from './style.module.scss'

interface Props {
  closeModal: () => void;
}

export const ExitModal = ({ closeModal } : Props) => {
  const { UserDispatch } = useUser();
  const router = useRouter();

  const exit = () => {
    removeToken();
    UserDispatch({ type: "logout" })
    closeModal();
    router.push("/");
  }

  return(
    <ModalContainer selector="#modal">
      <div className={styles.background}>
        <div className={styles.container}>
          <h3>Você tem certeza de que quer nos deixar? 😭 </h3>

          <div className={styles.button_container}>
            <button type="button" onClick={closeModal}>
              Não
            </button>
            <button type="button" onClick={exit}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </ModalContainer>
  )
}