import Image from 'next/image'
import { FiPlus } from 'react-icons/fi'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Input } from '../components/Input'

import styles from '../styles/newProduct.module.scss'

export const NewProductContent = () => {
  return (
    <div className={styles.container}>
      <Header/>
      <main>
        <h3>Anunciar produto</h3>

        <div className={styles.content_wrapper}>

          <section className={styles.image_container}>
            <div className={styles.thumb}>
              <Image
                src="https://github.com/diego3g.png"
                alt="imagem de thumbnail do produto"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={styles.image_list}>
              <div className={styles.image}>
                <Image
                  src="https://github.com/GabrSobral.png"
                  alt="imagem de thumbnail do produto"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
  
              <button type="button" className={styles.add_image}>
                <FiPlus size={24} color="#6E0AD6"/>
              </button>
            </div>

          </section>

          <section className={styles.inputs_container}>
            <Input
              title="Nome"
              setValue={() => {}}
              type="text"
              value={""}
            />

            <Input
              title="Descrição"
              setValue={() => {}}
              type="textarea"
              value={""}
            />

            <Input
              title="Estoque atual"
              setValue={() => {}}
              type="number"
              value={""}
            />

            <Input
              title="Preço (R$)"
              setValue={() => {}}
              type="number"
              value={""}
            />
          </section>

          <section className={styles.tags_container}>

          </section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}