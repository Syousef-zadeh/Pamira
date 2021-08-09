import React from "react";
import AppointmentButton from "./AppointmentButton";
import { BiPhoneCall } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

import styles from "./Top-Header.module.css";

const TopHeader = (props) => {
  return (
    <div>
      <div className={styles.topHeader}>
        <h4>
          {" "}
          <BiPhoneCall /> 021-33307551
        </h4>
          <h4 className={styles.address}>
            {" "}
            <ImLocation2 /> Tehran - 17 shahrivar
          </h4>
          <AppointmentButton />
      </div>
     
    </div>
  );
};
export default TopHeader;
