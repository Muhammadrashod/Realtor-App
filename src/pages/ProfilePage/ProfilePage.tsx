import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/UI/Header/Header";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { Home } from "@mui/icons-material";
import { Feedback } from "@mui/icons-material";
import { Modal } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/UI/Button/Button";
import { Heading } from "../../components/Typography/Heading";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { Container } from "../../components/UI/Container/Container.style";
import {
  StyledModalContainer,
  StyledModalContent,
  StyledForm,
  StyledInputDiv,
} from "../../components/UI/Modal/Modal.style";
import { StyledModalTextArea } from "../../components/UI/Modal/ModalInput.style";

interface IModalForm {
  feedback: string;
}

const ModalFormSchema = yup.object({
  feedback: yup.string().required("Обязательное поле!"),
});

export const ProfilePage = () => {
  const {
    control: modalControl,
    handleSubmit: handleModalSubmit,
    formState: { errors: modalErrors },
  } = useForm<IModalForm>({
    resolver: yupResolver(ModalFormSchema),
    defaultValues: {
      feedback: "",
    },
  });

  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    if (!storedUserData) {
      navigate("/");
    }
  }, [navigate]);

  const userData = JSON.parse(localStorage.getItem("user") || "{}");

  const username = userData?.useremail || "N/A";
  const userlastname = userData?.userlastname || "N/A";
  const useremail = userData?.useremail || "N/A";
  const userpassword = userData?.userpassword || "N/A";
  const userage = userData?.userage || "N/A";
  const usercity = userData?.usercity || "N/A";

  const handleHomeClick = () => {
    navigate("/main");
  };

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  const handleFeedBackClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedOut(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

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
              <Heading headingText={`Имя: ${username}`} />
              <Heading headingText={`Фамилия: ${userlastname}`} />
              <Heading headingText={`Почта: ${useremail}`} />
              <Heading headingText={`Пароль: ${userpassword}`} />
              <Heading headingText={`Возраст: ${userage}`} />
              <Heading headingText={`Город: ${usercity}`} />
            </InfoText>
          </InfoContainer>
        </StyledProfilePage>

        <StyledParametrs>
          <Heading headingText="Параметры" headingType="h1" />
          <IconContainer>
            <StyledParamFields onClick={handleHomeClick}>
              <IconButton aria-label="go to home">
                <Home />
              </IconButton>
              <Heading headingText="Главная Страница" headingType="h3" />
            </StyledParamFields>

            <StyledParamFields onClick={handleFeedBackClick}>
              <IconButton aria-label="give feedback">
                <Feedback />
              </IconButton>
              <Heading headingText="Обратная связь" headingType="h3" />
            </StyledParamFields>

            <StyledParamFields onClick={handleFavoritesClick}>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <Heading headingText="Избранные" headingType="h3" />
            </StyledParamFields>

            <StyledParamFields onClick={handleLogout}>
              <IconButton aria-label="Logout">
                <LogoutIcon />
              </IconButton>
              <Heading
                headingText={isLoggedOut ? "Вы вышли из аккаунта" : "Выйти"}
                headingType="h3"
              />
            </StyledParamFields>
          </IconContainer>
        </StyledParametrs>
      </Container>

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <StyledModalContainer>
          <StyledModalContent>
            <StyledForm
              onSubmit={handleModalSubmit((data) => {
                console.log(data);
                handleModalClose();
              })}
            >
              <>
                <Heading
                  headingText="Напишите Ваши Предложения "
                  headingType="h2"
                />
                <StyledInputDiv>
                  <Controller
                    name="feedback"
                    control={modalControl}
                    render={({ field }) => (
                      <StyledModalTextArea
                        placeholder="Введите Ваше Предложение"
                        $isError={modalErrors.feedback ? true : false}
                        {...field}
                      />
                    )}
                  />
                </StyledInputDiv>
                <Button isPrimary type="submit" buttonText="Отправить" />
              </>
            </StyledForm>
          </StyledModalContent>
        </StyledModalContainer>
      </Modal>
    </>
  );
};
