import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const StyledModalInput = styled.input`
  border: 1px solid transparent;
  outline: 0;
  display: block;
  width: 100%;
  background-color: transparent;
  padding: 12px 15px;
  background-color: whitesmoke;
  border-radius: 10px;
  color: black; /* Default text color */
  border: 1px solid #526ed3;


  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    color 0.3s ease-in-out;

  &:hover,
  &:focus {
    border: 1px solid #526ed3;
    box-shadow: 0 0 10px #526ed3;
  }

  &:active {
    border: 1px solid #526ed3;
  }

  &:last-child {
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }

    &:visited {
      color: #303030;
    }
  }

  @media (max-width: 730px) {
    padding: 10px 12px;
  }

  &:visited {
    color: purple; /* Custom color for visited state */
  }

  &::after {
    content: "➡️";
    display: inline-block;
    margin-left: 5px;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
    transform: translateX(0);
  }
`;
