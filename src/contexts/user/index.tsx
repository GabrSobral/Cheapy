import { 
  createContext, 
  Dispatch, 
  ReactNode,
  useContext,
  useEffect,
  useReducer
} from "react";
import { api } from "../../services/api";
import { GetUserId } from "../../utils/parseJWT";

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
    if(!GetUserId()) return;
    
    (async () => {
      const { data } = await api.get(`users/show?isSoft=true`)
      UserDispatch({ type: "setUser", payload: { user: { 
        name: data.name,
        photo: data.photo } } 
      });
    })();
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