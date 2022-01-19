export type ISignUpState = {
  name: string,
  email: string,
  password: string,
  confirmationPassword: string,
  CPF: string;
  token: string;
  CEP: string;
  city: string;
  state: string;
  country: string;
}

export type ISignUpAction = 
| { type: "setName", payload: { data: string } }
| { type: 'setEmail', payload: { data: string } }
| { type: 'setPassword', payload: { data: string } }
| { type: 'setConfirmation', payload: { data: string } }
| { type: 'setCPF', payload: { data: string } }
| { type: 'setToken', payload: { data: string } }
| { type: 'setCity', payload: { data: string } }
| { type: 'setCEP', payload: { data: string } }
| { type: 'setState', payload: { data: string } }
| { type: 'setCountry', payload: { data: string } }

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
    case 'setCity': 
      return { ...state, city: action.payload.data }
    case 'setCEP': 
      return { ...state, CEP: action.payload.data }
    case 'setState': 
      return { ...state, state: action.payload.data }
    case 'setCountry': 
      return { ...state, country: action.payload.data }
  }
}
