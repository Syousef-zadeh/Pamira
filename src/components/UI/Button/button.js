import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <button
      className={styles.buttons }
      style={props.style && props.style}
      type={props.type || "button"}
      value={props.value}
      id={props.id}
      onClick={props.onClick}
    >{props.children}</button>
  );
};
export default Button;
