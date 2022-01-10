import Loading from 'react-loading'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import styles from './style.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  imageSrc?: string;
  imageAlt?: string;
  imageSize?: number;
  isLoading?: boolean;
}

export const Button = ({ 
  text, 
  imageSrc, 
  imageAlt, 
  imageSize = 36,
  isLoading = false,
  ...rest }: Props) => {
  return(
    <button className={styles.button} {...rest}>
      { isLoading ? 
        <Loading type="spin" color="#ffffff" width={32} height={32}/>
        :
        <>
          {text}

          {imageSrc && 
          <div className={styles.icon}>
            <Image src={imageSrc} alt={imageAlt} width={imageSize} height={imageSize}/>
          </div>}
        </>
      }
    </button>
  )
}