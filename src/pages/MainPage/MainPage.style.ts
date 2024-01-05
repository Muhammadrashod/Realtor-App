import styled from "styled-components";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledMainPage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Set three columns with equal width */
  gap: 30px; /* Adjust the gap between elements as needed */
  animation: fadeIn 2.5s ease-out forwards;
`;
