import React from "react";
import styles from "./SocialMedia.module.css";
import { Link } from "react-router-dom";

import { ImYoutube } from "react-icons/im";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const SocialMedia = () => {
  return (
    
      <div className={styles.media}>
        <ul>
          <li>
            <a href="https://www.youtube.com/channel/UCRs3PJXt3xgibLlpY0DmSYg" className={styles.link && styles.link}>
              <ImYoutube />
            </a>
          </li>
          <li>
            <Link to="/Contact" className={styles.link}>
              <AiOutlineWhatsApp />
            </Link>
          </li>
          <li>
            <a href="https://www.instagram.com/pamira.clinic/?hl=en" className={styles.link}>
              <AiFillInstagram />
            </a>
          </li>
        </ul>
      </div>

  );
};
export default SocialMedia;
