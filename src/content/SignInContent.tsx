import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Header } from '../components/Header';
import { SignPageBanner } from '../components/SignPageBanner';

import styles from '../styles/signIn.module.scss'
import { InputData, SignForm } from '../components/SignForm';

export const SignInContent = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  const inputs: InputData[] = [
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
                <Image
                  src="/ArrowLeft.svg"
                  alt="Seta para voltar"
                  width={24}
                  height={24}
                />
                Voltar à tela principal
              </a>
            </Link>
            
            <div className={styles.title_container}>
              <h2>Entre para ter acesso <br/>aos nossos serviços</h2>
              <span>Ao entrar, você poderá ter acesso a toda a plataforma!</span>
            </div>

            <SignForm 
              inputs={inputs} 
              onSubmit={async () => {}}
              buttonDisabled={!(email && password)}
              buttonText="Entrar"
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