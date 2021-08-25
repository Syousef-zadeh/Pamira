import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import logo from "../../../assets/pamira.png";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = (props) => {
  const logoImg = logo;
  const [showNavbar, setShowNavbar] = useState(true);

  return (
    <div className={showNavbar ? styles.nav : styles.display}>
      <img className={styles.ImgLogo} src={logoImg} alt="Pamira-logo" />
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Services</Link>
          </li>
          <li>
            <Link to="/">Gallery</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.toggleButton}>
        
          <GiHamburgerMenu className={styles.svgBtn} onClick={() => setShowNavbar(!showNavbar)} />

        {!showNavbar && (
          <nav className={styles.expandNavbar}>
            <ul
              className={showNavbar ? styles.desktopNavbar : styles.expandNav}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Services</Link>
              </li>
              <li>
                <Link to="/">Gallery</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
export default NavBar;
