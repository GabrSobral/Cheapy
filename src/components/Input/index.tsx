import styles from './style.module.scss'

interface InputCreateProps{
  title: string;
  value: string | undefined;
  setValue: (value: string) => void;
  type: 'text' | 'textarea' | 'email' | 'password';
  maxLength?: number;
}

export function Input({ value, setValue, type, title, maxLength = 240 }: InputCreateProps){
  return(
    <div className={styles.input_container}>
      <span className={value ? styles.filled : ''}>{title}</span>
      {
        type !== "textarea" ?
          <input 
            type={type} 
            onChange={event => setValue(event.target.value)}
            className={value ? styles.filled : ''}
            value={value}
            maxLength={maxLength}
          />
        : 
          <textarea
            maxLength={240}
            onChange={event => setValue(event.target.value)}
            className={value ? styles.filled : ''}
            value={value}
          >
          </textarea>
      }
    </div>
  )
}