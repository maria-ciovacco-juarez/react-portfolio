import "./HeroImgStyles.css";

import React from 'react';

import IntroImg from "../assets/intro-bg.jpg"

import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img"
          src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>MARIA CIOVACCO JUAREZ</p>
        <h1>Full Stack Developer.</h1>
        <div>
          <Link to="/projects"
            className="btn">Projects</Link>
        </div>
      </div>
    </div>
  );

};

export default HeroImg;