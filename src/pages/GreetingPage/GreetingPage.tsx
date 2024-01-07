import React from "react";
import {
  GreetingContainer,
  GreetingTitle,
  ActionText,
  ButtonContainer,
  TitleContainer, // Add the ButtonContainer import
} from "./GreetingPage.style";
import { LinkButton } from "../../components/UI/LinkButton";
import { GreetingHeader } from "./GreetingHeader/GreetingHeader";

const GreetingPage: React.FC = () => {
  return (
    <>
    <GreetingHeader />
      <GreetingContainer>
        <TitleContainer>
        <GreetingTitle>Добро Пожаловать</GreetingTitle>
        </TitleContainer>
        <ActionText>Выберите Действие</ActionText>
        <ButtonContainer>
          <LinkButton path="/login" buttonText="Sign In" />
          <LinkButton path="/registration" buttonText="Sign Up" />
        </ButtonContainer>
      </GreetingContainer>
    </>
  );
};

export default GreetingPage;
