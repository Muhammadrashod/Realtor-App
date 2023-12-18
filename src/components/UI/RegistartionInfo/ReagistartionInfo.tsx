import { StyledRegistrationInfo } from "./RegistrationInfo.styles";

interface IRegForm {
  question: string;
  linkLabel: string;
  linkURL: string;
}
export const RegistrationInfo = ({question, linkLabel, linkURL}: IRegForm ) => {
  return (
    <StyledRegistrationInfo>
      <span>
        У вас нет аккаунта? <a href="/registration">Зарегистрироваться</a>
      </span>
    </StyledRegistrationInfo>
  );
};
