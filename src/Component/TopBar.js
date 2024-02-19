import React from "react";
import { Link } from "react-router-dom";

import styles from "../Css/TopBar.module.css";

function TopBar() {
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Music App</span>
      <input type="text" name="song" placeholder="Search for Songs" />
      <div className={styles.right}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default TopBar;
