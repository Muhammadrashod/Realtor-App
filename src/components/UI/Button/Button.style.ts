import styled from "styled-components"


export const StyledButton = styled.button`
 cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  color: white;
  transition: 200ms;
  width: 100%;
  margin-bottom: 30px;
  border-color: blueviolet;

  background-color: blueviolet;
  color: white;

  

&:disabled {
    background-color: #C1C6D3;
    border-color: #C1C6D3;
  }
  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
    translate: 0px;
    box-shadow: none;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
  @media (max-width: 730px) {
    padding: 10px 12px;
}
`
