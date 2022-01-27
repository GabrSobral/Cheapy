import brazilStates from '../../utils/BrazilStates.json'

import styles from './style.module.scss'

export interface InputCreateProps extends React.HTMLProps<HTMLInputElement>{
  title: string;
  value: string;
  setValue: (value: string) => void;
  type: 'text' | 'textarea' | 'email' | 'password' | "number" | "select";
  maxLength?: number;
  disabled?: boolean;
  center?: boolean;
}

export function Input({  
  value, 
  setValue, 
  type, 
  title,
  disabled,
  center = false,
  ...rest }: InputCreateProps){
  return(
    <div className={styles.input_container}>
      <span className={value ? styles.filled : ''}>{title}</span>
      {(type !== "textarea" && type !== "select") && (
        <input 
          onChange={event => setValue(event.target.value)}
          className={`${value ? styles.filled : ''} ${center && styles.center}`}
          value={value}
          type={type}
          disabled={disabled}
          {...rest}
        />
      )}
      { type === "textarea" && (
          <textarea
            maxLength={240}
            onChange={event => setValue(event.target.value)}
            className={`${value ? styles.filled : ''} ${center && styles.center}`}
            value={value}
            disabled={disabled}
          />
      )}

      { type === "select" && (
        <select 
          name="states" 
          className={`${styles.combo_box} ${value ? styles.filled : ''}  ${center && styles.center}`} 
          onChange={event => setValue(event.target.value)}
          disabled={disabled}
        >
          {brazilStates.UF.map(item =>
            <option 
              key={item.sigla} 
              value={item.sigla}
              selected={value === item.sigla}  
            >{item.nome}</option>)}
        </select>
      )}
    </div>
  )
}