import Image from 'next/image';
import { useRef } from 'react';
import styles from './style.module.scss'

interface Props {
  currentStars: number | null;
  setStars: (index: number) => void;
}

export const StarsButtons = ({ currentStars, setStars }: Props) => {
  const feedbackContainer = useRef<any>(null);

  function Hover(star: number, cmd : "up" | "down"){
    if(!feedbackContainer.current) return;
    
    for (let i = 0; i <= star; i++)
      feedbackContainer.current
        .childNodes.item(i)
        .firstChild.firstChild
        .style.webkitFilter = `brightness(${cmd === "up" ? 0.9:1})`;
  }

  return(
    <div className={styles.feedback} ref={feedbackContainer}>
      { [1,2,3,4,5].map((item, index) => 
        <button 
          type="button"
          key={item}
          onClick={() => setStars(index + 1)}
          onMouseOver={() => Hover(index, "up")}
          onMouseOut={() => Hover(index, "down")}
        >
          <Image
            src={`/Star${((currentStars || 0) - 1) >= index ? "Filled":""}.svg`}
            layout="fill"
            alt="Estrela de feedback"
          />
        </button>
      ) }
    </div>
  )
}