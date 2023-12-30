import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutText}>
        <div className={styles.aboutHeading}>About Me</div>
        <div className={styles.aboutDescription}>
          I am a 3rd year undergraduate student at IIT Roorkee, pursuing B.Tech
          in Chemical Engineering. I am interested in Software Development,
          DevOps and Blockchain Technology. I am a quick learner and a team
          player. I am always looking for opportunities to learn new things and
          improve my skills.
        </div>
      </div>
      <div className={styles.aboutText}>
        <div className={styles.aboutHeading}>Skills</div>
        <div className={styles.aboutDescription}>
          <ul>
            <li>
              <b>Programming Languages:</b> C++, Python, JavaScript, TypeScript, Rust
            </li>
            <li>
              <b>Web Development:</b> ReactJS, Express, Django, Actix, PostgreSQL,
              MongoDB
            </li>
            <li><b>Blockchain Technology:</b> Solidity, EVM, Cryptography</li>
            <li><b>Tools:</b> Git & GitHub, Linux, Postman, Nginx</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
