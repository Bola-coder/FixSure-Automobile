import React from "react";
import styles from "./../../../Styles/Banner/BannerCTA.module.css";

const bannerCTA = () => {
  return (
    <div className={styles.bannerCta}>
      <p className={styles.bannerCta__text}>
        We understand your automobile needs
      </p>
      <button className={styles.bannerCta__button}>REQUEST QUOTE</button>
    </div>
  );
};

export default bannerCTA;
