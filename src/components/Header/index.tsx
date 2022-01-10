import Image from 'next/image'
import Link from 'next/link'
import { useUser } from '../../contexts/user';

import styles from './style.module.scss'

export const Header = () => {
  const { UserState } = useUser();

  return(
    <header className={styles.container}>
      <Link href="/">
        <a><Image src="/Logo.svg" alt="Logo" height={50} width={120}/></a>
      </Link>

      <nav>
        <a href="#">Contato</a>
        { !UserState.name ?
          <Link href="/SignIn"><a>Entrar</a></Link> :
          <Link href="/"><a>Meu carrinho</a></Link>
        }
        <a href="#" className={styles.announce}>Anunciar</a>
        
        { UserState.name && (
          <div className={styles.user_container}>
            <Link href="/Profile">
              <a className={styles.image_container}>
                { UserState.photo && 
                  <Image 
                    src={UserState.photo}
                    alt="Imagem do usuário"
                    width={48}
                    height={48}
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL="https://github.com/GabrSobral.png"
                  />
                }
              </a>
            </Link>
            <Link href="/Profile"><a>Olá, {UserState.name}</a></Link>
          </div>
        ) }
      </nav>
    </header>
  )
}
