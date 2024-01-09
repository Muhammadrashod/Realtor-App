import React from "react";
import { StyledLink } from "./Link.style";

interface LinkProps {
  href: string;
  text: string;
}

export const Link = ({ href, text }: LinkProps) => {
  return (
    <StyledLink href={href}>
      {text}
    </StyledLink>
  );
};
