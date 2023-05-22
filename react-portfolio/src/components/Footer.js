import "./FooterStyles.css"

import React from 'react'

import {FaHome, FaGithub, FaMailBulk, FaTwitter, FaInstagram} from "react-icons/fa";

// import { FaMailBulk } from "react-icons/fa";

// import { FaTwitter } from "react-icons/fa";

// import { FaInstagram } from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left"></div>
        <div className="location">
          <h4><FaHome size={20} style ={{color:"#fff", marginRight: "2rem" }}/>Grand Prairie, Texas
          </h4>
          <div className="email">
          <h4><FaMailBulk size={20} style ={{color:"#fff", marginRight: "2rem" }}/>ciovaccomaria@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
          <FaGithub size={20} style ={{color:"#fff", marginRight: "2rem" }}/>
          <FaTwitter size={20} style ={{color:"#fff", marginRight: "2rem" }}/>
          <FaInstagram size={20} style ={{color:"#fff", marginRight: "2rem" }}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer