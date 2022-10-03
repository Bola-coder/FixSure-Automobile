import React from "react";
import styles from "./../../../Styles/OrganisationCharts/Charts.module.css";

const ChartContent = ({ content }) => {
  return (
    <div className={styles.chartContent}>
      <p className={styles.icon}>{content.icon}</p>
      <p className={styles.number}>{content.number}</p>
      <p className={styles.text}>{content.text}</p>
    </div>
  );
};

export default ChartContent;
