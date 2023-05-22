import "./WorkCardStyles.css";
import React from 'react';
import pro from "../assets/project1.png";
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
            {/* <p>This is a text</p> */}
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
          <img src={pro} alt="quizcode" />
          <h2 className="project-title">QuizCode!</h2>
          <div className="pro-details">
            {/* <p>This is a text</p> */}
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
          <img src={pro} alt="quizcode" />
          <h2 className="project-title">QuizCode!</h2>
          <div className="pro-details">
            {/* <p>This is a text</p> */}
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
          <img src={pro} alt="quizcode" />
          <h2 className="project-title">QuizCode!</h2>
          <div className="pro-details">
            {/* <p>This is a text</p> */}
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
          <img src={pro} alt="quizcode" />
          <h2 className="project-title">QuizCode!</h2>
          <div className="pro-details">
            {/* <p>This is a text</p> */}
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
          <img src={pro} alt="quizcode" />
          <h2 className="project-title">QuizCode!</h2>
          <div className="pro-details">
            {/* <p>This is a text</p> */}
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
      </div>
    </div>
  );
}

export default WorkCard;
