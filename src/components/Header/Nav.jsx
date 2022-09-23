import React from "react";
import styles from "./../../Styles/Header/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__contents}>
        <div className={styles.nav__content}>
          <p>Home</p>
        </div>
        <div className={styles.nav__content}>
          <p>Company</p>
        </div>
        <div className={styles.nav__content}>
          <p>Projects</p>
        </div>
        <div className={styles.nav__content}>
          <p>Services</p>
        </div>
        <div className={styles.nav__content}>
          <p>News</p>
        </div>
        <div className={styles.nav__content}>
          <p>Contact</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
