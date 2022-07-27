import React from "react";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/button";
import styles from "./ServiceDetail.module.css";

const ServiceDetailCard = (props) => {
  return (
    <div className={styles.details}>
      <div className={styles.detailGrid}>
        <div className={styles.detailImg}>
          <img src={`${props.image}`} alt={props.alt} />
        </div>
        <div className={styles.des}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </div>
      <div className={styles.bookBtn}>
        <Link to="/book-appointment">
          <Button
            style={{
              backgroundColor: "#283b42",
              color: "white",
              padding: "0.5rem",
            }}
          >
            Book Appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default ServiceDetailCard;
