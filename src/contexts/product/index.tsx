import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { IProduct } from "../../types/IProduct";

import { useRouter } from "next/router";
import { api } from "../../services/api";

interface ProductContextProps {
  product?: IProduct;
  setProductsContext: (products: IProduct) => void;
}

export const ProductContext = createContext({} as ProductContextProps);

export function ProductProvider({ children }: { children: ReactNode }){
  const [ product, setProduct ] = useState<IProduct>();

  const setProductsContext = useCallback((products: IProduct) => {
    setProduct(products);
  },[]);

  return(
    <ProductContext.Provider
      value={{ 
        product,
        setProductsContext
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProduct(){
  return useContext(ProductContext);
}