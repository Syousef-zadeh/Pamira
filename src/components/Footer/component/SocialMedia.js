import React from "react";
import styles from "./SocialMedia.module.css";
import { Link } from "react-router-dom";

import { ImYoutube } from "react-icons/im";
import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div>
      <div className={styles.media}>
        <ul>
          <li>
            <Link>
              <ImYoutube />
            </Link>
          </li>
          <li>
            <Link>
              <AiOutlineWhatsApp />
            </Link>
          </li>
          <li>
            <Link>
              <AiFillInstagram />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SocialMedia;
