import React from "react";
import styles from "../Css/TopBar.module.css";

function TopBar() {
  return (
    <React.Fragment>
      {/* <div className={Topbar.navbar}>
        <div className={Topbar.logo}>
          Music App
          <input type="text" name="song" placeholder="Search for Songs" />
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div> */}

      <div className={styles.header}>
        <span className={styles.logo}>Music App</span>
        <input type="text" name="song" placeholder="Search for Songs" />
        <div className={styles.right}>
          <a href="#" className={styles.link}>
            Home
          </a>
          <a href="#" className={styles.link}>
            Contact
          </a>
          <a href="#" className={`${styles.link}`}>
            Help
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBar;
