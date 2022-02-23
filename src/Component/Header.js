import React from 'react'
import '../App.css'
import {IoSearch} from "react-icons/io5";
import {MdKeyboardArrowDown} from "react-icons/md";
import {BsGlobe} from "react-icons/bs";
import {FaUserCircle} from "react-icons/fa";


export default function Header() {
  return (
    <div className="header">
        <div className="logo">
            <img src={require("../images/logo.png")}></img>
        </div>
        <div className="search1">
            <input type="search" className="bar" placeholder="Start your search"/>
            <IoSearch className="icon"/>
        </div>
        <div className="host">
            <p>Become a Host</p>
            <MdKeyboardArrowDown className="icon2"/>
            <BsGlobe className="icon3" />
            <div className="user">
            <FaUserCircle className="icon4" />
            </div>
            
        </div>
    </div>
  )
}

