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
    const thumbImage: IPhotos = {
      id: product?.id || '',
      url: product?.thumb || ''
    };

    product?.images.unshift(thumbImage);
    setImages(product?.images || []);
    setCurrentImage(thumbImage);
  }, [product]);

  const loader = (imageUrl: string) => imageUrl;

  return(
    <div className={styles.images_container}>
      <div className={styles.images_container_main}>
        { currentImage?.url && 
          <Image 
            loader={() => loader(currentImage?.url)}
            src={currentImage?.url} 
            alt="imagem do produto" 
            layout="fill"
            objectFit="contain"
            priority
            placeholder="blur"
            height={512}
            width={512}
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
              loader={() => loader(image.url)}
              src={image.url} 
              layout="fill"
              alt="imagem do produto" 
              objectFit="contain"
              placeholder="blur"
              height={128}
              width={128}
              blurDataURL={image.url}
            />
          </button>
        )}
      </div>
    </div>
  )
}