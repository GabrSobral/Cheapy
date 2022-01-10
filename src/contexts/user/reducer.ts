import { IUser } from "../../types/IUser"

export type IUserState = {
  name: string;
  photo: string;
}
export type IUserAction =
  | { type: "setUser", payload: { user: IUser } }

export function UserReducer(state: IUserState, action: IUserAction): IUserState{
  switch(action.type) {
    case "setUser": 
      return { 
        name: action.payload.user.name, 
        photo: action.payload.user.photo_url,
      }
    default: return state;
  }
}