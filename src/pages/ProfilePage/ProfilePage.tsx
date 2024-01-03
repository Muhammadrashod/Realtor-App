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
import { Heading } from "../../components/Typography/Heading";

export const ProfilePage = () => {
  const storedDataString = localStorage.getItem("registrationFormData");
  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const username = storedData?.username || "N/A";
  const useremail = storedData?.useremail || "N/A";

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
          <Heading headingText={`Username: ${username}`} />
          <Heading headingText={`Email: ${useremail}`} />
        </InfoText>
      </InfoContainer>
    </StyledProfilePage>
  );
};
