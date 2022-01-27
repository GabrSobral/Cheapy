import { 
  createContext, 
  Dispatch, 
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from "react";
import { api } from "../../services/api";
import { useUser } from '../user'
import { ICartItem } from "../../types/ICartItem";
import { IProduct } from "../../types/IProduct";

import { IMyCartAction, IMyCartState, MyCartReducer } from "./reducer";
import { getToken } from "../../utils/JsonWebToken";

interface MyCartContextProps {
  MyCartState: IMyCartState;
  MyCartDispatch: Dispatch<IMyCartAction>;
  removeFromCart: (item: ICartItem, index: number) => void;
  addToCart: (item: IProduct) => void;
}

export const MyCartContext = createContext({} as MyCartContextProps);

export function MyCartProvider({ children }: { children: ReactNode }){
  const initialstate = {
    myCartItems: []
  };
  const [ MyCartState, MyCartDispatch ] = useReducer(MyCartReducer, initialstate);

  useEffect(() => {
    if(!getToken()) return;

    (async () => {
      const { data } = await api.get("/shopping/my-list");
      MyCartDispatch({ type: "setMyCartItems", payload: { data } });
    })()
  },[]);

  const removeFromCart = async (item: ICartItem, index: number) => {
    MyCartDispatch({ type: "deleteItem", payload: { index }});
  };

  const addToCart = async (item: IProduct) => {
    const newItem: ICartItem = {
      id: item.id,
      name: item.name,
      thumb: item.thumb,
      stock: item.stock,
      price: item.price,
      discount: item.discount,
      quantity: 1
    };
    MyCartDispatch({ type: "addItem", payload: { data: newItem }});
  };

  return(
    <MyCartContext.Provider
      value={{ 
        MyCartState,
        MyCartDispatch,
        removeFromCart,
        addToCart
      }}
    >
      {children}
    </MyCartContext.Provider>
  )
}

export function useMyCart(){
  return useContext(MyCartContext);
}