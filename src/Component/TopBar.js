import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../Css/TopBar.module.css";

function TopBar({recevingSong}) {
  
  const getSearchSong =(e) =>{
    recevingSong(e.target.value);
    console.log(e.target.value);
  }
  return (
    <div className={styles.header}>
      <span className={styles.logo}>Music App</span>
      <input type="text" name="song" placeholder="Search for Songs" onChange={getSearchSong}/>
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
