import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";

type StyledProps = {
  isPrimary?: boolean;
  isSecondary?: boolean;
};

export const GreetingContainer = styled.div<StyledProps>`
  text-align: center;
  margin: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn 2.5s ease-out forwards;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  h1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  h1::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(200 100% 80%);
    z-index: -1;
    transition: transform 0.3s ease;
  }

  h1 {
    position: relative;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 52px;
    }
  }
`;

export const GreetingTitle = styled.h1`
  font-size: 88px;
  color:${(props) => props.theme.colors.black}; 
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 44px;
    margin-bottom: 20px;
  }
`;

export const ActionText = styled.p`
  font-size: 32px;
  color:${(props) => props.theme.colors.ActionText};
`;

export const ButtonContainer = styled.div`
  margin-top: 28px;
  display: flex;
  gap: 24px;
`;

export const LinkButton = styled.button`
  text-decoration: none;
  padding: 15px 0; 
  width: 150px; 
  font-size: 20px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s, box-shadow 0.3s;
`;
