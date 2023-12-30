import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.contactHeading}>Contact Me</div> */}
      <div className={styles.contactList}>
        <div className={styles.list}>Email</div>
        <div className={styles.list}>Twitter</div>
        <div className={styles.list}>LinkedIn</div>
        <div className={styles.list}>Telegram</div>
        <div className={styles.list}>Discord</div>
      </div>
    </div>
  );
};

export default Contact;
