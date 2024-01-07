import styled from "styled-components";
import "../../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledHeader = styled.header`
  background-color: blueviolet;
  height: 60px;
  opacity: 90%;
  box-shadow: 0 0 10px blueviolet;
  animation: fadeIn 3s ease-out forwards;
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    color 0.3s ease-in-out;
  margin: 0;
`;

export const LogoContainer = styled.div`
  margin-left: 300px;
  height: 100%;
  display: flex;
  align-items: center;
`;
