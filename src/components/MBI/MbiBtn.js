import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/button";
import styles from "./MbiBtn.module.css";

const MbiBtn = () => {
  return (
    <div className={styles.mbiBtn}>
      <Link to="/Mbi-calculate">
        <Button
          style={{
            padding: "1rem 5rem",
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
