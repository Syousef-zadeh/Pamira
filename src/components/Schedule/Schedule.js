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
          <ScheduleTable day="Saturday" hour="Close" />
          <ScheduleTable day="Sunday" hour="2pm - 6pm" />
          <ScheduleTable day="Monday" hour="Close" />
          <ScheduleTable day="Tuesday" hour="2pm - 6pm" />
          <ScheduleTable day="Wednsday" hour="Close" />
          <ScheduleTable day="Thursday" hour="2pm - 6pm" />
          <ScheduleTable day="Friday" hour="Close" />
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
