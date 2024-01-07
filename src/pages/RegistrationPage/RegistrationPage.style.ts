import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";


export const StyledRegistrationPage = styled.div`
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  margin-top: -84px;

  h1 {
    margin-bottom: 50px;
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
    margin-top: 44px;
    width: 70%;
  }
`;
