import React, { useRef, useImperativeHandle } from "react";

import styles from "./Input.module.css";

const Input = (props, ref) => {
  const inputRef = useRef();

  const active = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: active,
    };
  });

  return (
    <div
      className={`${styles.control} ${
        props.isValid === false ? styles.invalid : ""
      }`}
    >
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onChange} />
    </div>
  );
};
export default Input;
