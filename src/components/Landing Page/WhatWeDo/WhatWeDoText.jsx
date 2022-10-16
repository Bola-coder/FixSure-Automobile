import React from "react";
import styles from "./../../../Styles/WhatWeDo/WhatWeDoText.module.css";

const WhatWeDoText = ({ icon, header, textContent }) => {
  return (
    <div className={styles.textContainer}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <h4>{header}</h4>
        <p>{textContent}</p>
      </div>
    </div>
  );
};

export default WhatWeDoText;
