import React from "react";
import Topbar from "../Css/TopBar.module.css";

function TopBar() {
  return (
    <React.Fragment>
      <div className={Topbar.navbar}>
        <div className={Topbar.logo}>Music App
        <input type="text" name="song" placeholder="Search for Songs"/>
        </div>
       
        <div>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}

export default TopBar;
