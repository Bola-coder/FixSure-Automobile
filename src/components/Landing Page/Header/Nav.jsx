import React, { useState, useEffect } from "react";
import styles from "./../../../Styles/Header/Nav.module.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    //Function that determines the scroll position
    const scrollFunc = () => {
      window.scrollY > window.innerHeight / 5 ? setShow(true) : setShow(false);
    };
    window.addEventListener("scroll", scrollFunc);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${show ? styles.navFixed : ""}`}>
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
