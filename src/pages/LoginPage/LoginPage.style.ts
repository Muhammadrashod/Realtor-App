import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledLoginPage = styled.div`
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background-color: #fff;//lightBgc
  margin: 0 auto;
  width: 80%; 
  max-width: 400px; 
  text-align: center;
  padding: 30px; 
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  margin-top: -30px;

  h1 {
    margin-bottom: 30px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: gray;
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 530px) {
    width: 90%; 
    max-width: 100%;
  }
`;
