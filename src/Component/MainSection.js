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
              <a href={song.id}  key={song.id}>
                <div className={style.polaroid} >
                  <img src={song.img} alt="Norway" style={{ width: "100%" }} />
                  <div className={style.container}>
                    <p>{song.title}</p>
                  </div>
                </div>
              </a>
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
