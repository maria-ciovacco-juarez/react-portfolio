import "./WorkCardStyles.css";
import React from 'react';
import pro from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.gif";
import pro4 from "../assets/project4.png";

import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro} alt="quizcode" />
          <h2 className="project-title">QuizCode!</h2>
          <div className="pro-details">
            <div className="pro-btns">
              <NavLink to="https://maria-ciovacco-juarez.github.io/QuizCode/index.html" className="btn">
                View
              </NavLink>
              <NavLink to ="https://github.com/maria-ciovacco-juarez/QuizCode" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro3} alt="quizcode" />
          <h2 className="project-title">Daily Agenda</h2>
          <div className="pro-details">
            <div className="pro-btns">
              <NavLink to="https://maria-ciovacco-juarez.github.io/daily-agenda/" className="btn">
                View
              </NavLink>
              <NavLink to ="https://github.com/maria-ciovacco-juarez/daily-agenda" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        
        <div className="project-card">
          <img src={pro2} alt="quizcode" />
          <h2 className="project-title">ChillBreeze</h2>
          <div className="pro-details">
            {/* <p>This is a text</p> */}
            <div className="pro-btns">
              <NavLink to="https://maria-ciovacco-juarez.github.io/chill-breeze/" className="btn">
                View
              </NavLink>
              <NavLink to ="https://github.com/maria-ciovacco-juarez/chill-breeze" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro4} alt="quizcode" />
          <h2 className="project-title">Text Editor</h2>
          <div className="pro-details">
            {/* <p>This is a text</p> */}
            <div className="pro-btns">
              <NavLink to="https://edits-on-edits.herokuapp.com/" className="btn">
                View
              </NavLink>
              <NavLink to ="https://github.com/maria-ciovacco-juarez/text-editor-pwa" className="btn">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
