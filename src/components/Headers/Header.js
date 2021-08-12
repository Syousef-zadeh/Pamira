import React from "react";

import styles from "./Header.module.css";
import TopHeader from "./Top-Header";
import NavBar from "./NavBar";

const Header = (props) => {
  return (
    <header>
      <TopHeader/>
      <div className={styles.header}>
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
