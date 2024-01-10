import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledMainPage = styled.div`
  animation: fadeIn 2.5s ease-out forwards;
`;

export const CardsContainer = styled.div`
 display: grid;
  grid-template-columns: repeat(4, 1fr); 
  gap: 50px; 

  @media (max-width: 530px) {
    grid-template-columns: repeat(2, 1fr); 
  }
`

export const FavContainer = styled.div`
position: absolute;
margin-top: -50px;
margin-left: 1425px;
`