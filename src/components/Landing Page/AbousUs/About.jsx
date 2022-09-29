import React from "react";
import LandingAbout from "./LandingAbout";
import OurValues from "./OurValues";
import styles from "./../../../Styles/AboutUs/About.module.css";

const About = () => {
  return (
    <section className={styles.about}>
      <LandingAbout />
      <OurValues />
    </section>
  );
};

export default About;
