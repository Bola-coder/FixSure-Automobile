import React, { useState, useEffect } from "react";
// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import FirstBanner from "./FirstBanner";
import SecondBanner from "./SecondBanner";
import ThirdBanner from "./ThirdBanner";
// import BannerCTA from "./BannerCTA";
// import styles from "./../../../Styles/Banner/Banner.module.css";
import BannerLayout from "./BannerLayout";

const Banner = () => {
  const [activeBanner, setActiveBanner] = useState(0);

  const handleActiveBanner = () => {
    if (activeBanner >= 0 && activeBanner < 2) {
      setActiveBanner((prev) => prev + 1);
    } else if (activeBanner >= 2) {
      setActiveBanner((prev) => 0);
    }
    // console.log(activeBanner);
  };
  useEffect(() => {
    const myInterval = setInterval(() => {
      handleActiveBanner();
    }, 4000);

    // Cleanup function
    return () => {
      clearInterval(myInterval);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeBanner]);

  const decrementBannerCount = () => {
    if (activeBanner <= 2 && activeBanner > 0) {
      setActiveBanner((prev) => prev - 1);
    } else if (activeBanner === 0) {
      setActiveBanner((prev) => 0);
    }
  };

  if (activeBanner === 0) {
    return (
      <BannerLayout
        banner={<FirstBanner />}
        incrementFunction={handleActiveBanner}
        decrementFunction={decrementBannerCount}
      />
    );
  } else if (activeBanner === 1) {
    return (
      <BannerLayout
        banner={<SecondBanner />}
        incrementFunction={handleActiveBanner}
        decrementFunction={decrementBannerCount}
      />
    );
  } else {
    return (
      <BannerLayout
        banner={<ThirdBanner />}
        incrementFunction={handleActiveBanner}
        decrementFunction={decrementBannerCount}
      />
    );
  }
};

export default Banner;
