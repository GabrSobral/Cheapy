import Image from 'next/image'
import Link from 'next/link'

import styles from './style.module.scss'

export const Header = () => {
  return(
    <header className={styles.container}>
      <Link href="/">
        <a><Image src="/Logo.svg" alt="Logo" height={50} width={120}/></a>
      </Link>

      <nav>
        <a href="#">Contato</a>
        <Link href="/SignIn"><a>Entrar</a></Link>
        <a href="#" className={styles.announce}>Anunciar</a>
      </nav>
    </header>
  )
}
