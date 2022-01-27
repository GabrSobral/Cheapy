import { FormEvent, useState } from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

import { Header } from "../components/Header";
import { SignPageBanner } from "../components/SignPageBanner";
import { SignForm } from '../components/SignForm';

import { api } from '../services/api';
import styles from '../styles/signIn.module.scss';
import { MdArrowBack } from 'react-icons/md';
import { InputCreateProps } from '../components/Input';

export const SignUpContent = () => {
  const router = useRouter();
  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  async function send(event: FormEvent){
    event.preventDefault();
    try{
      setIsLoading(true);
      const { data } = await api.post("/users/confirmation", { name, email });
      router.push(`/Confirmation?name=${name}&email=${email}&token=${data.token}`);
    } catch {
      return;
    } finally { setIsLoading(false); }
  }

  const inputs: InputCreateProps[] = [
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
                <MdArrowBack size={24} color="#6E0AD6"/>
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
              buttonDisabled={!(email && name) || isLoading}
              isLoading={isLoading}
              errorMessage=""
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