import React from "react";

import styles from "./Header.module.css";
import logo from "../../assets/pamira.png";
import TopHeader from "./Top-Header";
import NavBar from "./NavBar";

const Header = (props) => {
  const logoImg = logo;

  return (
      <header>
        <TopHeader />
        <div className={styles.header}>
          <img className={styles.ImgLogo} src={logoImg} alt="Pamira-logo" />
          <div>
            <NavBar />
          </div>
        </div>
      </header>
  );
};
export default Header;
