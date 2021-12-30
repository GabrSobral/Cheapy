import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.scss'

export const Header = () => {
  return(
    <header className={styles.container}>
      <Link href="/" passHref>
        <Image src="/Logo.svg" alt="Logo" height={50} width={120}/>
      </Link>

      <nav>
        <a href="#">Contato</a>
        <a href="#">Entrar</a>
        <a href="#" className={styles.announce}>Anunciar</a>
      </nav>
    </header>
  )
}
