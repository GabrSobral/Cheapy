import Image from 'next/image'
import { FormEvent, useEffect, useState } from 'react'
import { FiPlus } from 'react-icons/fi'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { ArrowRight } from '../images/ArrowRight'

import styles from '../styles/newProduct.module.scss'
import { formatPrice } from '../utils/formatPrice'

interface ITag {
  id: string;
  name: string;
}

export const NewProductContent = () => {
  const [ tags, setTags ] = useState<ITag[]>([]);
  const [ tagName, setTagName ] = useState("");
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ price, setPrice ] = useState("");
  const [ formattedPrice, setFormattedPrice ] = useState("");
  const [ stock, setStock ] = useState("");
  const [ discount, setDiscount ] = useState("");

  useEffect(()=> {
    console.log(formatPrice(Number(price)));
  },[price])

  const addTag = (event: FormEvent) => {
    event.preventDefault();
    if(tagName.trim() === "") return;

    const tag = {
      id: String(new Date().getTime()),
      name: tagName.trim().toLowerCase()
    }
    setTags(prev => [tag, ...prev]);
    setTagName("");
  }
  const removeTag = (itemId: string) => {
    setTags(prev => prev.filter(x => x.id !== itemId));
  }

  return (
    <div className={styles.container}>
      <Header/>
      <main>
        <h3 className={styles.title}>Anunciar produto</h3>

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
              title="Nome do produto"
              setValue={(value) => setName(value)}
              type="text"
              value={name}
            />

            <Input
              title="Descrição do produto"
              setValue={(value) => setDescription(value)}
              type="textarea"
              value={description}
            />

            <div className={styles.stock_price_discount}>
              <Input
                title="Estoque atual"
                setValue={(value) => setStock(value)}
                type="number"
                value={stock}
              />

              <Input
                title="Preço (R$)"
                setValue={(value) => setPrice(value)}
                type="text"
                value={formatPrice(Number(price))}
              />

              <Input
                title="Desconto (%)"
                setValue={(value) => setDiscount(value)}
                type="text"
                value={discount}
              />
            </div>

            <button type="button" className={styles.submit_button}>
              Anunciar
            </button>
          </section>

          <section className={styles.tags_container}>
            <form onSubmit={addTag}>
              <Input
                title="Nova tag"
                setValue={(value) => setTagName(value)}
                type="text"
                maxLength={20}
                value={tagName}
              />
              <button type="submit" disabled={!tagName}>
                <ArrowRight color="#fff" size={24}/>
              </button>
            </form>
            <div className={styles.tag_list}>
              <span>Tags</span>

              {tags.map((item) => 
                <div className={styles.tag_item} key={item.id}>
                  {item.name}
                  <button type="button" onClick={() => removeTag(item.id)}>
                    x
                  </button>
                </div>
              )}

            </div>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  )
}