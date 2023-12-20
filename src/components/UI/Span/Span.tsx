import React from "react";
import { StyledSpan } from "./Span.style";

type SpanProps = {
  SpanText: string;
};

export const Span = ({ SpanText }: SpanProps) => {
  return (
    <StyledSpan>
      <span>{SpanText}</span>
    </StyledSpan>
  );
};
