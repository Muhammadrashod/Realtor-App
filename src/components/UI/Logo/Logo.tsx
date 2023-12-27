// Logo.tsx
import React from "react";
import { css } from "aphrodite";
import LogoStyles from "./Logo.style";
const Logo: React.FC = () => {
  return (
    <div className={css(LogoStyles.logoContainer)}>
      <img
        src="/realtor.png"
        alt="Realtor Logo"
        className={css(LogoStyles.logoImage)}
      />
      <span className={css(LogoStyles.logoText)}>Realtor</span>
    </div>
  );
};

export default Logo;
