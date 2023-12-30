import React from "react";
import styles from "./Navbar.module.css";
import me from "../../assets/1000031473.jpg";
import { FaEthereum } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.progress}></div>
      <div className={styles.image}>
        <img src={me} alt="profile" />
      </div>
      <div className={styles.subContainer}>
        <div className={styles.logo}>
          Samarendra Gouda
          <div className={styles.social}>
            <FaGithub size={24} />
          </div>
          <div className={styles.social}>
            <FaEthereum size={24} />
          </div>
        </div>
        <div className={styles.designation}>
          Blockchain Developer | Fullstack Developer
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}>Home</div>
          <div className={styles.menuItem}>Experience</div>
          <div className={styles.menuItem}>Projects</div>
          <div className={styles.menuItem}>Achievements</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
