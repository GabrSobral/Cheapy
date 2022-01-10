import { 
  createContext, 
  Dispatch, 
  ReactNode,
  useContext,
  useReducer
} from "react";

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