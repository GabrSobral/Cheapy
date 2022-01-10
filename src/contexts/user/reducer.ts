export type IUserState = {
  name: string;
  photo: string;
}
export type IUserAction =
  | { type: "setUser", payload: { user: IUserState } }

export function UserReducer(state: IUserState, action: IUserAction): IUserState{
  switch(action.type) {
    case "setUser": 
      return { ...action.payload.user, name: action.payload.user.name.split(" ")[0] };

    default: return state;
  }
}