import { FormEvent, useState } from 'react';
import Link from 'next/link';

import { Header } from '../components/Header';
import { SignPageBanner } from '../components/SignPageBanner';

import styles from '../styles/signIn.module.scss'
import { SignForm } from '../components/SignForm';
import { MdArrowBack } from 'react-icons/md';
import { InputCreateProps } from '../components/Input';
import { api } from '../services/api';
import { useUser } from '../contexts/user';
import { useRouter } from 'next/router';
import { setToken } from '../utils/JsonWebToken';
import { setRefreshToken } from '../utils/RefreshToken';

export const SignInContent = () => {
  const router = useRouter();
  const { UserDispatch } = useUser();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const SignIn = async (event: FormEvent) => {
    event.preventDefault();

    try{
      setIsLoading(true);
      const { data } = await api.post("/users/authenticate", { email, password });
      UserDispatch({ type: "setUser", payload: { user: { 
        name: data.user.name,
        photo: data.user.photo }}
      });
      setToken(data.token);
      setRefreshToken(data.refreshToken.id);
      router.back();
    } catch(error: any) {
      setErrorMessage(error.response.data.message);
      setIsLoading(false);
    }
  }

  const inputs: InputCreateProps[] = [
    {
      value: email, 
      setValue: (value) => setEmail(value), 
      title: "Email", 
      type: "email"
    },
    {
      value: password, 
      setValue: (value) => setPassword(value), 
      title: "Senha", 
      type: "password"
    }
  ];

  return(
    <div className={styles.container}>
      <Header/>

      <main>
        <section>
          <div className={styles.wrapper}>
            <Link href="/">
              <a className={styles.go_back_button}>
                <MdArrowBack size={24} color="#6E0AD6"/>
                Voltar à tela principal
              </a>
            </Link>
            
            <div className={styles.title_container}>
              <h2>Entre para ter acesso <br/>aos nossos serviços</h2>
              <span>Ao entrar, você poderá ter acesso a toda a plataforma!</span>
            </div>

            <SignForm
              errorMessage={errorMessage}
              inputs={inputs} 
              onSubmit={SignIn}
              buttonDisabled={!(email && password) || isLoading}
              buttonText="Entrar"
              isLoading={isLoading}
            />
            <Link href="/SignUp">
              <a>Não possui uma conta? Clique para se cadastrar</a>
            </Link>
          </div>
        </section>

        <SignPageBanner/>
      </main>
    </div>
  )
}