import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Input } from "../../components/UI/Input/Input";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledForgetPasswordPage } from "./ForgetPasswordPage.style";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "../../components/UI/Logo/Logo";

interface IForgetPasswordForm {
  userphone: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const ForgetPasswordFormSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательное поле!"),
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

  const onRegistrationSubmit: SubmitHandler<IForgetPasswordForm> = (data) => {
    console.log("DATA: ", data);
  };

  return (
    <Container>
      <Logo />
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
    </Container>
  );
};
