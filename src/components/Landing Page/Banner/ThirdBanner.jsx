import React from "react";
import styles from "./../../../Styles/Banner/ThirdBanner.module.css";

const ThirdBanner = () => {
  return (
    <div className={styles.thirdBanner}>
      <div className={styles.thirdBanner__text}>
        <h3>When Service Matters</h3>
        <p>Your Choice is simple</p>
      </div>
      <div className={styles.thirdBanner__buttons}>
        <button className={styles.serviceBtn}>Our Services</button>
      </div>
    </div>
  );
};

export default ThirdBanner;
