import styled from "styled-components";

export const StyledLink = styled.a`
  text-decoration: none;
  color: blueviolet;
  position: relative;
  transition: color 0.3s ease;
  font-size: 20px;
  margin: 20px;

  &:hover {
    color: blueviolet;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: blueviolet;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }
`;
