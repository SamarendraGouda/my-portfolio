import React from "react";
import styles from "./About.module.css";
import me from "../../assets/1000031473.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aboutText}>
        <div className={styles.aboutHeading}>About Me</div>
        {window.innerWidth <= 430 ? (
          <div className={styles.aboutImage}>
            <img src={me} alt="profile" />
          </div>
        ) : null}
        <div className={styles.aboutDescription}>
          As a third-year undergraduate at IIT Roorkee, enrolled in B.Tech
          Chemical Engineering, my passion extends beyond the realm of my core
          discipline. I harbor a keen interest in Software Development, DevOps,
          and Blockchain Technology. Adapting swiftly and collaborating
          seamlessly within a team are integral parts of my ethos. I'm
          inherently driven by an insatiable thirst for knowledge, constantly
          seeking avenues to broaden my skill set and enhance my proficiency in
          diverse domains.
        </div>
      </div>
      <div className={styles.aboutText}>
        <div className={styles.aboutHeading}>Skills</div>
        <div className={styles.aboutDescription}>
          <ul>
            <li>
              <b>Programming Languages:</b> C++, Python, JavaScript, TypeScript,
              Rust
            </li>
            <li>
              <b>Web Development:</b> ReactJS, Express, Django, Actix,
              PostgreSQL, MongoDB
            </li>
            <li>
              <b>Blockchain Technology:</b> Solidity, Defi, EVM, Cryptography
            </li>
            <li>
              <b>Tools:</b> Git & GitHub, Linux, Postman, Docker, Nginx
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
