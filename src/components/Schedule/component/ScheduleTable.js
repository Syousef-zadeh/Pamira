import React from "react";
import styles from './ScheduleTable.module.css';

const ScheduleTable = (props) => {
    return(
        <div className={styles.days}>
            <span>{props.hour}</span>
            <hr className={styles.line}/>
            <span>{props.day}</span>
        </div>
    )
};
export default ScheduleTable;
