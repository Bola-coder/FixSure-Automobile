import React from "react";
import {
  FaTrophy,
  FaThumbsUp,
  FaUsers,
  FaGripLines,
} from "react-icons/fa";
import styles from "./../../../Styles/AboutUs/LandingAbout.module.css";

const LandingAbout = () => {
  return (
    <div className={styles.aboutContent}>
      <p className={styles.aboutTitle}>About Us</p>
      <h2 className={styles.aboutHead}>
        WE DELIVER SOUND ENGINE AND BODY PROJECTS
      </h2>
      <p className={styles.aboutTextContent}>
        We are rethoric question ran over her cheek When she reached the first
        hills of the Italic Mountains, she had a last view back on the skyline
        of her hometown Bookmarksgrove, the headline of Alphabet Village and the
        subline of her own road, the Line Lane.
      </p>
      <div className={styles.characteristics}>
        <div className={styles.characteristic}>
          <FaTrophy />
          <p>WE'VE REPUTION FOR EXCELLENCE</p>
        </div>
        <div className={styles.characteristic}>
          <FaGripLines />
          <p>WE BUILD PARTNERSHIPS</p>
        </div>
        <div className={styles.characteristic}>
          <FaThumbsUp />
          <p>GUIDED BY COMMITMENT</p>
        </div>
        <div className={styles.characteristic}>
          <FaUsers />
          <p>A TEAM OF PROFESSIONALS</p>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
