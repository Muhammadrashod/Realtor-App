import React from "react";
import { Header } from "../../components/UI/Header/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { Settings } from "@mui/icons-material";
import {
  StyledProfilePage,
  AvatarContainer,
  StyledAvatar,
  IconContainer,
  InfoContainer,
  InfoText,
  HeadingContainer,
  AvatarTextContainer,
} from "./ProfilePage.style";
import { Heading } from "../../components/Typography/Heading";
import { Container } from "../../components/UI/Container/Container.style";
import { MiniAvatar } from "./ProfilePage.style";

export const ProfilePage = () => {
  const storedDataString = localStorage.getItem("registrationFormData" || "loginFormData");

  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const username = storedData ? storedData[0] : "N/A";
  const useremail = storedData ? storedData[2] : "N/A";

  return (
    <>
      <Header />
    <Container>
      <MiniAvatar/>
        <AvatarContainer>
          <StyledAvatar />
        </AvatarContainer>
      <AvatarTextContainer>
      <Heading headingText={`${username}`} headingType="h3"/>
      </AvatarTextContainer>
      <HeadingContainer>
        <Heading headingText="Ваш Профиль" headingType="h1" />
      </HeadingContainer>
       <StyledProfilePage> 
        <InfoContainer>
          <InfoText>
            <Heading headingText={`Имя: ${username}`} />
            <Heading headingText={`Почта: ${useremail}`} />
          </InfoText>
        </InfoContainer>
        <IconContainer>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <Settings />
          </IconButton>
          <IconButton aria-label="Logout">
            <LogoutIcon />
          </IconButton>
        </IconContainer>
       </StyledProfilePage>
    </Container>
    </>
  );
};
