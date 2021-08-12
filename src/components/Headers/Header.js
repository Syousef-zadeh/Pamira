import React from "react";

import styles from "./Header.module.css";
import TopHeader from "./components/Top-Header";
import NavBar from "./components/NavBar";

const Header = (props) => {
  return (
    <header>
      <TopHeader />
      <div className={styles.header}>
        <NavBar />
      </div>
    </header>
  );
};
export default Header;
