import React from "react";
import {
  StyledModalInput,
  ErrorMessage,
  InputContainer,
} from "./ModalInput.style";

interface InputProps {
  placeholder: string;
  type: string;
  errorMessage?: string;
  isError: boolean;
}

export const Input = ({
  placeholder,
  type,
  errorMessage,
  isError,
  ...props
}: InputProps) => {
  return (
    <InputContainer>
      <StyledModalInput
        $isError={isError}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
