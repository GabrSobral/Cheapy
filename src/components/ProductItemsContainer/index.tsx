import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ProductItem } from '../ProductItem'

import styles from './style.module.scss'

export const ProductItemsContainer = () => {
  const carrousel = useRef<HTMLDivElement>(null);
  const rightButton = useRef<HTMLButtonElement>(null);
  const leftButton = useRef<HTMLButtonElement>(null);
  const productItemRef = useRef<HTMLDivElement>(null);
  const [ currentPosition, setCurrentPosition ] = useState(0);

  const test = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  function move(to: "right" | "left"){
    if(!carrousel.current || !productItemRef.current) return;

    const direction = 
      to === "right" ? productItemRef.current?.offsetWidth : -productItemRef.current?.offsetWidth;

    carrousel.current?.scrollTo(currentPosition + direction, 0);
    setCurrentPosition((prev) => (prev + direction || 0));
  };

  useEffect(() => {
    if(!carrousel.current || !rightButton.current || !leftButton.current)
      return;

    if(currentPosition <=  0)
      leftButton.current.style.display = "none";
    else
      leftButton.current.style.display = "flex";

    if(currentPosition === (carrousel.current?.scrollWidth - carrousel.current?.offsetWidth))
      rightButton.current.style.display = "none";
    else
      rightButton.current.style.display = "flex";
  },[currentPosition])

  return(
    <div className={styles.productItemsContainer}>
      <button type="button" onClick={() => move("left")} ref={leftButton}>
        <Image src="/ArrowLeft.svg" alt="arrow to left" width={30} height={30}/>
      </button>

      <div className={styles.carrouselContainer} ref={carrousel}>
        {test.map(item => 
          <div  className={styles.productITemContainer} key={item} ref={productItemRef}>
            <ProductItem/>
          </div>
        )}
      </div>
      
      <button type="button" onClick={() => move("right")} ref={rightButton}>
        <Image src="/ArrowRight.svg" alt="arrow to right" width={30} height={30}/>
      </button>
    </div>  
  )
}