import React from "react";
import AppointmentButton from "./AppointmentButton";
import { BiPhoneCall } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";

import styles from "./Top-Header.module.css";

const TopHeader = (props) => {
  return (
    <div className={styles.topHeader}>
      <div className={styles.info}>
        <h5>
          <BiPhoneCall /> 021-33307551
        </h5>
        <h5 className={styles.address}>
          <AiFillInstagram /> Pamira.clinic
        </h5>
      </div>

      <div className={styles.btn}>
        <AppointmentButton />
      </div>
    </div>
  );
};
export default TopHeader;
