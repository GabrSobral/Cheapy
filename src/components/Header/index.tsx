import Image from 'next/image'

import styles from './style.module.scss'

export const Header = () => {
  return(
    <header className={styles.container}>
      <Image src="/Logo.svg" alt="Logo" height={50} width={120}/>

      <nav>
        <a href="#">Contato</a>
        <a href="#">Entrar</a>
        <a href="#" className={styles.announce}>Anunciar</a>
      </nav>
    </header>
  )
}
