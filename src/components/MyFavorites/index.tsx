import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import styles from '../../styles/profile.module.scss'
import { IProduct } from '../../types/IProduct'
import { ProductItem } from '../ProductItem'

export const MyFavorites = () => {
  const [ myFavorites, setMyFavorites ] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/favorite/my-list");
      setMyFavorites(data);
    })()
  },[]);
  
  return(
    <section className={styles.content}>
      <h3>Meus favoritos</h3>
      <div className={styles.announces_list}>
        {myFavorites.map(item => <ProductItem key={item.id} product={item}/>)}
      </div>
    </section>
  )
}