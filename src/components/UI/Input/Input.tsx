import React from "react";
import { InputContainer, StyledInput } from "./Input.style";

interface InputProps {
  placeholder: string;
  type: string;
}

export const Input = ({
  placeholder,
  type,
}: 
InputProps) => (
  <InputContainer>
    <StyledInput 
     type={type}
      placeholder={placeholder} />
  </InputContainer>
);
