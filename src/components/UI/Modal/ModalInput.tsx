import React from "react";
import { InputContainer } from "../Input/Input.style";
import { StyledModalInput } from "./ModalInput.style";

interface InputProps {
  placeholder: string;
  type: string;
  errorMessage?: string;
  isError: boolean;
}

export const Input = ({ placeholder, type, ...props }: InputProps) => {
  return (
    <InputContainer>
      <StyledModalInput type={type} placeholder={placeholder} {...props} />
    </InputContainer>
  );
};
