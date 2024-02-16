import React from 'react'
import sideStyle from '../Css/Sidebar.module.css';
import { FaArrowTrendUp } from "react-icons/fa6";
import { GiLoveSong } from "react-icons/gi";
import { IoIosRadio } from "react-icons/io";
function SideBar() {
  return (
    <div className={sideStyle.SideMenu}>
        <ul >
            <li><FaArrowTrendUp style={{'width': '30px', 'margin-top':'1px','height': '23px'}}/> Trend</li>
            <li><GiLoveSong style={{'width': '30px', 'margin-top':'1px','height': '23px'}}/> Song</li>
            <li><IoIosRadio style={{'width': '30px', 'margin-top':'1px','height': '23px'}}/> Radio</li>
            <li><GiLoveSong style={{'width': '30px', 'margin-top':'1px','height': '23px'}}/>Genres</li>
        </ul>
    </div>
  )
}

export default SideBar
