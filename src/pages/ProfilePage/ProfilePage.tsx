import React from "react";
import Logo from "../../components/UI/Logo/Logo";
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
} from "./ProfilePage.style";
import { Heading } from "../../components/Typography/Heading";
import { Container } from "../../components/UI/Container/Container.style";

export const ProfilePage = () => {
  const storedDataString = localStorage.getItem("registrationFormData");

  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const username = storedData ? storedData[0] : "N/A";
  const useremail = storedData ? storedData[1] : "N/A";

  return (
    <Container>
      <Logo />
      <StyledProfilePage>
        <AvatarContainer>
          <StyledAvatar />
        </AvatarContainer>
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
  );
};
