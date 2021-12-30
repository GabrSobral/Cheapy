import styles from './style.module.scss'

export const Footer = () => {
  return(
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contact}>
          <span>Contato:</span>
          <ul>
            <li>Telefone: +55 (13) 99159-9324</li>
            <li>Email: Gabriel_Sobral@live.com</li>
          </ul>
        </div>

        <span className={styles.reservedRights}>
          ®Cheapy - Todos os direitos reservados
        </span>
      </div>
    </footer>
  )
}