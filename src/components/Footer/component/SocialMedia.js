import React from "react";
import styles from "./SocialMedia.module.css";

import { ImYoutube } from "react-icons/im";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div>
      <div className={styles.media}>
        <ImYoutube />
        <AiOutlineWhatsApp />
        <AiFillInstagram />
      </div>
    </div>
  );
};
export default SocialMedia;
