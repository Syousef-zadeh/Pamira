import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "./NavBar.module.css";
import logo from "../../../assets/pamira.png";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" style={{padding:"0 10%"}}>
        <Container>
        <img className={styles.ImgLogo} src={logo} alt="Pamira-logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{direction: "rtl"}}>
        <div>
            <Nav className="me-auto" style={{ columnGap:"1rem"}}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">Gallery</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="Contact">Contact</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
            </Nav>
        </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styles from "./NavBar.module.css";
// import logo from "../../../assets/pamira.png";
// import { GiHamburgerMenu } from "react-icons/gi";

// const NavBar = (props) => {
//   const logoImg = logo;
//   const [showNavbar, setShowNavbar] = useState(true);

//   return (
//     <div className={showNavbar ? styles.nav : styles.display}>
//       <img className={styles.ImgLogo} src={logoImg} alt="Pamira-logo" />
//       <nav className={styles.navbar}>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/">Services</Link>
//           </li>
//           <li>
//             <Link to="/">Gallery</Link>
//           </li>
//           <li>
//             <Link to="/">About</Link>
//           </li>
//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>
//         </ul>
//       </nav>
//       <div className={styles.toggleButton}>

//           <GiHamburgerMenu className={styles.svgBtn} onClick={() => setShowNavbar(!showNavbar)} />

//         {!showNavbar && (
//           <nav className={styles.expandNavbar}>
//             <ul
//               className={showNavbar ? styles.desktopNavbar : styles.expandNav}
//             >
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/">Services</Link>
//               </li>
//               <li>
//                 <Link to="/">Gallery</Link>
//               </li>
//               <li>
//                 <Link to="/">About</Link>
//               </li>
//               <li>
//                 <Link to="/Contact">Contact</Link>
//               </li>
//             </ul>
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// };
// export default NavBar;
