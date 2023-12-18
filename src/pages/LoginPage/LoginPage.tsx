import { RegistrationInfo } from "../../components/UI/RegistartionInfo/ReagistartionInfo";
import { Heading } from "../../components/Typography/Heading";
import { StyledLink } from "../../components/Typography/StyledLink";
import { Button } from "../../components/UI/Button/Button";
import { Container } from "../../components/UI/Container/Container.style";
import { StyledLoginPage } from "./LoginPage.style";
import { Input } from "../../components/UI/Input/Input";

export const LoginPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form>
          <Input type="email" placeholder="Почта" />
          <Input  type="password" placeholder="Пароль" />
          <Button isPrimary type="submit" buttonText="Войти" />
        </form>
        <StyledLink to="/" linkText="Забыли пароль?" />
        <RegistrationInfo
          question="У вас нет аккаунта?"
          linkLabel="Зарегистрироваться"
          linkURL="/registration"
        />
      </StyledLoginPage>
    </Container>
  );
};
