import React from "react";
import AppointmentButton from "./AppointmentButton";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./Top-Header.module.css";

const TopHeader = (props) => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.info}>
        <h4>
          <BiPhoneCall /> 021-33307551
        </h4>
        <h4 className={styles.address}>
          <AiFillInstagram /> Pamira.clinic
        </h4>
      </div>

      <div className={styles.btn}>
        <AppointmentButton />
      </div>
    </div>
  );
};
export default TopHeader;
