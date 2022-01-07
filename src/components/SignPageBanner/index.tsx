import styles from './styles.module.scss'

export const SignPageBanner = () => {
  return(
    <div className={styles.banner}>
      <div className={styles.img_container}>
        <svg width="76" height="768" viewBox="0 0 76 768" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.311 0H76.5V698H39.311C-88.3118 391.5 144.93 225.5 39.311 0Z" fill="#6E0AD6"/>
      </svg>
      </div>
      <div className={styles.space}/>
    </div>
  )
}