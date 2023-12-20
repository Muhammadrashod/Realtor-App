import { StyledRegistrationInfo } from "./RegistrationInfo.styles";

interface IRegForm {
  question: string;
  linkLabel: string;
  linkURL: string;
}

export const RegistrationInfo = ({ question, linkLabel, linkURL }: IRegForm) => {
  return (
    <StyledRegistrationInfo>
      <span>
        {question} <a href={linkURL}>{linkLabel}</a>
      </span>
    </StyledRegistrationInfo>
  );
};
