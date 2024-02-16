import React from 'react'
import TopBar from './TopBar'
import homeStyle from '../Css/Home.module.css';

function HomePage() {
  return (
    <div className={homeStyle}>
      <TopBar/>
    </div>
  )
}

export default HomePage 
