import React from "react";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledRegistrationPage } from "./RegistrationPage.style";
import { Input } from "../../components/UI/Input/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Logo from "../../components/UI/Logo/Logo";

interface IRegistrationForm {
  username: string;
  useremail: string;
  userpassword: string;
}

const registrationFormSchema = yup.object({
  username: yup.string().required("Обьязательное Поле!"),
  useremail: yup.string().email().required("Обьязательное Поле!"),
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
  } = useForm({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      useremail: "",
      userpassword: "",
    },
  });
  const navigate = useNavigate();

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      navigate("/");
    }
  };

return(
    <>
    <h1>hi</h1>
    </>
)

};
