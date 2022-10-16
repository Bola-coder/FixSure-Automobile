import React from "react";
import {
  FaCar,
  FaCarAlt,
  FaToolbox,
  FaTools,
  FaTractor,
  FaTruck,
} from "react-icons/fa";
import WhatWeDoText from "./WhatWeDoText";
import Images from "../../../utilities/Images";
import styles from "./../../../Styles/WhatWeDo/WhatWeDo.module.css";

const WhatWeDo = () => {
  const texts = [
    {
      icon: <FaCar />,
      header: "CAR MAINTAINANCE",
      textConent:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat",
    },
    {
      icon: <FaCarAlt />,
      header: "BUILDING REMODELS",
      textConent:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat",
    },
    {
      icon: <FaToolbox />,
      header: "ENGINE REPAIR",
      textConent:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat",
    },
    {
      icon: <FaTools />,
      header: "PAINTING AND SPLAHING",
      textConent:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat",
    },
    {
      icon: <FaTractor />,
      header: "AUTO EXCHANGE",
      textConent:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat",
    },
    {
      icon: <FaTruck />,
      header: "SAFETY MANAGEMENT",
      textConent:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Integer adipiscing erat",
    },
  ];

  const textLength = texts.length;
  console.log(texts.slice(0, textLength / 2));
  return (
    <section className={styles.whatWeDo}>
      <div className={styles.whatWeDoHeader}>
        <p>WE ARE SPECIALIST IN </p>
        <h3>WHAT WE DO </h3>
      </div>
      <div className={styles.whatWeDoContent}>
        <div className={styles.whatWeDoText}>
          {texts.slice(0, textLength / 2).map((text, index) => (
            <WhatWeDoText
              key={index}
              icon={text.icon}
              header={text.header}
              textContent={text.textConent}
            />
          ))}
        </div>
        <div className={styles.whatWeDoImage}>
          <img src={Images.serviceMan} alt="Service Man" />
        </div>
        <div className={styles.whatWeDoText}>
          {texts.slice(textLength / 2, textLength + 1).map((text, index) => (
            <WhatWeDoText
              key={index}
              icon={text.icon}
              header={text.header}
              textContent={text.textConent}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
