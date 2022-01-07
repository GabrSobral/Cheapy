import { FormEvent, useRef, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Header } from "../components/Header";
import { SignPageBanner } from "../components/SignPageBanner";

import styles from '../styles/signIn.module.scss';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { InputData, SignForm } from '../components/SignForm';

export const SignUpContent = () => {
  const router = useRouter();
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");

  async function send(event: FormEvent){
    event.preventDefault();
    router.push(`/Confirmation?name=${name}&email=${email}`);
  }

  const inputs: InputData[] = [
    {
      value: name, 
      setValue: (value) => setName(value), 
      title: "Nome", 
      type: "text"
    },
    {
      value: email, 
      setValue: (value) => setEmail(value), 
      title: "Email", 
      type: "email"
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
              <h2>Cadastre-se para se <br/>juntar à nós 🥳</h2>
              <span>Falta pouco para você se unir a nossa comunidade!</span>
            </div>

            <SignForm 
              inputs={inputs} 
              onSubmit={send}
              buttonDisabled={!(email && name)}
            />
            <Link href="/SignIn">
              <a>Já faz parte de nós? Clique para entrar</a>
            </Link>
          </div>
        </section>

        <SignPageBanner/>
      </main>
    </div>
  )
}