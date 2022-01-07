export type ISignUpState = {
  name: string,
  email: string,
  password: string,
  confirmationPassword: string,
  CPF: string;
  token: string;
}

export type ISignUpAction = 
| { type: "setName", payload: { data: string } }
| { type: 'setEmail', payload: { data: string } }
| { type: 'setPassword', payload: { data: string } }
| { type: 'setConfirmation', payload: { data: string } }
| { type: 'setCPF', payload: { data: string } }
| { type: 'setToken', payload: { data: string } }

export function SignUpReducer(state: ISignUpState, action: ISignUpAction): ISignUpState{
  switch(action.type){
    case 'setName': 
      return { ...state, name: action.payload.data }
    case 'setEmail': 
      return { ...state, email: action.payload.data }
    case 'setPassword': 
      return { ...state, password: action.payload.data }
    case 'setConfirmation': 
      return { ...state, confirmationPassword: action.payload.data }
    case 'setCPF': 
      return { ...state, CPF: action.payload.data }
    case 'setToken': 
      return { ...state, token: action.payload.data }
  }
}
