import brazilStates from '../../utils/BrazilStates.json'

import styles from './style.module.scss'

export interface InputCreateProps{
  title: string;
  value: string;
  setValue: (value: string) => void;
  type: 'text' | 'textarea' | 'email' | 'password' | "decimal" | "select";
  maxLength?: number;
  disabled?: boolean;
}

export function Input({  
  value, 
  setValue, 
  type, 
  title, 
  maxLength = 240, 
  disabled = false }: InputCreateProps){
  return(
    <div className={styles.input_container}>
      <span className={value ? styles.filled : ''}>{title}</span>
      {(type !== "textarea" && type !== "select") && (
        <input 
          type={type} 
          onChange={event => setValue(event.target.value)}
          className={value ? styles.filled : ''}
          value={value}
          maxLength={maxLength}
          disabled={disabled}
        />
      )}
      { type === "textarea" && (
          <textarea
            maxLength={240}
            onChange={event => setValue(event.target.value)}
            className={value ? styles.filled : ''}
            value={value}
            disabled={disabled}
          />
      )}

      { type === "select" && (
        <select 
          name="states" 
          className={`${styles.combo_box} ${value ? styles.filled : ''}`} 
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