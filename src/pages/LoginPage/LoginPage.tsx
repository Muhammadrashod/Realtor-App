import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Container } from "../../components/UI/Container/Container.style";
import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import { StyledLoginPage } from "./LoginPage.style";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { RegistrationInfo } from "../../components/UI/RegistartionInfo/ReagistartionInfo";

interface ILoginForm {
  username: string;
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
  username: yup.string().required("Обязательное поле!"),
  useremail: yup.string().email().required("Обязательное поле!"),
  userpassword: yup
    .string()
    .min(4, "Пароль должен содержать как минимум 4 символа!")
    .required("Обязательное поле!"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      username: "",
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("loginFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("useremail", parsedData.username);
      setValue("useremail", parsedData.useremail);
      setValue("userpassword", parsedData.userpassword);
    }
  }, [setValue]);

  const goToNextPage = () => {
    if (Object.keys(errors).length === 0) {
      const formData = getValues(["username", "useremail", "userpassword"]);
      localStorage.setItem("loginFormData", JSON.stringify(formData));

      console.log("Form Data:", formData);

      navigate("/profile");
    }
  };

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" headingType="h1" />
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
            buttonText="Войти"
          />
        </form>
        <StyledLink to="/forgetpassword" linkText="Забыли пароль?" />
        <RegistrationInfo
          question="У вас нет аккаунта?"
          linkLabel="Зарегистрироваться"
          linkURL="/registration"
        />
      </StyledLoginPage>
    </Container>
  );
};
