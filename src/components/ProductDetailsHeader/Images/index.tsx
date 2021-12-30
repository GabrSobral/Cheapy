import Image from 'next/image'
import { useState } from 'react'
import styles from './style.module.scss'

export const Images = () => {
  const images = [
    {
      id: 1,
      url: "/img1.jpg"
    },
    {
      id: 2,
      url: "/img2.jpg"
    },
    {
      id: 3,
      url: "/img3.jpg"
    },
    {
      id: 4,
      url: "/img4.jpg"
    }
  ]
  const [ currentImage, setCurrentImage ] = useState(images[0]);

  return(
    <div className={styles.images_container}>
      <div className={styles.images_container_main}>
        <Image src={currentImage.url} alt="imagem do produto" layout="fill"/>
      </div>
      
      <div className={styles.images_container_others}>
        {images.map(image => 
          <button 
            type="button" 
            key={image.id} 
            onClick={() => setCurrentImage(image)}
            className={`${styles.imageButton} ${currentImage.id === image.id && styles.focus}`}
          >
            <Image src={image.url} alt="imagem do produto" layout="fill"/>
          </button>
        )}
      </div>
    </div>
  )
}