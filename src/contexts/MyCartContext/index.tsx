import { 
  createContext, 
  Dispatch, 
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from "react";
import { api } from "../../services/api";
import { ICartItem } from "../../types/ICartItem";
import { IProduct } from "../../types/IProduct";

import { IMyCartAction, IMyCartState, MyCartReducer } from "./reducer";
import { getToken } from "../../utils/JsonWebToken";
import { useRouter } from "next/router";

interface MyCartContextProps {
  MyCartState: IMyCartState;
  MyCartDispatch: Dispatch<IMyCartAction>;
  removeFromCart: (item: ICartItem, index: number) => void;
  addToCart: (item: IProduct) => void;
  Pay : () => Promise<void>;
}

export const MyCartContext = createContext({} as MyCartContextProps);

export function MyCartProvider({ children }: { children: ReactNode }){
  const initialstate = {
    myCartItems: []
  };
  const [ MyCartState, MyCartDispatch ] = useReducer(MyCartReducer, initialstate);
  const { push } = useRouter();

  useEffect(() => {
    if(!getToken()) return;

    (async () => {
      const { data } = await api.get("/shopping/my-list");
      MyCartDispatch({ type: "setMyCartItems", payload: { data } });
    })();
  },[]);

  const removeFromCart = async (item: ICartItem, index: number) => {
    await api.delete(`/shopping/${item.id}`);
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
    await api.post("/shopping/add", { productId: item.id, quantity: 1 });
  };

  const Pay = async () => {
    const data = MyCartState.myCartItems.map(item => ({
      productId : item.id,
      quantity: item.quantity
    }))
    const { data: response } = await api.post("/payment/checkout", data);
    push(response.url);
  }

  return(
    <MyCartContext.Provider
      value={{ 
        MyCartState,
        MyCartDispatch,
        removeFromCart,
        addToCart,
        Pay
      }}
    >
      {children}
    </MyCartContext.Provider>
  )
}

export function useMyCart(){
  return useContext(MyCartContext);
}