import styled from "styled-components";
import { Avatar as MuiAvatar } from "@mui/material";
import "../../components/UI/FadeIn/FadeInAnimation.css";

export const StyledProfilePage = styled.div`
  position: relative;
  box-shadow: 0 0 10px #e3e3e3;
  border-radius: 20px;
  background-color: #fff;
  margin: 0 auto;
  width: 80%;
  max-width: 500px;
  text-align: center;
  padding: 40px;
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
  overflow: hidden;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 75px;
`;

export const StyledAvatar = styled(MuiAvatar)`
  width: 100%;
  height: 100%;
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
