import React from "react";
import { FaCar, FaUser, FaClock, FaGlobe } from "react-icons/fa";
import Images from "./../../../utilities/Images";
import ChartContent from "./ChartContent";
import styles from "./../../../Styles/OrganisationCharts/Charts.module.css";

const Chart = () => {
  const chartContents = [
    {
      icon: <FaCar />,
      number: "1789",
      text: "TOTAL PROJECTS",
    },
    {
      icon: <FaUser />,
      number: "647",
      text: "STAFF MEMBERS",
    },
    {
      icon: <FaClock />,
      number: "4000",
      text: "HOURS OF WORK",
    },
    {
      icon: <FaGlobe />,
      number: "44",
      text: "COUNTRY EXPERIENCES",
    },
  ];

  return (
    <section className={styles.charts}>
      {chartContents.map((chartContent) => (
        <ChartContent content={chartContent} />
      ))}
    </section>
  );
};

export default Chart;
