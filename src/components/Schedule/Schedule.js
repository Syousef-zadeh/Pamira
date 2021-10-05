import React from "react";
import ScheduleTable from "./component/ScheduleTable";
import styles from "./Schedule.module.css";

import imgSchedule from "../../assets/schedule/schedule.png";

const Schedule = () => {
  return (
    <div>
      <h2 className={styles.title}>Schedule</h2>
      <div className={styles["schedule-table"]}>
        <div className={styles.weekdays}>
          <ScheduleTable day="شنبه" hour="Close" />
          <ScheduleTable day="یکشنبه" hour="2pm - 6pm" />
          <ScheduleTable day="دوشنبه" hour="Close" />
          <ScheduleTable day="سه شنبه" hour="2pm - 6pm" />
          <ScheduleTable day="چهارشنبه" hour="Close" />
          <ScheduleTable day="پنجشنبه" hour="2pm - 6pm" />
          <ScheduleTable day="جمعه" hour="Close" />
        </div>
        <img
          className={styles["schedule-img"]}
          src={imgSchedule}
          alt="schedule"
        />
      </div>
    </div>
  );
};
export default Schedule;
