import { FormEvent, useEffect, useState } from 'react'
import { MdArrowBack } from 'react-icons/md'
import { useRouter } from 'next/router'
import { cpf } from 'cpf-cnpj-validator'
import axios from 'axios'

import { Header } from '../components/Header'
import { SignForm } from '../components/SignForm'
import { SignPageBanner } from '../components/SignPageBanner'
import { Button } from '../components/Button'
import { InputCreateProps } from '../components/Input'

import { useSignUp } from '../contexts/signUp'
import { useUser } from '../contexts/user'
import { api } from '../services/api'
import styles from '../styles/signIn.module.scss'
import { setToken } from '../utils/JsonWebToken'
import { setRefreshToken } from '../utils/RefreshToken'

export const RegisterContent = () => {
  const router = useRouter();
  const query = router.query;
  const { UserDispatch } = useUser();
  const [ page, setPage ] = useState(1);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState("");
  const { SignUpState, SignUpDispatch } = useSignUp();

  useEffect(() => {
    SignUpDispatch({ type: "setName", payload: { data: String(query.name)} });
    SignUpDispatch({ type: "setEmail", payload: { data: String(query.email)} });
    SignUpDispatch({ type: "setToken", payload: { data: String(query.token)} });
  },[query, SignUpDispatch]);
  
  useEffect(() => setErrorMessage("") ,[ page ]);

  const  handleNextPage_One = (event: FormEvent) => {
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

  const handleValidateCEP = async (value: string ) => {
    SignUpDispatch({ type: "setCEP", payload: { data: value } });
    if(isValidBRZil(value).isValid) {
      setErrorMessage("");
      const { data } = await axios.get(
        `https://webmaniabr.com/api/1/cep/${isValidBRZil(value).value}/?app_key=${process.env.NEXT_PUBLIC_APP_KEY_WEBMANIA}&app_secret=${process.env.NEXT_PUBLIC_APP_SECRET_WEBMANIA}`
        );
      SignUpDispatch({ type: "setState", payload : { data: data.uf } });
      SignUpDispatch({ type: "setCity", payload : { data: data.cidade } });
      SignUpDispatch({ type: "setCountry", payload : { data: "Brasil" } });
    }
    else
      setErrorMessage("CEP inválido!");
  };

  const isValidBRZil = (BRZip: string) => {
    BRZip.trim();
    const pattern = /^[0-9]{8}$/;
    const value = pattern.test(BRZip) ? 
      BRZip.replace(/^(\d{5})(\d{3})/g, "$1-$2") : BRZip.replace("-", "");

    return {
      value,
      isValid: pattern.test(BRZip)
    }
  }

  const handleFinishSignUp = async () => {
    setIsLoading(true);
    try{
      const { data } = await api.post("/users", {
        id: SignUpState.CPF,
        name: SignUpState.name,
        email: SignUpState.email,
        password: SignUpState.password,
        city: SignUpState.city,
        postalCode: SignUpState.CEP,
        state: SignUpState.state,
        country: SignUpState.country,
        token: SignUpState.token
      });
      UserDispatch({ type: "setUser", payload: { user: { 
        name: data.user.name,
        photo: data.user.photo }}
      });
      setToken(data.token);
      setRefreshToken(data.refreshToken.id);
      router.push("/");
    } catch(error: any) { 
      setErrorMessage(error.response.data.message); 
    }
    finally { setIsLoading(false); }
  }

  const inputs_one: InputCreateProps[] = [
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

  const inputs_two: InputCreateProps[] = [
    {
      value: cpf.format(SignUpState.CPF),
      setValue: handleValidateCPF,
      title: "CPF",
      type: "text",
      maxLength: 11
    },
    {
      value: isValidBRZil(SignUpState.CEP).value,
      setValue: handleValidateCEP,
      title: "Código postal (CEP)",
      type: "text",
      maxLength: 8
    },
  ];

  const inputs_three: InputCreateProps[] = [
    {
      value: SignUpState.country,
      setValue: (value) => SignUpDispatch({ type: "setCountry", payload: { data: value } }),
      title: "País",
      type: "text",
      disabled: true
    },
    {
      value: SignUpState.state,
      setValue: (value) => SignUpDispatch({ type: "setState", payload: { data: value } }),
      title: "Estado (UF)",
      type: "select",
      disabled: isValidBRZil(SignUpState.CEP).isValid
    },
    {
      value: SignUpState.city,
      setValue: (value) => SignUpDispatch({ type: "setCity", payload: { data: value } }),
      title: "Cidade",
      type: "text",
      disabled: isValidBRZil(SignUpState.CEP).isValid
    },
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
              <MdArrowBack size={24} color="#6E0AD6"/>
              Voltar à etapa anterior
            </button>
          }
          <div className={styles.title_container}>
            { page === 1 && <h2>Insira uma senha <br/>segura e forte, 
              {SignUpState.name.split(" ")[0]}</h2>}
            { page === 2 && <h2>Não se preocupe, seus <br/>dados são sigilosos</h2>}
            { page === 3 && 
              <h2>{isValidBRZil(SignUpState.CEP).isValid ? 
                "Verifique seu endereço" : 
                "Preencha sua localização" }
              </h2>}
            { page === 4 && <h2>Verifique se seus dados <br/>estão corretos</h2>}

            <span>Falta pouco para você se unir a nossa comunidade!</span>
          </div>

          { page === 1 &&
            <SignForm
              inputs={inputs_one}
              onSubmit={handleNextPage_One}
              buttonDisabled={!(SignUpState.password && SignUpState.confirmationPassword)}
              errorMessage={errorMessage}
            />
          }

          { page === 2 &&
            <SignForm
              inputs={inputs_two}
              onSubmit={() => setPage(p => p + 1)}
              buttonDisabled={!(cpf.isValid(SignUpState.CPF))}
              errorMessage={errorMessage}
            />
          }

          { page === 3 &&
            <SignForm
              inputs={inputs_three}
              onSubmit={() => setPage(p => p + 1)}
              buttonDisabled={!(cpf.isValid(SignUpState.CPF))}
              errorMessage={errorMessage}
            />
          }

          { page === 4 && 
            <div className={styles.confirm_data_containet}>
              <div>
                <p><strong>Nome:</strong> {SignUpState.name}</p>
                <p><strong>Email:</strong> {SignUpState.email}</p>
                <p><strong>CPF:</strong> {cpf.format(SignUpState.CPF)}</p>
                <p><strong>Código postal (CEP):</strong> {isValidBRZil(SignUpState.CEP).value}</p>
                <p><strong>País:</strong> {SignUpState.country}</p>
                <p><strong>Estado (UF):</strong> {SignUpState.state}</p>
                <p><strong>Cidade:</strong> {SignUpState.city}</p>
              </div>

              {errorMessage && 
                <span style={{ color: "red", margin: "auto" }}>{errorMessage}</span>}
              <Button
                isLoading={isLoading}
                text="Finalizar"
                icon={{ name: "check", color: "#ffffff" }}
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