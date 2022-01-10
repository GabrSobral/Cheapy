import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

import styles from './style.module.scss'

export const Header = () => {
  const [ isAuthenticated ] = useState(true);

  return(
    <header className={styles.container}>
      <Link href="/">
        <a><Image src="/Logo.svg" alt="Logo" height={50} width={120}/></a>
      </Link>

      <nav>
        <a href="#">Contato</a>
        { !isAuthenticated ?
          <Link href="/SignIn"><a>Entrar</a></Link> :
          <Link href="/"><a>Meu carrinho</a></Link>
        }
        <a href="#" className={styles.announce}>Anunciar</a>
        
        { isAuthenticated && (
          <div className={styles.user_container}>
            <Link href="/Profile">
              <a className={styles.image_container}>
                <Image 
                  src="https://github.com/GabrSobral.png" 
                  alt="Imagem do usuário"
                  width={48}
                  height={48}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="https://github.com/GabrSobral.png"

                />
              </a>
            </Link>
            <Link href="/Profile"><a>Olá, Gabriel</a></Link>
          </div>
        ) }
      </nav>
    </header>
  )
}
