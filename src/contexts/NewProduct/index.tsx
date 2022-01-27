import { useRouter } from "next/router";
import { 
  ChangeEvent,
  createContext, 
  Dispatch, 
  FormEvent, 
  ReactNode,
  useCallback,
  useContext,
  useReducer
} from "react";
import { api } from "../../services/api";

import { INewProductAction, INewProductState, NewProductReducer } from "./reducer";

interface NewProductContextProps {
  NewProductState: INewProductState;
  NewProductDispatch: Dispatch<INewProductAction>;
  AddTag: (event: FormEvent) => void;
  CreateAnnounce: () => void;
}

export const NewProductContext = createContext({} as NewProductContextProps);

export function NewProductProvider({ children }: { children: ReactNode }){
  const initialstate: INewProductState = {
    name: "",         description: "",
    tags: [],         tagName: "",
    price: "",        discount: "",
    images: [],       previewImages: [],
    previewThumb: "", thumb: null,
    stock: ""
  };
  const [ NewProductState, NewProductDispatch ] = useReducer(
    NewProductReducer, 
    initialstate
  );

  const AddTag = useCallback((event: FormEvent) => {
    event.preventDefault();
    NewProductDispatch({ type:"addTag"});
  },[]);

  const CreateAnnounce = useCallback(async () => {
    const productForm = new FormData();

    productForm.append("name",  NewProductState.name);
    productForm.append("price", NewProductState.price);
    productForm.append("stock", NewProductState.stock);
    productForm.append("thumb", NewProductState.thumb || "");
    productForm.append("description", NewProductState.description);

    const { data: productData } = await api.post("/products", productForm);

    NewProductState.images.forEach(async item => {
      const imageForm = new FormData();
      imageForm.append("Photo", item);
      await api.post(`/photos/new/${productData.id}`, imageForm);
    });

    NewProductState.tags.forEach(async item => {
      await api.post("/product/tags", {
        product_id: productData.id,
        name: item.name
      })
    });
  },[NewProductState]);

  return(
    <NewProductContext.Provider
      value={{ 
        NewProductState,
        NewProductDispatch,
        AddTag,
        CreateAnnounce
      }}
    >
      {children}
    </NewProductContext.Provider>
  )
}

export function useNewProduct(){
  return useContext(NewProductContext);
}