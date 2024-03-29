import Button from "../Button/button";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {

  
  return (
    <div className={styles.card} id={props.id}>
      <div className={styles["card__body"]}>
        <img className={styles.img} name="serviceImage" src={`${props.img}`} alt="" />
        <h2 className={styles["card__title"]}>{props.title}</h2>
        <p className={styles["card__description"]}>{props.shortDes}</p>
        {/* <p className={styles["card__description"]}>{props.description}</p> */}
      </div>
      <Link to="/service-details/:serviceId">
        <div>
          <Button style={{ padding: ".5rem" }}>{props.titleButton}</Button>
        </div>
      </Link>
    </div>
  );
};
export default Card;
