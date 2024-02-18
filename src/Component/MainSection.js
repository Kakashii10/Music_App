import React, { useState } from "react";
import styleMainSection from "../Css/MainSection.module.css";
import FetchAllData from "./FetchAllData";

function MainSection() {
  const [songs, setSongs] = useState([]);

  const receiveFetchData = (data) => {
    setSongs(data);
  };

  return (
    <React.Fragment>
      <FetchAllData onReceiveFetchData={receiveFetchData} />
      <div className={styleMainSection.mainBody}>
        <div className={styleMainSection.wrapper}>
         { songs.map((song)=>(
            <div className={styleMainSection.polaroid}>
            <img src={song.img} alt="Norway" style={{ width: "100%" }} />
            <div className={styleMainSection.container}>
              <p>{song.title}</p>
            </div>
          </div>
          ))}
       
        </div>
      </div>
    </React.Fragment>
  );
}

export default MainSection;
