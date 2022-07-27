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
          <ScheduleTable day="شنبه" hour="تعطیل" />
          <ScheduleTable day="یکشنبه" hour="2pm - 6pm" />
          <ScheduleTable day="دوشنبه" hour="تعطیل" />
          <ScheduleTable day="سه شنبه" hour="2pm - 6pm" />
          <ScheduleTable day="چهارشنبه" hour="تعطیل" />
          <ScheduleTable day="پنجشنبه" hour="2pm - 6pm" />
          <ScheduleTable day="جمعه" hour="تعطیل" />
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
