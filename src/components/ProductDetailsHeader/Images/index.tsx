import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useProduct } from '../../../contexts/product'
import { IPhotos } from '../../../types/IPhotos'
import styles from './style.module.scss'

export const Images = () => {
  const { product } = useProduct();
  const [ currentImage, setCurrentImage ] = useState<IPhotos>();
  const [ images, setImages ] = useState<IPhotos[]>([]);

  useEffect(() => {
    product?.images.unshift(product?.thumb);
    setImages(product?.images || []);
    setCurrentImage(product?.thumb);
  }, [product?.images, product?.thumb]);

  return(
    <div className={styles.images_container}>
      <div className={styles.images_container_main}>
        { currentImage && 
          <Image 
            src={currentImage?.url} 
            alt="imagem do produto" 
            layout="fill" 
            objectFit="contain"
            priority
            placeholder="blur"
            blurDataURL={currentImage?.url}
          />}
      </div>
      
      <div className={styles.images_container_others}>
        {images.length !== 0 && images?.map(image => 
          <button 
            type="button" 
            key={image.id} 
            onClick={() => setCurrentImage(image)}
            className={`${styles.imageButton} ${currentImage?.id === image.id && styles.focus}`}
          >
            <Image 
              src={image.url} 
              alt="imagem do produto" 
              layout="fill" 
              objectFit="contain"
              placeholder="blur"
              blurDataURL={image.url}
            />
          </button>
        )}
      </div>
    </div>
  )
}