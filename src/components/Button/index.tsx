import Loading from 'react-loading'
import { ButtonHTMLAttributes } from 'react'
import { 
  MdArrowBack, 
  MdAddShoppingCart, 
  MdOutlinePayment } from 'react-icons/md'
import styles from './style.module.scss'
import { Check } from '../../images/Check'
import { ArrowRight } from '../../images/ArrowRight'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
  text: string;
  icon: { name: "arrowRight" | "arrowLeft" | "shopping_cart" | "payment" | "check", color: string }
  isLoading?: boolean;
}
const icons = (icon: string, color: string) => {
  switch (icon) {
    case "arrowRight": return <ArrowRight size={24} color={color}/>;
    case "arrowLeft": return <MdArrowBack size={24} color={color}/>;
    case "shopping_cart": return <MdAddShoppingCart size={24} color={color}/>
    case "payment": return <MdOutlinePayment size={24} color={color}/>
    case "check": return <Check size={24} color={color}/>
    default: break;
  }
}

export const Button = ({ 
  text, 
  icon, 
  isLoading = false,
  ...rest }: Props) => {
  return(
    <button className={styles.button} {...rest}>
      { isLoading ? 
        <Loading type="spin" color="#ffffff" width={32} height={32}/>
        :
        <>
          {text}

          <div className={styles.icon}>
            {icon?.name && icons(icon?.name, icon?.color)}
          </div>
        </>
      }
    </button>
  )
}