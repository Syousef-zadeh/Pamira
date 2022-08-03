import React from "react";
import AppointmentButton from "./AppointmentButton";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./Top-Header.module.css";

const TopHeader = (props) => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.info}>
        <BiPhoneCall className={styles.icons} />
        <span>021-33345247</span>
        
        <AiFillInstagram className={styles.icons} />
        <a href="https://t.me/pamira_podcast"><span className={styles.address}>Pamira.clinic</span></a> 
      </div>

      <div className={styles.btn}>
        <AppointmentButton />
      </div>
    </div>
  );
};
export default TopHeader;
