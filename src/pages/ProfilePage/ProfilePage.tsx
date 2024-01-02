// ProfilePage.tsx

import React from "react";
import Logo from "../../components/UI/Logo/Logo";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  StyledProfilePage,
  IconContainer,
  InfoContainer,
  InfoText,
} from "./ProfilePage.style";

export const ProfilePage = () => {
  const formData = localStorage.getItem("loginFormData");

  const parsedFormData = formData ? JSON.parse(formData) : {};

  const renderInfo = () => {
    const { name, email } = parsedFormData;

    return (
      <>
        <p>Name: {name}</p>
        {email && <p>Email: {email}</p>}
      </>
    );
  };

  return (
    <StyledProfilePage>
      <Logo />
      <IconContainer>
        <IconButton aria-label="Log out">
          <LogoutIcon />
        </IconButton>
      </IconContainer>
      <InfoContainer>
        <InfoText>{renderInfo()}</InfoText>
      </InfoContainer>
    </StyledProfilePage>
  );
};
