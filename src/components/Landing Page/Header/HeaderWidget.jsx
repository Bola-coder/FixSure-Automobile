import React from "react";
import styles from "./../../../Styles/Header/HeaderWidget.module.css";

const HeaderWidget = () => {
  return (
    <div className={styles.headerWidgets}>
      <div className={styles.logo}>
        <p>FixSure</p>
      </div>
      <div className={styles.widgets}>
        <div className={styles.widget}>
          <p>Call Us</p>
          <b>
            <p>0900000000</p>
          </b>
        </div>
        <div className={styles.widget}>
          <p>Email Us</p>
          <b>
            <p>office@ixsure.com</p>
          </b>
        </div>
        <div className={styles.widget}>
          <button className={styles.widgetButton}>Get A Quote</button>
        </div>
      </div>
    </div>
  );
};

export default HeaderWidget;
