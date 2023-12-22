// GreetingPage.style.ts

import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const GreetingContainer = styled.div`
  text-align: center;
  margin: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0;
  animation: fadeIn 2.5s ease-out forwards;
`;

export const GreetingTitle = styled.h1`
  font-size: 76px;
  color: black;
  margin-bottom: 20px;
`;

export const ActionText = styled.p`
  font-size: 28px;
  color: #555;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

export const LinkButton = styled.button`
  text-decoration: none;
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50px;
  transition: background-color 0.3s, box-shadow 0.3s;
`;
