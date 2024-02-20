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
    if(data === ""){
      setSongName("happy");
    }else{
      setSongName(data);
    }
  };
  return (
    <div className={homeStyle.body}>
      <FetchAllData onReceiveFetchData={receiveFetchData} songName={songName} />
      <TopBar recevingSong={getSearchSongName} />
      <SideBar />
      <MainSection songs={songs} />
    </div>
  );
}

export default HomePage;
