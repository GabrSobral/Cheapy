import { FormEvent } from "react"
import { Button } from "../Button"
import { Input } from "../Input"

export interface InputData {
  value: string;
  setValue: (value: string) => void;
  type: "text" | "email" | "password";
  title: string
}

interface Props {
  inputs: InputData[];
  onSubmit: (event: FormEvent<Element>) => Promise<void>;
  buttonText?: string;
  buttonDisabled : boolean;
}

export const SignForm = ({ 
  inputs, 
  onSubmit, 
  buttonText = "Continuar", 
  buttonDisabled}: Props) => {
  return(
    <form onSubmit={onSubmit}>
      { inputs.map((input) => 
        <Input
          key={input.title}
          value={input.value}
          setValue={input.setValue}
          type={input.type}
          title={input.title}
        />
      ) }

      <Button
        text={buttonText}
        imageSrc="/ArrowRightWhite.svg"
        imageAlt="Seta para prosseguir"
        disabled={buttonDisabled}
        type="submit"
      />
    </form>
  )
}