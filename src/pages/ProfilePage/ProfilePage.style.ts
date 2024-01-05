import styled from "styled-components";
import { Avatar as MuiAvatar } from "@mui/material";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledProfilePage = styled.div`
  position: relative;
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background: #fefefe;
  margin: 0 auto;
  width: 990px;
  text-align: center;
  padding: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  overflow: hidden;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: -50px; /* Adjust the distance above the container */
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 75px;
  overflow: hidden;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 90.5%;
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
