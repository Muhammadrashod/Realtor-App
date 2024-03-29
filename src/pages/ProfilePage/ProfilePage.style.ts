import styled from "styled-components";
import { Avatar as MuiAvatar } from "@mui/material";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledProfilePage = styled.div`
  left: 0;
  position: fixed;
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background: #fefefe;
  width: 38%;
  height: 84%;
  margin-top: -100px;
  margin-left: 80px;
  text-align: center;
  padding: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  overflow: hidden;
`;
export const StyledParametrs = styled.div`
  right: 0;
  position: fixed;
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background: #fefefe;
  width: 38%;
  height: 84%;
  margin-top: -100px;
  margin-right: 80px;
  text-align: center;
  padding: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  overflow: hidden;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 8px;
  left: 93%;
  transform: translateX(-50%);
  margin: 10px;
`;

export const HeadingContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  margin: 10px;
  margin-top: -12px;
  h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  h1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  h1::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(200 100% 80%);
    z-index: -1;
    transition: transform 0.3s ease;
  }

  h1 {
    position: relative;
    font-size: 40px;
  }
`;

export const StyledAvatar = styled(MuiAvatar)`
  border: 5px solid #fff;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(4);
`;

export const MiniAvatar = styled(MuiAvatar)`
  display: flex;
  align-items: center;
  position: absolute;
  top: -120px;
  left: 1350px;
  transform: translateX(-50%);
  margin: 10px;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;

    & > * {
      margin-right: 10px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #ccc;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoText = styled.div`
  margin-top: 20px;
  text-align: center;
  display: grid;
  grid-template-rows: auto;
  gap: 44px;
`;

export const StyledParamFields = styled.div`
  margin-top: 50px;
  cursor: pointer;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  & > * {
    margin-right: 20px;
  }

  :before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  :before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(200 100% 80%);
    z-index: -1;
    transition: transform 0.3s ease;
  }
`;
