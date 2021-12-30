import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";

import item from '../../mocks/product.json'

interface ProductContextProps {
  product?: IProduct;
}

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: { children: ReactNode }){
  const [ product, setProduct ] = useState<IProduct>();

  useEffect(() => {
    setProduct(item);
  },[])

  return(
    <ProductContext.Provider
      value={{ product }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct(){
  return useContext(ProductContext);
}