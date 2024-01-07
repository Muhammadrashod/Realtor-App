import React from "react";
import { LogoContainer, StyledHeader } from "./GreetingHeader.style";
import Logo from "../../../components/UI/Logo/Logo";

export const GreetingHeader = () => {
  return (
    <StyledHeader>
      <LogoContainer>
        <Logo />
      </LogoContainer>
    </StyledHeader>
  );
};
