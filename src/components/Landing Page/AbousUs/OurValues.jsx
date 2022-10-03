import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from "./../../../Styles/AboutUs/OurValues.module.css";

const OurValues = () => {
  const [showFaq, setShowFaq] = useState(false);

  const FAQs = [
    {
      id: 0,
      head: "SAFETY",
      content:
        "Minim Austin 3 wolf moon scenester aesthetic, umami odio pariaturbitters. Pop-up occaecat taxidermy street art, tattooed beard literally.",
    },
    {
      id: 1,
      head: "CUSTOMER SERVICE",
      content:
        "Minim Austin 3 wolf moon scenester aesthetic, umami odio pariaturbitters. Pop-up occaecat taxidermy street art, tattooed beard literally.",
    },
    {
      id: 2,
      head: "INTEGRITY",
      content:
        "Minim Austin 3 wolf moon scenester aesthetic, umami odio pariaturbitters. Pop-up occaecat taxidermy street art, tattooed beard literally.",
    },
  ];

  const handleShowDFAQ = (e) => {
    setShowFaq((current) => !current);
    e.currentTarget.classList.toggle(`${styles.active}`);
  };
  console.log(showFaq);

  return (
    <div className={styles.ourValues}>
      <h2 className={styles.ourValues__head}>OUR VALUES</h2>
      <p className={styles.ourValuesText}>
        Minim Austin 3 wolf moon scenester aesthetic, umami odio pariatur
        bitters. Pop-up occaecat taxidermy street art, tattooed beard literally.
      </p>
      {FAQs.map((faq) => (
        <div
          className={styles.faqContent}
          key={faq.id}
          onClick={handleShowDFAQ}
        >
          <p className={styles.faqQuestion}>
            {faq.head} <FaAngleDown className={styles.angleDown} />{" "}
            <FaAngleUp className={styles.angleUp} />
          </p>
          <p className={styles.faqAnswer}>{faq.content}</p>
        </div>
      ))}
    </div>
  );
};

export default OurValues;
