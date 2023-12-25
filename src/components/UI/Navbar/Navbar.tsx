import React from "react";
import { css } from "aphrodite";
import Logo from "../Logo/Logo";
import styles from "./Navbar.style";

const Navbar: React.FC = () => {
  return (
    <div className={css(styles.navbar)}>
      <Logo />
      <div className={css(styles.searchContainer)}>
        <input type="text" className={css(styles.searchInput)} placeholder="Search..." />
      </div>
      <div className={css(styles.themeToggle)}>
        <img src="/sun.png" alt="Sun" className={css(styles.themeToggleIcon)} />
      </div>
    </div>
  );
};

export default Navbar;
