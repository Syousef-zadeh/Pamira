import React from "react";
import styles from "./Contact.module.css";
import contactImg from "../../assets/pamira.png";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.image}>
        <img className={styles.contactImage} src={contactImg} alt="pamira" />
      </div>
      <div className={styles.content}>
        <p>Address: Tehran - 17 Shahrivar</p>
        <p>Phone: 021-33345247</p>
        <p>Mobile: 09904800254</p>

      </div>
    </div>
  );
};
export default Contact;
