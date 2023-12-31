import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  const handleEmail = () => {
    window.open("mailto:samarendragouda@gmail.com");
  };
  const handleTwitter = () => {
    window.open("https://twitter.com/0xSamarendra");
  };
  const handleLinkedIn = () => {
    window.open("https://www.linkedin.com/in/samarendragouda/");
  };
  const handleTelegram = () => {
    window.open("https://t.me/samarendrag");
  };
  const handleDiscord = () => {
    window.open("https://discord.com/users/samarendrag");
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactList}>
        <div className={styles.list} onClick={() => handleEmail()}>
          Email
        </div>
        <div className={styles.list} onClick={() => handleTwitter()}>
          Twitter
        </div>
        <div className={styles.list} onClick={() => handleLinkedIn()}>
          LinkedIn
        </div>
        <div className={styles.list} onClick={() => handleTelegram()}>
          Telegram
        </div>
        <div className={styles.list} onClick={() => handleDiscord()}>
          Discord
        </div>
      </div>
    </div>
  );
};

export default Contact;
