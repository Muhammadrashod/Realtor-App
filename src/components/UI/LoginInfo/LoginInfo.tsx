import { StyledRegistrationInfo } from "../RegistartionInfo/RegistrationInfo.styles";

interface ILoginForm {
  question: string;
  linkLabel: string;
  linkURL: string;
}

export const LoginInfo = ({question, linkLabel,linkURL }: ILoginForm ) => {
  return (
    <StyledRegistrationInfo>
      <span>
     У вас уже есть аккаунт? <a href="/">Войти</a>
      </span>
    </StyledRegistrationInfo>
  );
};
