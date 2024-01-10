import styled from "styled-components";

type StyledButtonProps = {
  isPrimary?: boolean;
  isDisabled?: boolean;
  isSecondary?: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primeColor};
  transition: 200ms;
  width: 100%;
  margin-bottom: 30px;
  border-color: ${(props) => props.theme.colors.primeColor};

  ${(props) =>
    props.isPrimary &&
    `
 background-color: var(--prime-color);
 color: white;
 `}

  ${(props) =>
    props.isSecondary &&
    `
 background-color: var(--light-gray);
 color: vsr(--placeholder-color);
 `}

  ${(props) =>
    props.isDisabled &&
    `
    background-color: var(--disabledBgc)};
    border-color: var(--disabledBgc)};
 `}

  background-color: ${(props) => props.theme.colors.primeColor};
  color: ${(props) => props.theme.colors.elemsBgc};

  &:disabled {
    background-color: ${(props) => props.theme.colors.disabledBgc};
    border-color: ${(props) => props.theme.colors.disabledBgc};
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
`;
