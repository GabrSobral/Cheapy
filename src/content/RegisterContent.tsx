import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { InputData, SignForm } from '../components/SignForm'
import { SignPageBanner } from '../components/SignPageBanner'
import { useSignUp } from '../contexts/signUp'

import styles from '../styles/signIn.module.scss'

export const RegisterContent = () => {
  const query = useRouter().query;
  const { SignUpState, SignUpDispatch } = useSignUp();
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    SignUpDispatch({ type: "setName", payload: { data: String(query.name)} });
    SignUpDispatch({ type: "setEmail", payload: { data: String(query.email)} });
    SignUpDispatch({ type: "setToken", payload: { data: String(query.token)} });
  },[query, SignUpDispatch]);

  const inputs_one: InputData[] = [
    {
      value: SignUpState.password,
      setValue: (value) => SignUpDispatch({ type: "setPassword", payload: { data: value } }),
      title: "Senha",
      type: "password"
    },
    {
      value: SignUpState.confirmationPassword,
      setValue: (value) => SignUpDispatch({ type: "setConfirmation", payload: { data: value } }),
      title: "Confirme sua senha",
      type: "password"
    }
  ];

  const inputs_two: InputData[] = [
    {
      value: SignUpState.CPF,
      setValue: (value) => SignUpDispatch({ type: "setCPF", payload: { data: value} }),
      title: "CPF",
      type: "text"
    }
  ];
  
  return(
    <div className={styles.container}>
    <Header/>

    <main>
      <section>
        <div className={styles.wrapper}>
          <div className={styles.title_container}>
            { page === 1 && <h2>Insira uma senha <br/>segura e forte</h2>}
            { page === 2 && <h2>Não se preocupe, seus <br/>dados são sigilosos</h2>}
            <span>Falta pouco para você se unir a nossa comunidade!</span>
          </div>

          { page === 1 &&
            <SignForm
              inputs={inputs_one}
              onSubmit={async () => setPage(p => p+1)}
              buttonDisabled={!(SignUpState.password && SignUpState.confirmationPassword)}
            />
          }

          { page === 2 &&
            <SignForm
              inputs={inputs_two}
              onSubmit={async () => setPage(p => p+1)}
              buttonDisabled={!(SignUpState.CPF)}
            />
          }
        </div>
      </section>

      <SignPageBanner/>
    </main>
  </div>
  )
}