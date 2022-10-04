import React, { useState, useEffect } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";
import BannerCTA from "./BannerCTA";
import styles from "./../../../Styles/Banner/Banner.module.css";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  useEffect(() => {
    const handleActiveBanner = () => {
      if (activeBanner >= 0 && activeBanner < 2) {
        setActiveBanner((prev) => prev + 1);
      } else if (activeBanner >= 2) {
        setActiveBanner((prev) => 0);
      }
      // console.log(activeBanner);
    };

    const myInterval = setInterval(() => {
      handleActiveBanner();
    }, 4000);

    // Cleanup function
    return () => {
      clearInterval(myInterval);
    };
  }, [activeBanner]);

  if (activeBanner === 0) {
    return (
      <section className={styles.banner}>
        <div className={styles.leftAngle}>
          <FaAngleLeft />
        </div>
        <div className={styles.rightAngle}>
          <FaAngleRight />
        </div>
        <FirstBanner />
        <BannerCTA />
      </section>
    );
  } else if (activeBanner === 1) {
    return (
      <section className={styles.banner}>
        <div className={styles.leftAngle}>
          <FaAngleLeft />
        </div>
        <div className={styles.rightAngle}>
          <FaAngleRight />
        </div>
        <SecondBanner />
        <BannerCTA />
      </section>
    );
  } else {
    return (
      <section className={styles.banner}>
        <div className={styles.leftAngle}>
          <FaAngleLeft />
        </div>
        <div className={styles.rightAngle}>
          <FaAngleRight />
        </div>
        <ThirdBanner />
        <BannerCTA />
      </section>
    );
  }
};

export default Banner;
