import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/button";
import styles from "./MbiButton.module.css";

const MbiBtn = () => {
  return (
    <div className={styles.mbiBtn}>
      <Link to="/Mbi-calculate">
        <Button
          style={{
            padding: "1rem 4rem",
            margin: "1rem 0",
            backgroundColor: "#283b42",
            color: "white",
          }}
        >
           خود کلیک کنید BMI برای محاسبه
        </Button>
      </Link>
    </div>
  );
};
export default MbiBtn;
