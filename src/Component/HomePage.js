import React from "react";
import TopBar from "./TopBar";
import homeStyle from "../Css/Home.module.css";
import SideBar from "./SideBar";
import MainSection from "./MainSection";

function HomePage() {
  return (
    <div className={homeStyle.body}>
      <TopBar />
      <SideBar />
      <MainSection />
    </div>
  );
}

export default HomePage;
