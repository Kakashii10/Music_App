import React, { useState } from "react";
import style from "../Css/MainSection.module.css";
import FetchAllData from "./FetchAllData";

function MainSection() {
  const [songs, setSongs] = useState([]);

  const receiveFetchData = (data) => {
    setSongs(data);
  };

  return (
    <React.Fragment>
      <FetchAllData onReceiveFetchData={receiveFetchData} />
      <div className={style.mainBody}>
        <div className={style.wrapper}>
          {songs.length > 0 ? (
            songs.map((song) => (
              <div className={style.polaroid} key={song.id}>
                <img src={song.img} alt="Norway" style={{ width: "100%" }} />
                <div className={style.container}>
                  <p>{song.title}</p>
                </div>
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
