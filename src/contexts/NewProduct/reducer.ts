import { stat } from "fs";

export type INewProductState = {
  name: string,
  description: string,
  discount: string,
  price: string,
  images: File[],
  tags: {  
    id: string;
    name: string;
  }[]
  tagName: string,
  stock: string;
  thumb: File | null,
  previewImages: string[],
  previewThumb: string,
}

export type INewProductAction = 
| { type: "setName", payload: { name: string } }
| { type: "setDescription", payload: { description: string } }
| { type: "setPrice", payload: { price: string } }
| { type: "setThumb", payload: { thumb: File | null } }
| { type: "setImages", payload: { images: File[] | []} }
| { type: "setStock", payload: { stock: string } }
| { type: "setDiscount", payload: { discount: string } }
| { type: "setTagName", payload: { tagName: string } }
| { type: "removeTag", payload: { id: string } }
| { type: "addTag" }
| { type: "deletePreview", payload: { item: string } }
| { type: "selectImages", payload: { files: File[] } }

export function NewProductReducer(
  state: INewProductState, 
  action: INewProductAction
): INewProductState {
  switch(action.type){
    case 'setName': 
      return { ...state, name: action.payload.name };

    case 'setDescription': 
      return { ...state, description: action.payload.description };

    case "setTagName":
      return { ...state, tagName: action.payload.tagName }

    case 'setStock': 
      state.stock = Number(action.payload.stock) < 0 ? "0":action.payload.stock;
      return { ...state };

    case 'removeTag': 
      state.tags =  state.tags.filter(x => x.id !== action.payload.id);
      return { ...state };

    case "deletePreview": 
      state.previewImages = state.previewImages.filter(x => x !== action.payload.item);
      return { ...state };

    case "setThumb": 
    if(!action.payload.thumb) return state;

      state.previewThumb = URL.createObjectURL(action.payload.thumb);
      state.thumb = action.payload.thumb;
      return { ...state };
    
    case "setPrice": 
      const value = action.payload.price;
      const indexOf = value.indexOf(".");

      const price = indexOf >= 0 ? 
        value.substr(0, indexOf) + value.substr(indexOf, 3) : value;
    
      return { ...state, price };

    case "setDiscount":
      const num = Number(action.payload.discount);
      let discount = ""

      if(num > 100)
        discount = "100";
      else if(num < 0 || action.payload.discount === "")
        discount = "0";
      else
        discount = String(parseInt(action.payload.discount, 10))

      return { ...state, discount };

    case "addTag" :
      if(state.tagName.trim() === "") return state;

      const tag = {
        id: String(new Date().getTime()),
        name: state.tagName.trim().toLowerCase()
      }
      return { ...state, tags: [ tag, ...state.tags ], tagName: "" };

    case "selectImages": 
      if(!action.payload.files || action.payload.files.length === 0) 
        return state;
      
      action.payload.files.forEach(image => {
        if(state.images.includes(image)) return;
        
        state.images.push(image);
        state.previewImages.push(URL.createObjectURL(image));
      });
      return { ...state };

    default: return state;
  }
}