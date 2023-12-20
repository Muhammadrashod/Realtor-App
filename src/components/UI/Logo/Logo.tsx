// Logo.tsx
import React from "react";
import { css } from "aphrodite";
import styles from "./Logo.style";

const Logo: React.FC = () => {
  return (
    <div className={css(styles.logoContainer)}>
      <img
        src="/realtor.png"
        alt="Realtor Logo"
        className={css(styles.logoImage)}
      />
      <span className={css(styles.logoText)}>Realtor</span>
    </div>
  );
};

export default Logo;
