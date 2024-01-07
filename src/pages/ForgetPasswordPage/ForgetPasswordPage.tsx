import React, { useState } from "react";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledForgetPasswordPage } from "./ForgetPasswordPage.style";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";
import { StyledModalInput } from "../../components/UI/Modal/ModalInput.style";
import {
  StyledModalContainer,
  StyledInputDiv,
  StyledForm,
  StyledModalContent,
} from "../../components/UI/Modal/Modal.style";
import { Header } from "../../components/UI/Header/Header";

interface IForgetPasswordForm {
  userphone: string;
}

interface IModalForm {
  verificationCode: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const ForgetPasswordFormSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
});

const ModalFormSchema = yup.object({
  verificationCode: yup.string().required("Обязательное поле!"),
});

export const ForgetPasswordPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgetPasswordForm>({
    resolver: yupResolver(ForgetPasswordFormSchema),
    defaultValues: {
      userphone: "",
    },
  });

  const {
    control: modalControl,
    handleSubmit: handleModalSubmit,
    formState: { errors: modalErrors },
  } = useForm<IModalForm>({
    resolver: yupResolver(ModalFormSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const onRegistrationSubmit: SubmitHandler<IForgetPasswordForm> = (data) => {
    console.log("DATA: ", data);
    handleModalOpen();
  };

  const navigate = useNavigate();

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      navigate("/profile");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <StyledForgetPasswordPage>
          <Heading headingText="Забыли Пароль?" headingType="h1" />
          <form onSubmit={handleSubmit(onRegistrationSubmit)}>
            <Controller
              name="userphone"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.userphone ? true : false}
                  type="text"
                  placeholder="Номер телефона"
                  errorMessage={errors.userphone?.message}
                  {...field}
                />
              )}
            />
            <Button
              disabled={!!Object.keys(errors).length}
              isPrimary
              type="submit"
              buttonText="Отправить"
            />
          </form>
        </StyledForgetPasswordPage>

        <Modal open={isModalOpen} onClose={handleModalClose}>
          <StyledModalContainer>
            <StyledModalContent>
              <StyledForm
                onSubmit={handleModalSubmit((data) => {
                  console.log(data);
                  goToNextPage();
                })}
              >
                <>
                  <Heading
                    headingText="Введите Полученный Код"
                    headingType="h2"
                  />
                  <StyledInputDiv>
                    <Controller
                      name="verificationCode"
                      control={modalControl}
                      render={({ field }) => (
                        <StyledModalInput
                          type="text"
                          placeholder="Введите Код"
                          $isError={modalErrors.verificationCode ? true : false}
                          {...field}
                        />
                      )}
                    />
                  </StyledInputDiv>
                  <Button
                    disabled={!!Object.keys(errors).length}
                    isPrimary
                    type="submit"
                    buttonText="Отправить"
                    onClick={handleModalClose}
                  />
                </>
              </StyledForm>
            </StyledModalContent>
          </StyledModalContainer>
        </Modal>
      </Container>
    </>
  );
};
