import React from "react";
import style from "../Css/MainSection.module.css";
import { NavLink } from "react-router-dom";

function MainSection({ songs = [] }) {
  return (
    <React.Fragment>
      <div className={style.mainBody}>
        <div className={style.wrapper}>
          {songs.length > 0 ? (
            songs.map((song) => (
              <div className={style.polaroid} key={song.id}>
                <NavLink to={"/song/"+song.id}>
                  <img src={song.img} alt="Norway" style={{ width: "100%" }} />
                  <div className={style.container}>
                    <p>{song.title}</p>
                  </div>
                </NavLink>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainSection;
