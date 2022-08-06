import React from "react";

import styles from "./Header.module.css";
// import TopHeader from "./components/Top-Header";
import NavBar from "./components/NavBar";

const Header = (props) => {
  return (
    <div >
      <header className={styles.wholeHeader}>
        {/* <TopHeader /> */}
        <div className={styles.header}>
          <NavBar />
        </div>
      </header>
    </div>
  );
};
export default Header;
