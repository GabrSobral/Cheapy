import { ICartItem } from "../../types/ICartItem"

export type IMyCartState = {
  myCartItems: ICartItem[];
}

export type IMyCartAction = 
| { type: "setMyCartItems", payload: { data: ICartItem[] } }
| { type: 'changeQuantity', payload: { quantity: number, index: number } }
| { type: 'deleteItem', payload: { index: number } }
| { type: 'addItem', payload: { data: ICartItem } }

export function MyCartReducer(state: IMyCartState, action: IMyCartAction): IMyCartState{
  switch(action.type){
    case 'setMyCartItems': 
      return { myCartItems: action.payload.data };

    case "changeQuantity":
      state.myCartItems[action.payload.index].quantity = action.payload.quantity;
      return { myCartItems: state.myCartItems };
    
    case "deleteItem":
      state.myCartItems.splice(action.payload.index, 1);
      return { myCartItems: state.myCartItems };

    case "addItem":
      return { myCartItems: [action.payload.data, ...state.myCartItems] };

    default: return state;
  }
}
