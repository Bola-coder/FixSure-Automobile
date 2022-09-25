import React from "react";
import styles from "./../../../Styles/Banner/SecondBanner.module.css";

const SecondBanner = () => {
  return (
    <div className={styles.secondBanner}>
      <div className={styles.secondBanner__text}>
        <h3>Meet Our Engineers</h3>
        <p>We believe in Sustainability</p>
      </div>
      <div className={styles.secondBanner__buttons}>
        <button className={styles.quoteBtn}>Get A Quote</button>
        <button className={styles.learnMoreBtn}>Learn More</button>
      </div>
    </div>
  );
};

export default SecondBanner;
