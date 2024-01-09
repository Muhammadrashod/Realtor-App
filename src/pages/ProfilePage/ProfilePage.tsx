import React from "react";
import { useLocation } from "react-router-dom";
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
  const location = useLocation();
  const userData = location.state?.userData || {};

  const username = userData?.useremail || "N/A";
  const userpassword = userData?.userpassword || "N/A";
  const userlastname = userData?.userlastname || "N/A";
  const userage = userData?.userage || "N/A";
  const usercity = userData?.usercity || "N/A";
  // Add more properties as needed

  return (
    <>
      <Header />
      <Container>
        <AvatarTextContainer>
          <Heading headingText={`${username}`} headingType="h3" />
        </AvatarTextContainer>
        <HeadingContainer>
          <Heading headingText="Ваш Профиль" headingType="h1" />
        </HeadingContainer>

        <StyledProfilePage>
          <StyledAvatar />
          <InfoContainer>
            <InfoText>
              <Heading headingText={`Почта: ${username}`} />
              <Heading headingText={`Пароль: ${userpassword}`} />
              <Heading headingText={`Фамилия: ${userlastname}`} />
              <Heading headingText={`Возраст: ${userage}`} />
              <Heading headingText={`Город: ${usercity}`} />
              {/* Add more lines for other user data */}
            </InfoText>
          </InfoContainer>
        </StyledProfilePage>

        <StyledParametrs>
          <Heading headingText="Text" />
          <IconContainer>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <Heading headingText="Избранные" headingType="h3" />
            <IconButton aria-label="settings">
              <Settings />
            </IconButton>
            <Heading headingText="Настройки" headingType="h3" />
            <IconButton aria-label="Logout">
              <LogoutIcon />
            </IconButton>
          </IconContainer>
          <Heading headingText="Выйти" headingType="h3" />
        </StyledParametrs>
      </Container>
    </>
  );
};
