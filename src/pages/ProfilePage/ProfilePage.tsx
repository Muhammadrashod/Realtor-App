import React from "react";
import { Header } from "../../components/UI/Header/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { Settings } from "@mui/icons-material";
import {
  StyledProfilePage,
  StyledAvatar,
  IconContainer,
  InfoContainer,
  InfoText,
  HeadingContainer,
  AvatarTextContainer,
  StyledParametrs,
} from "./ProfilePage.style";
import { Heading } from "../../components/Typography/Heading";
import { Container } from "../../components/UI/Container/Container.style";

export const ProfilePage = () => {
  const storedDataString = localStorage.getItem("registrationFormData" || "loginFormData");

  const storedData = storedDataString ? JSON.parse(storedDataString) : null;

  const username = storedData ? storedData[0] : "N/A";
  const useremail = storedData ? storedData[2] : "N/A";

  return (
    <>
      <Header />
    <Container>
      <AvatarTextContainer>
      <Heading headingText={`${username}`} headingType="h3"/>
      </AvatarTextContainer>
      <HeadingContainer>
        <Heading headingText="Ваш Профиль" headingType="h1" />
      </HeadingContainer>

       <StyledProfilePage> 
          <StyledAvatar />
        <InfoContainer>
          <InfoText>
            <Heading headingText={`Имя: ${username}`} />
            <Heading headingText={`Фамилия: ${useremail}`} />
            <Heading headingText={`Возраст: ${useremail}`} />
            <Heading headingText={`Почта: ${useremail}`} />
            <Heading headingText={`Пароль: ${useremail}`} />
            <Heading headingText={`Город: ${useremail}`} />
          </InfoText>
        </InfoContainer>
       </StyledProfilePage>

       <StyledParametrs>
        <Heading headingText="Text"/>
        <IconContainer>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Heading headingText="Избранные" headingType="h3"/>
          <IconButton aria-label="settings">
            <Settings />
          </IconButton>
          <Heading headingText="Настройки" headingType="h3"/>
          <IconButton aria-label="Logout">
            <LogoutIcon />
          </IconButton>
        </IconContainer>
        <Heading headingText="Выйти" headingType="h3"/>
       </StyledParametrs>
    </Container>
    </>
  );
};
