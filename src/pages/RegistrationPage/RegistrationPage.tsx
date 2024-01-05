import React, { useEffect } from "react";
import { Heading } from "../../components/Typography/Heading";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { Input } from "../../components/UI/Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/UI/Logo/Logo";
import { LoginInfo } from "../../components/UI/LoginInfo/LoginInfo";

interface IRegistrationForm {
  username: string;
  userage: string;
  useremail: string;
  userpassword: string;
}

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userage: yup.string().required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

export const RegistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      userage: "",
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("registrationFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("username", parsedData.username);
      setValue("username", parsedData.userage);
      setValue("useremail", parsedData.useremail);
      setValue("userpassword", parsedData.userpassword);
    }
  }, [setValue]);

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      const formData = getValues(["username", "userage", "useremail", "userpassword"]);
      localStorage.setItem("registrationFormData", JSON.stringify(formData));

      console.log("Form Data:", formData);

      navigate("/profile");
    }
  };

  return (
    <Container>
      <Logo />
      <StyledRegistrationPage>
        <Heading headingText="Регистрация" headingType="h1" />
        <form
          onSubmit={handleSubmit((data) => {
            console.table(data);
            goToNextPage();
          })}
        >
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.username ? true : false}
                errorMessage={errors.username?.message}
                type="text"
                placeholder="Имя"
                {...field}
              />
            )}
          />
          <Controller
            name="userage"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userage ? true : false}
                errorMessage={errors.userage?.message}
                type="number"
                placeholder="Возраст"
                {...field}
              />
            )}
          />
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type="email"
                placeholder="Почта"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type="password"
                placeholder="Пароль"
                {...field}
              />
            )}
          />
          <Button
            disabled={!!Object.keys(errors).length}
            isPrimary
            type="submit"
            buttonText="Зарегистрироваться"
          />
        </form>
        <LoginInfo
          question="У вас есть аккаунт?"
          linkLabel="Войти"
          linkURL="/login"
        />
      </StyledRegistrationPage>
    </Container>
  );
};
