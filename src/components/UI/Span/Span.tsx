import React from "react";
import "./Span.scss";
type SpanProps = {
  SpanText: string;
};

export const Span = ({ SpanText }: SpanProps) => {
  return(
       <h1>{SpanText}</h1>
      )
}
