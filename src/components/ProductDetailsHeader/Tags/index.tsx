import styles from './style.module.scss'

export const Tags = () => {
  return(
    <div className={styles.tags_container}>
      <span>Tags:</span>
      <div className={styles.tags}>
        <div>Celulares</div>
        <div>Tecnologia</div>
        <div>Samsung</div>
        <div>Custo Benefício</div>
      </div>
    </div>
  )
}