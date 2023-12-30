import React from "react";
import styles from "./Experience.module.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.experienceHeading}>Experience</div>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardLeft}>
          <div className={styles.experienceCardHeading}>
            Software Engineering Intern
          </div>
          <div className={styles.experienceCardSubHeading}>BlockFlow</div>
          <div className={styles.experienceCardDuration}>
            Aug 2023 - Nov 2023
          </div>
        </div>
        <div className={styles.experienceCardRight}></div>
      </div>
      <div className={styles.experienceCard}>
        <div className={styles.experienceCardLeft}>
          <div className={styles.experienceCardHeading}>
            Software Engineering Intern
          </div>
          <div className={styles.experienceCardSubHeading}>
            Push Protocol | EPNS
          </div>
          <div className={styles.experienceCardDuration}>
            May 2023 - Aug 2023
          </div>
        </div>
        <div className={styles.experienceCardRight}></div>
      </div>
    </div>
  );
};

export default Experience;
