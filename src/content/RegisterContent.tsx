import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { cpf } from 'cpf-cnpj-validator'

import { Header } from '../components/Header'
import { InputData, SignForm } from '../components/SignForm'
import { SignPageBanner } from '../components/SignPageBanner'
import { useSignUp } from '../contexts/signUp'

import styles from '../styles/signIn.module.scss'
import { Button } from '../components/Button'
import { api } from '../services/api'

export const RegisterContent = () => {
  const router = useRouter();
  const query = router.query;
  const { SignUpState, SignUpDispatch } = useSignUp();
  const [ page, setPage ] = useState(1);
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    SignUpDispatch({ type: "setName", payload: { data: String(query.name)} });
    SignUpDispatch({ type: "setEmail", payload: { data: String(query.email)} });
    SignUpDispatch({ type: "setToken", payload: { data: String(query.token)} });
  },[query, SignUpDispatch]);
  
  useEffect(() => setErrorMessage("") ,[ page ]);

  const  handleVerifyPasswords = (event: FormEvent) => {
    event.preventDefault();

    if(SignUpState.password !== SignUpState.confirmationPassword)
      return setErrorMessage("Senhas não estão iguais!");
    setPage(p => p + 1);
  };

  const handleValidateCPF = (value: string) => {
    SignUpDispatch({ type: "setCPF", payload: { data: value } })
    if(cpf.isValid(value))
      setErrorMessage("");
    else
      setErrorMessage("CPF está inválido!");
  };

  const handleFinishSignUp = async () => {
    setIsLoading(true);
    try{
      const { data } = await api.post("/users", {
        name: SignUpState.name,
        email: SignUpState.email,
        password: SignUpState.password,
        // cpf: SignUpState.CPF,
        role: "user",
        token: SignUpState.token
      });
      router.push("/");
    } catch(error: any) { console.log(error); }
    finally { setIsLoading(false); }
  }

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
      value: cpf.format(SignUpState.CPF),
      setValue: handleValidateCPF,
      title: "CPF",
      type: "text",
      maxLength: 11
    }
  ];
  
  return(
    <div className={styles.container}>
    <Header/>

    <main>
      <section>
        <div className={styles.wrapper}>
          {
            page > 1 &&
            <button 
              type="button" 
              className={styles.go_back_button} 
              onClick={() => setPage(p => p-1)}
            >
              <Image src="/ArrowLeft.svg" width={24} height={24} alt="arrow left"/>
              Voltar à etapa anterior
            </button>
          }
          <div className={styles.title_container}>
            { page === 1 && <h2>Insira uma senha <br/>segura e forte, {SignUpState.name.split(" ")[0]}</h2>}
            { page === 2 && <h2>Não se preocupe, seus <br/>dados são sigilosos</h2>}
            { page === 3 && <h2>Verifique se seus dados <br/>estão corretos</h2>}
            <span>Falta pouco para você se unir a nossa comunidade!</span>
          </div>

          { page === 1 &&
            <SignForm
              inputs={inputs_one}
              onSubmit={handleVerifyPasswords}
              buttonDisabled={!(SignUpState.password && SignUpState.confirmationPassword)}
              errorMessage={errorMessage}
            />
          }

          { page === 2 &&
            <SignForm
              inputs={inputs_two}
              onSubmit={() => setPage(p => p+1)}
              buttonDisabled={!(cpf.isValid(SignUpState.CPF))}
              errorMessage={errorMessage}
            />
          }

          { page === 3 && 
            <div className={styles.confirm_data_containet}>
              <div>
                <p><strong>Nome:</strong> {SignUpState.name}</p>
                <p><strong>Email:</strong> {SignUpState.email}</p>
                <p><strong>CPF:</strong> {cpf.format(SignUpState.CPF)}</p>
              </div>

              <Button
                isLoading={isLoading}
                text="Finalizar"
                imageSrc="/ArrowRightWhite.svg"
                imageAlt="Seta para a direita"
                onClick={handleFinishSignUp}
                disabled={isLoading}
              />
            </div>
          }
        </div>
      </section>

      <SignPageBanner/>
    </main>
  </div>
  )
}