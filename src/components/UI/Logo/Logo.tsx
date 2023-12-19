import React from "react";
import { css } from "aphrodite";
import styles from "./Logo.style";

const Logo: React.FC = () => {
  return (
    <div className={css(styles.logoContainer, styles.logoHover)}>
      <img
        src="/realtor.png"
        alt="Realtor Logo"
        className={css(styles.logoImage)}
      />
      <span className={css(styles.logoText, styles.logoHover)}>Realtor</span>
    </div>
  );
};

export default Logo;
