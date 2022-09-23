import React from "react";
import FirstBanner from "./FirstBanner";
import styles from './../../Styles/Banner/Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.banner}>
      <FirstBanner />
    </section>
  );
};

export default Banner;
