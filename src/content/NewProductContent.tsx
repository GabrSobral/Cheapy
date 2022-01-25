import Image from 'next/image'
import { FiPlus, FiX } from 'react-icons/fi'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { ArrowRight } from '../images/ArrowRight'

import { formatPrice } from '../utils/formatPrice'
import { Photo } from '../images/Photo'
import { Button } from '../components/Button'
import { useNewProduct } from '../contexts/NewProduct'

import styles from '../styles/newProduct.module.scss'
import { useState } from 'react'
import { Modal } from '../components/Modal'
import { useRouter } from 'next/router'

export const NewProductContent = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const { push } = useRouter();
  const { 
    NewProductState, 
    NewProductDispatch, 
    AddTag,
    CreateAnnounce
  } = useNewProduct();

  const Create = () => {
    setIsLoading(true);
    CreateAnnounce();
    setIsModalVisible(true);
    setIsLoading(false);
  }

  return (
    <div className={styles.container}>
      <Header/>
      { isModalVisible && 
        <Modal
          text="Seu Produto foi anunciado, agora todos podem vê-lo 🔥"
          buttons="Confirm"
          confirmFunc={() => { push("/Profile") }}
          closeModal={() => setIsModalVisible(false)}
          animation="Announced"
        />
      }
      <main>
        <h3 className={styles.title}>Anunciar produto</h3>

        <div className={styles.content_wrapper}>
          <section className={styles.image_container}>
            <h4>Imagens</h4>
            <div className={styles.thumb}>
              <label htmlFor="thumb" className={styles.hover}>
                <span>Selecionar imagem principal</span>
              </label>

              { NewProductState.previewThumb ? 
                <Image
                  src={NewProductState.previewThumb}
                  alt="imagem de thumbnail do produto"
                  layout="fill"
                  objectFit="contain"
                />
                : 
                <Photo size={72} color="#E0E0E0"/>
              }
              <input 
                type="file" 
                id="thumb" 
                accept="image/png, image/jpeg"
                onChange={(event) => NewProductDispatch({
                  type: "setThumb",
                  payload: { thumb: Array.from(event.target.files || [])[0] }
                })}
              />
              <span className={styles.main_image_span}>Imagem principal</span>
            </div>
            <div className={styles.image_list}>
              { NewProductState.previewImages.map((item) => (
                <div className={styles.image} key={item}>
                  <Image
                    src={item}
                    alt="imagem do produto"
                    layout="fill"
                    objectFit="cover"
                  />
                  <button 
                    type="button" 
                    className={styles.delete_img}
                    onClick={() => NewProductDispatch({
                      type: "deletePreview",
                      payload: { item }
                    })}
                  >
                    <FiX size={24} color="#FFF"/>
                  </button>
                </div>
              )) }

              { NewProductState.thumb &&
                <>
                <label htmlFor="image[]" className={styles.add_image}>
                  <FiPlus size={24} color="#6E0AD6"/>
                </label>

                <input 
                  type="file" 
                  id="image[]" 
                  multiple
                  accept="image/png, image/jpeg"
                  onChange={(event) => NewProductDispatch({ 
                    type: "selectImages",
                    payload: { files: Array.from(event.target.files || []) } 
                  })}
                />
                </>
              }
            </div>

          </section>

          <section className={styles.inputs_container}>
            <h4>Informações</h4>
            <Input
              title="Nome do produto"
              setValue={(value) => NewProductDispatch({ 
                type: "setName", 
                payload: { name: value }
              })}
              type="text"
              value={NewProductState.name}
            />

            <Input
              title="Descrição do produto"
              setValue={(value) => NewProductDispatch({ 
                type:"setDescription", 
                payload: {description: value}
              })}
              type="textarea"
              value={NewProductState.description}
            />

            <div className={styles.stock_price_discount}>
              <Input
                title="Estoque atual"
                setValue={(value) => NewProductDispatch({ 
                  type:"setStock", 
                  payload: { stock: value }
                })}
                type="number"
                value={NewProductState.stock}
                min="0"
                center
              />

              <Input
                title={`Preço (${formatPrice(Number(NewProductState.price))})`}
                setValue={(value) => NewProductDispatch({
                  type: "setPrice",
                  payload: { price: value }
                })}
                type="number"
                value={NewProductState.price}
                pattern="/^\d+(\.\d{0,2})?$/"
                step="0.01"
                min="0"
                center
              />
            </div>
            
            <div style={{ width: "15rem", marginLeft: "auto" }}>
              <Button 
                text="Anunciar" 
                icon={{ name: "check", color: "#FFF" }}
                onClick={Create}
                isLoading={isLoading}
                disabled={!(
                  NewProductState.name && 
                  NewProductState.description && 
                  NewProductState.thumb && 
                  (NewProductState.tags.length > 0) && 
                  NewProductState.price && 
                  NewProductState.stock
                ) || isLoading}
              />
            </div>
          </section>

          <section className={styles.tags_container}>
            <h4>Adicionais</h4>
            <Input
              title={`Desconto (${NewProductState.discount}%)`}
              setValue={(value) => NewProductDispatch({
                type: "setDiscount",
                payload: { discount: value}
              })}
              type="number"
              value={NewProductState.discount}
              pattern="/^\d+(\.\d{0,2})?$/"
              step="1"
              min="0"
              max="100"
              center
            />
            <form onSubmit={AddTag}>
              <Input
                title="Nova tag"
                setValue={(value) => NewProductDispatch({
                  type: "setTagName",
                  payload: { tagName: value }
                })}
                type="text"
                maxLength={20}
                value={NewProductState.tagName}
                center
              />
              <button type="submit" disabled={!NewProductState.tagName}>
                <ArrowRight color="#fff" size={24}/>
              </button>
            </form>
            <div className={styles.tag_list}>
              <span>Tags</span>

              {NewProductState.tags.map((item) => 
                <div className={styles.tag_item} key={item.id}>
                  {item.name}
                  <button 
                    type="button" 
                    onClick={() => NewProductDispatch({ type:"removeTag", payload: { id: item.id } })}
                  >
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