import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  StyledProfilePage,
  IconContainer,
  InfoContainer,
  InfoText,
} from "./ProfilePage.style";

export const ProfilePage = () => {
  return (
    <StyledProfilePage>
      <Logo />
      <IconContainer>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Log out">
          <LogoutIcon />
        </IconButton>
      </IconContainer>
      <InfoContainer>
        <InfoText>
          <p>Name: {localStorage.getItem("registrationFormData")}</p>
          <p>Email: {localStorage.getItem("loginFormData")}</p>
        </InfoText>
      </InfoContainer>
    </StyledProfilePage>
  );
};
