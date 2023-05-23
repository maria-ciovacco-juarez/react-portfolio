import "./AboutContentStyles.css"
import {Link} from "react-router-dom";
import React1 from "../assets/react1.jpeg"


const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who Am I?</h1>
        <p>My name is Maria Ciovacco Juarez, and I am currently a full-stack student at the University of Minnesota. I have knowledge in Markup language, JavaScript, React, and SQL. I'm excited to connect with you!</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true"/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent;
