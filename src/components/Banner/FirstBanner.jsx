import React from "react";
import styles from "./../../Styles/Banner/FirstBanner.module.css";

const FirstBanner = () => {
  return (
    <div className={styles.firstBanner}>
      <div className={styles.firstBanner__text}>
        <h3>12 YEARS OF EXCELLENCE IN THE</h3>
        <p>AUTOMOBILE INDUSTRY</p>
      </div>
      <div className={styles.firstBanner__buttons}>
        <button className={styles.serviceBtn}>Our Services</button>
        <button className={styles.contactBtn}>Contact Us</button>
      </div>
    </div>
  );
};

export default FirstBanner;
