import Button from "../Button/button";
import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles["card__body"]}>
        <img className={styles.img} src={props.img} alt="" />
        <h2 className={styles["card__title"]}>{props.title}</h2>
        <p className={styles["card__description"]}>{props.description}</p>
      </div>
      <div >
        <Button style={{padding:".5rem"}}>{props.titleButton}</Button>
      </div>
    </div>
  );
};
export default Card;
