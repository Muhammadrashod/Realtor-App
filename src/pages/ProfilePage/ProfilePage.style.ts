import styled from "styled-components";
import { Avatar as MuiAvatar } from "@mui/material";
import "../../components/UI/FadeIn/FadeInAnimation.css";


export const StyledProfilePage = styled.div`
  left: 0; /* Set to the left edge of the page */
  position: fixed; /* Use fixed positioning to cover the left half */
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background: #fefefe;
  width: 48%; /* Set width to 50% to cover the left half */
  height: 84%;
  margin-top: -100px;
  margin-left: 20px;
  text-align: center;
  padding: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  overflow: hidden;
`;


export const AvatarContainer = styled.div`
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
  border-radius: 50%;
  position: absolute;
  left: 50%; /* Center horizontally */
  transform: translate(-50%, -50%) scale(5); /* Adjust the scale factor to make it enormous */
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
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoText = styled.div`
  margin-top: 10px;
  text-align: center;
`;
