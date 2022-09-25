import React, { useState, useEffect } from "react";
// import FirstBanner from "./FirstBanner";
import styles from "./../../../Styles/Banner/Banner.module.css";
// import BannerCTA from "./BannerCTA";
import SecondBanner from "./SecondBanner";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  useEffect(() => {
    function animateBanner() {
      setInterval(() => {
        while (activeBanner < 2) {
          if (activeBanner === 1) {
            setActiveBanner(0);
          } else {
            setActiveBanner((prev) => prev + 1);
          }
        }
      }, 2000);
    }
    animateBanner();
    return () => {
      clearInterval();
    };
  }, [activeBanner]);
  console.log(activeBanner);

  return (
    <section className={styles.banner}>
      {/* <FirstBanner />
      <BannerCTA /> */}
      <br /> <br /> <br />
      <br /> <br /> <br />
      <SecondBanner />
    </section>
  );
};

export default Banner;
