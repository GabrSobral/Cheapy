import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";

import { api } from "../../services/api";
import { useRouter } from "next/router";

interface ProductContextProps {
  product?: IProduct;
  handleFavorite: () => Promise<void>;
}

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: { children: ReactNode }){
  const { query } = useRouter();
  const [ product, setProduct ] = useState<IProduct>();

  const handleFavorite = async () => {
    await api.post(`/favorite/${product?.id}`);
  }

  useEffect(() => {
    if(!query.id) return;

    (async () => {
      const { data } = await api.get(`/products/${query.id}`);
      setProduct(data);
      console.log(data);
    })()
  },[query])

  return(
    <ProductContext.Provider
      value={{ 
        product,
        handleFavorite
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct(){
  return useContext(ProductContext);
}