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
import { LoginInfo } from "../../components/UI/LoginInfo/LoginInfo";
import { GreetingHeader } from "../GreetingPage/GreetingHeader/GreetingHeader";
interface IRegistrationForm {
  username: string;
  userlastname: string;
  userage: string;
  useremail: string;
  userpassword: string;
  usercity: string;
}

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  userlastname: yup.string().required("Обязательное поле!"),
  userage: yup.string().required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
  usercity: yup.string().required("Обязательное поле!"),
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
      userlastname: "",
      userage: "",
      useremail: "",
      userpassword: "",
      usercity: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("registrationFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("username", parsedData.username);
      setValue("userlastname", parsedData.userlastname);
      setValue("userage", parsedData.userage);
      setValue("useremail", parsedData.useremail);
      setValue("userpassword", parsedData.userpassword);
      setValue("usercity", parsedData.usercity);
    }
  }, [setValue]);

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      const formData = getValues([
        "username",
        "userlastname",
        "userage",
        "useremail",
        "userpassword",
        "usercity",
      ]);

      const userKey = `${formData[3]}-${formData[4]}`;
      const storedData = localStorage.getItem(userKey);
      const existingData = storedData ? JSON.parse(storedData) : {};
      const mergedData = { ...existingData, ...formData };

      localStorage.setItem(userKey, JSON.stringify(mergedData));

      console.log("Form Data:", mergedData);

      navigate("/profile");
    }
  };

  return (
    <>
      <GreetingHeader />
      <Container>
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
              name="userlastname"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.userlastname ? true : false}
                  errorMessage={errors.userlastname?.message}
                  type="text"
                  placeholder="Фамилия"
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
            <Controller
              name="usercity"
              control={control}
              render={({ field }) => (
                <Input
                  isError={errors.usercity ? true : false}
                  errorMessage={errors.usercity?.message}
                  type="text"
                  placeholder="Город"
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
    </>
  );
};
