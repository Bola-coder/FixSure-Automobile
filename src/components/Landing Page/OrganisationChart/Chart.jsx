import React, { useState } from "react";
import { FaCar, FaUser, FaClock, FaGlobe } from "react-icons/fa";
import ChartContent from "./ChartContent";
import styles from "./../../../Styles/OrganisationCharts/Charts.module.css";

const Chart = () => {
  const [projects, setProjects] = useState(0); //1789
  const [staff, setStaffs] = useState(0); //647
  const [hour, setHour] = useState(0); // 4000
  const [country, setCountry] = useState(0); //44
  const chartContents = [
    {
      icon: <FaCar />,
      number: projects,
      text: "TOTAL PROJECTS",
    },
    {
      icon: <FaUser />,
      number: staff,
      text: "STAFF MEMBERS",
    },
    {
      icon: <FaClock />,
      number: hour,
      text: "HOURS OF WORK",
    },
    {
      icon: <FaGlobe />,
      number: country,
      text: "COUNTRY EXPERIENCES",
    },
  ];

  const iterateValues = (end, state, update) => {
    if (state < end) {
      update((prev) => prev + 1);
    } else {
      update(end);
    }
  };

  const countInterval = setInterval(() => {
    iterateValues(1789, projects, setProjects);
    iterateValues(647, staff, setStaffs);
    iterateValues(4000, hour, setHour);
    iterateValues(44, country, setCountry);
  }, 20);

  // clearInterval(countInterval);
  return (
    <section className={styles.charts}>
      {chartContents.map((chartContent, index) => (
        <ChartContent content={chartContent} key={index} />
      ))}
    </section>
  );
};

export default Chart;
