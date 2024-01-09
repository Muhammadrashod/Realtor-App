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
import { GreetingHeader } from "../GreetingPage/GreetingHeader/GreetingHeader";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

const loginFormSchema = yup.object({
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
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      useremail: "",
      userpassword: "",
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("loginFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setValue("useremail", parsedData.useremail);
      setValue("userpassword", parsedData.userpassword);
    }
  }, [setValue]);

  const goToNextPage = (formData: ILoginForm) => {
    const userKey = `${formData.useremail}-${formData.userpassword}`;
    const storedData = localStorage.getItem(userKey);

    if (storedData) {
      console.log("Successfully logged in:", storedData);
      navigate("/profile");
    } else {
      console.error("Incorrect email or password");
    }
  };

  return (
    <>
      <GreetingHeader />
      <Container>
        <StyledLoginPage>
          <Heading headingText="Авторизация" headingType="h1" />
          <form
            onSubmit={handleSubmit((data) => {
              console.table(data);
              goToNextPage(data);
            })}
          >
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
    </>
  );
};
