import { resolveTxt } from 'dns'
import Image from 'next/image'
import { ButtonHTMLAttributes } from 'react'
import styles from './style.module.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  imageSrc: string;
  imageAlt: string;
  imageSize?: number;
}

export const Button = ({ text, imageSrc, imageAlt, imageSize = 36,...rest }: Props) => {
  return(
    <button className={styles.button} {...rest} >
      {text}

      {imageSrc && 
        <div className={styles.icon}>
          <Image src={imageSrc} alt={imageAlt} width={imageSize} height={imageSize}/>
        </div>}
    </button>
  )
}