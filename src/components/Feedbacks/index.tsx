import { FeedbackItem } from './FeedbackItem'
import Image from 'next/image'

import { useEffect, useRef, useState } from 'react'
import { api } from '../../services/api'
import { useProduct } from '../../contexts/product'
import { IFeedback } from '../../types/IFeedback'
import { CreateFeedbackModal } from './CreateFeedbackModal'
import { MdOutlineCreate } from 'react-icons/md'
import { GetUserId } from '../../utils/parseJWT'

import FeedbackMessageSVG from '../../images/feedback_message.svg'
import styles from './style.module.scss'

export const Feedbacks = () => {
  const { product } = useProduct();
  const [ feedbacks, setFeedbacks ] = useState<IFeedback[]>([]);
  const [ myFeedback, setMyFeedback ] = useState<IFeedback>();
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const myId = useRef(GetUserId()).current;

  useEffect(() => {
    if(!product) return;
    
    (async () => {
      const { data } = await api.get(`/feedbacks/${product?.id}`);
      setFeedbacks(data.feedbacks);
      setMyFeedback(data.myFeedback);
    })();
  },[product, myId]);

  const addFeedbackToState = (newFeedback: IFeedback) => {
    setMyFeedback(newFeedback);
  };

  return(
    <section className={styles.feedbacks_container}>
      { isModalVisible && 
        <CreateFeedbackModal
          closeModal={() => setIsModalVisible(false)}
          addFeedbackToState={addFeedbackToState}
          myFeedback={myFeedback}
        /> }
      <div className={styles.feedbacks_container_top}>
        <h3>Avaliações</h3>

        <button type="button" onClick={() => setIsModalVisible(p => !p)}>
          { myFeedback ? "Alterar avaliação" : "Escrever avaliação" }
          <MdOutlineCreate size={24} color="#ffffff"/>
        </button>
      </div>

      <div className={styles.feedbacks_list}>
        { (myFeedback === null && feedbacks.length === 0) && 
          <div className={styles.no_feedbacks}>
            <Image
              src={FeedbackMessageSVG}
              alt="NoFeedback icon"
              width={128}
              height={128}
            />
            <span>Não há avaliações ainda.<br/>Seja o primeiro a avaliar. 😃</span>
          </div>
        }
        { myFeedback && <FeedbackItem feedback={myFeedback}/> }
        {feedbacks.map(item => <FeedbackItem key={item.user.id} feedback={item}/>)}
      </div>
    </section>
  )
};