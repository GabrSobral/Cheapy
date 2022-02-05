import Image from 'next/image'
import Link from 'next/link'
import { MdDeleteOutline } from 'react-icons/md'

import { useMyCart } from '../../contexts/MyCartContext'
import { ICartItem } from '../../types/ICartItem'
import { formatPrice } from '../../utils/formatPrice'

import styles from './style.module.scss'

interface Props {
  isHistory?: boolean;
  item: ICartItem;
  index: number
}

export const CartItem = ({ isHistory = false, item, index }: Props) => {
  const { MyCartDispatch, removeFromCart } = useMyCart();
  const loader = (imageUrl: string) => imageUrl;

  const handlePrice = () => {
    const discount = (item.price * item.discount)/100;
    return formatPrice((item.price - discount) * item.quantity);
  }
  const handleQuantity = (cmd: "sum" | "sub") => {
    let quantity = item.quantity;
    if(cmd === "sub") 
      quantity = quantity <= 1 ? quantity : quantity - 1;
    else
      quantity = quantity >= item.stock ? quantity : quantity + 1;
    MyCartDispatch({ type: "changeQuantity", payload: { quantity, index } })
  }

  return(
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          loader={() => loader(item.thumb)}
          src={item.thumb}
          alt="Images do produto"
          objectFit="cover"
          layout="fill"
          unoptimized
        />
      </div>

      <div className={styles.content}>
        <div className={styles.first_container}>
          <Link href={`/Product/${item.id}`}>
            <a className={styles.title}>{item.name}</a>
          </Link>

          { isHistory ?
            <span>Comprado em: 28/12/2021 às 15:48</span>
            : 
            <button 
              type="button" 
              className={styles.delete_item}
              onClick={() => removeFromCart(item, index)}
            >
              <MdDeleteOutline size={32} color="#E45353"/>
            </button>
          }
        </div>

        <div className={styles.quantity_price_container}>
          <div className={styles.quantity_container}>
            { !isHistory ?
              <>
                <button type="button" onClick={() => handleQuantity("sub")}>-</button>
                <span>{item.quantity}</span>
                <button type="button" onClick={() => handleQuantity("sum")}>+</button>
              </>
              :
              <span>1</span>
            }

          </div>
          <div>
            <span className={styles.price}>{handlePrice()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}