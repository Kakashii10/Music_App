import React, { useState } from "react";
import TopBar from "./TopBar";
import homeStyle from "../Css/Home.module.css";
import SideBar from "./SideBar";
import MainSection from "./MainSection";
import FetchAllData from "./FetchAllData";

function HomePage() {
  const [songs, setSongs] = useState([]);
  const [songName, setSongName] = useState("happy");
  const receiveFetchData = (data) => {
    setSongs(data);
  };

  const getSearchSongName = (data) => {
    const searchName = data.trim();
    setSongName(searchName || "happy");
  };
  return (
    <div className={homeStyle.body}>
      <TopBar recevingSong={getSearchSongName} />
      <SideBar />
      <FetchAllData onReceiveFetchData={receiveFetchData} songName={songName} />
      {songs.length > 0 && <MainSection songs={songs} />}
    </div>
  );
}

export default HomePage;
