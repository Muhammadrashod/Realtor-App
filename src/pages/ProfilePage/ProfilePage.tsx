import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/UI/Header/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { Settings } from "@mui/icons-material";
import { Home } from "@mui/icons-material";
import { Feedback } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import {
  StyledProfilePage,
  StyledAvatar,
  IconContainer,
  InfoContainer,
  InfoText,
  HeadingContainer,
  AvatarTextContainer,
  StyledParametrs,
  StyledParamFields,
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
            </InfoText>
          </InfoContainer>
        </StyledProfilePage>

        <StyledParametrs>

          <Heading headingText="Text" />

          <IconContainer>

            <StyledParamFields>
              <IconButton aria-label="go to home">
                <Home />
              </IconButton>
              <Heading headingText="Главная Страница" headingType="h3" />
            </StyledParamFields>

            <StyledParamFields>
              <IconButton aria-label="give a feedback">
                <Feedback />
              </IconButton>
              <Heading headingText="Обратная связь" headingType="h3" />
            </StyledParamFields>

            <StyledParamFields>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Heading headingText="Избранные" headingType="h3" />
            </StyledParamFields>

            <StyledParamFields>
              <IconButton aria-label="settings">
                <Settings />
              </IconButton>
              <Heading headingText="Настройки" headingType="h3" />
            </StyledParamFields>

            <StyledParamFields>
              <IconButton aria-label="Logout">
                <LogoutIcon />
              </IconButton>
          <Heading headingText="Выйти" headingType="h3" />
            </StyledParamFields>
            
            <StyledParamFields>
              <IconButton aria-label="Delete Account">
                <DeleteIcon />
              </IconButton>
          <Heading headingText="Удалить Аккаунт" headingType="h3" />
            </StyledParamFields>
          </IconContainer>
        </StyledParametrs>
      </Container>
    </>
  );
};
