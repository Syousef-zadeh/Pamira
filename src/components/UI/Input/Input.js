import React, { useRef, useImperativeHandle } from "react";

import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
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
      {props.label && <label>{props.label}</label>}
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        minLength="5"
        name={props.name}
        onChange={props.onChange}
        required
      />
    </div>
  );
});
export default Input;
