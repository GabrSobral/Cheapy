import styles from './style.module.scss'

interface InputCreateProps{
  title: string;
  value: string | undefined;
  setValue: (value: string) => void;
  type: 'text' | 'textarea';
}

export function Input({ value, setValue, type, title }: InputCreateProps){
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
          />
        : 
          <textarea
            onChange={event => setValue(event.target.value)}
            className={value ? styles.filled : ''}
            value={value}
          >
          </textarea>
      }
    </div>
  )
}