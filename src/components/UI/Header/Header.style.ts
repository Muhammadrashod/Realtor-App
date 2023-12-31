import styled from "styled-components";
import "../../UI/FadeIn/FadeInAnimation.css";

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

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 10px;
  padding-top: 6px;
`;
