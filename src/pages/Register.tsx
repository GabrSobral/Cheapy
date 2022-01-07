import { NextPage } from 'next'
import { RegisterContent } from '../content/RegisterContent';
import { SignUpProvider } from '../contexts/signUp';

const Register: NextPage = () => {
  return(
    <SignUpProvider>
      <RegisterContent/>
    </SignUpProvider>
  )
};

export default Register;