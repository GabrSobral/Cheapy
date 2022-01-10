import { 
  createContext, 
  Dispatch, 
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from "react";
import { IUser } from "../../types/IUser";

import { IUserState, IUserAction, UserReducer } from "./reducer";

interface UserContextProps {
  UserState: IUserState;
  UserDispatch: Dispatch<IUserAction>;
}

export const UserContext = createContext({} as UserContextProps);

export function UserProvider({ children }: { children: ReactNode }){
  const initialstate = {
    name: "",
    photo: ""
  };
  const [ UserState, UserDispatch ] = useReducer(UserReducer, initialstate);

  useEffect(() => {
    UserDispatch({ type: "setUser", payload: { user: { 
      name: "Gabriel Sobral dos Santos",
      photo: "https://github.com/GabrSobral.png" } } });
  },[UserDispatch])

  return(
    <UserContext.Provider
      value={{ 
        UserState,
        UserDispatch
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser(){
  return useContext(UserContext);
}