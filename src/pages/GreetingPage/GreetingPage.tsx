// GreetingPage.tsx

import React from "react";
import {
  GreetingContainer,
  GreetingTitle,
  ActionText,
  ButtonContainer, // Add the ButtonContainer import
} from "./GreetingPage.style";
import Logo from "../../components/UI/Logo/Logo";
import { LinkButton } from "../../components/UI/LinkButton";

const GreetingPage: React.FC = () => {
  return (
    <>
      <Logo />
      <GreetingContainer>
        <GreetingTitle>Добро Пожаловать</GreetingTitle>
        <ActionText>Выберите Действие</ActionText>
        <ButtonContainer>
          <LinkButton path="/login" buttonText="Залогиниться" />
          <LinkButton path="/registration" buttonText="Зарегистрироваться" />
        </ButtonContainer>
      </GreetingContainer>
    </>
  );
};

export default GreetingPage;
