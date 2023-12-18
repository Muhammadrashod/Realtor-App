import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 20px;
`

export const ErrorMessage = styled.p`
color: red;
margin-top: 10px;
`

export const StyledInput = styled.input`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  display: block;
  width: 100%;
 border: #C1C6D3;
  background-color: transparent;
  padding: 12px 15px;
  background-color: #C1C6D3;
  border-radius: 10px;

  transition: 200ms;

    &:last-child {
      margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
    border-color: #526ed3;
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

`