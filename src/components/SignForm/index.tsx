import { FormEvent } from "react"
import { Button } from "../Button"
import { Input } from "../Input"

export interface InputData {
  value: string;
  setValue: (value: string) => void;
  type: "text" | "email" | "password";
  title: string;
  maxLength?: number;
}

interface Props {
  inputs: InputData[];
  onSubmit: (event: FormEvent<Element>) => Promise<void> | void;
  buttonText?: string;
  buttonDisabled : boolean;
  isLoading?: boolean;
  errorMessage: string;
}

export const SignForm = ({ 
  inputs, 
  onSubmit, 
  buttonText = "Continuar", 
  buttonDisabled,
  isLoading = false,
  errorMessage }: Props) => {
  return(
    <form onSubmit={onSubmit}>
      { inputs.map((input) => 
        <Input
          key={input.title}
          value={input.value}
          setValue={input.setValue}
          type={input.type}
          title={input.title}
          maxLength={input.maxLength}
        />
      ) }
      <span style={{ color: "red", margin: "auto" }}>{errorMessage}</span>
      <Button
        text={buttonText}
        icon={{ name: "arrowRight", color: "#ffffff" }}
        disabled={buttonDisabled}
        type="submit"
        isLoading={isLoading}
      />
    </form>
  )
}