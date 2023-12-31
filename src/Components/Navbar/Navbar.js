import React from "react";
import styles from "./Navbar.module.css";
import me from "../../assets/1000031473.jpg";
import { FaEthereum } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import copy from "copy-to-clipboard";

const Navbar = () => {
  const handleClickGithub = () => {
    window.open("https://github.com/SamarendraGouda");
  };

  const handleClickEthereum = async () => {
    try {
      copy("0xc1490E0489f487477A9B4e52Da19416d21fC09E0");
      toast.success(
        "Loved my work? Boost my inspiration with an Ethereum coffee! Your support fuels creativity, keeping my projects brewing. Thanks for being part of the journey! 🚀, Address copied to clipboard!",
        {
          icon: "☕️",
          duration: 6000,
          style: {
            border: "1px solid #6adac4",
            padding: "16px",
            fontSize: "0.75rem",
            color: "#868aa4",
            background: "#16161e",
          },
          iconTheme: {
            primary: "#6adac4",
            secondary: "#FFFAEE",
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <div className={styles.container}>
        <div className={styles.progress}></div>
        <div className={styles.image}>
          <img src={me} alt="profile" />
        </div>
        <div className={styles.subContainer}>
          <div className={styles.logo}>
            Samarendra Gouda
            <div className={styles.social} onClick={() => handleClickGithub()}>
              <FaGithub size={24} />
            </div>
            <div
              className={styles.social}
              onClick={() => handleClickEthereum()}
            >
              <FaEthereum size={24} />
            </div>
          </div>
          <div className={styles.designation}>Full-Stack Developer</div>
          <div className={styles.menu}>
            <div className={styles.menuItem}>Home</div>
            <div className={styles.menuItem}>Experience</div>
            <div className={styles.menuItem}>Projects</div>
            <div className={styles.menuItem}>Achievements</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
