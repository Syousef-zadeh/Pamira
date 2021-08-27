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
            padding: "2rem 3rem",
            backgroundColor: "#283b42",
            color: "white",
          }}
        >
          Calculate Your MBI
        </Button>
      </Link>
    </div>
  );
};
export default MbiBtn;
