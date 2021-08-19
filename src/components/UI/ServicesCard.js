import React from "react";
import styles from "./ServicesCard.module.css";

const ServicesCard = (props) => {
    return (
        <div className={styles.serviceCard}>
            <div className={styles.img}>
                <img src={props.img} alt=""/>
            </div>
            <button>More Details</button>
        </div>
    )
};
