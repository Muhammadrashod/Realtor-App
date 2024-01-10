import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";


type StyledProps = {
  isPrimary?: boolean;
  isSecondary?: boolean;
};

export const StyledForgetPasswordPage = styled.div<StyledProps>`
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray}; 
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.bgc};
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;

  h1 {
    margin-bottom: 50px;
  }

  a {
    display: inline-block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray};
    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 530px) {
    margin-top: 200px;
    width: 100%;
  }
`;
