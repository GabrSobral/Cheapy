import { FormEvent } from "react"
import { Button } from "../Button"
import { Input, InputCreateProps } from "../Input"

interface Props {
  inputs: InputCreateProps[];
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
          disabled={input.disabled}
        />
      ) }
      {errorMessage && 
        <span style={{ color: "red", margin: "auto" }}>{errorMessage}</span>}
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