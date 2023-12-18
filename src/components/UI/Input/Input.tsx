import React from "react";
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

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
      <StyledInput
        $isError={isError}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  );
};
