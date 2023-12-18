import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary: boolean;
}

export const Button = ({
  buttonText,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} type={type} >
      {buttonText}
    </StyledButton>
  );
};
