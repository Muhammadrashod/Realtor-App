import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button/Button";

interface LinkButtonProps {
  path: string;
  buttonText: string;
  isPrimary: boolean;
}

export const LinkButton = ({
  path,
  buttonText,
  isPrimary,
  ...props
}: LinkButtonProps) => {
  return (
    <Link to={path}>
      <Button buttonText={buttonText} isPrimary={isPrimary} {...props} />
    </Link>
  );
};
