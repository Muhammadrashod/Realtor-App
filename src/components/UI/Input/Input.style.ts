import styled, { css } from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
interface IStyledInputProps {
  $isError: boolean;
}

export const StyledInput = styled.input<IStyledInputProps>`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  display: block;
  width: 100%;
  border: #c1c6d3;
  background-color: transparent;
  padding: 12px 15px;
  background-color: whitesmoke;
  border-radius: 10px;

  ${(props) =>
    props.$isError &&
    css`
      border-color: red;
    `}

  transition: 200ms;

  &:hover,
  &:focus {
    border-color: #526ed3;
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
`;
