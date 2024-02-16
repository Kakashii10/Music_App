import React from 'react'
import TopBar from './TopBar'
import homeStyle from '../Css/Home.module.css';
import SideBar from './SideBar';

function HomePage() {
  return (
    <div className={homeStyle}>
      <TopBar/>
      <SideBar/>
    </div>
  )
}

export default HomePage 
