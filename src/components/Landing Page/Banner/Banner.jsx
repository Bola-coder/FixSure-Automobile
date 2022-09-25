import React from "react";
import FirstBanner from "./FirstBanner";
import styles from "./../../../Styles/Banner/Banner.module.css";
import BannerCTA from "./BannerCTA";

const Banner = () => {
  return (
    <section className={styles.banner}>
      <FirstBanner />
      <BannerCTA />
    </section>
  );
};

export default Banner;
