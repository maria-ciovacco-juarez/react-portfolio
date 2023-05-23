import React from 'react';
import { FaHome, FaGithub, FaMailBulk, FaTwitter, FaInstagram } from "react-icons/fa";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left"></div>
        <div className="location">
          <h4><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />Grand Prairie, Texas</h4>
          <div className="email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />ciovaccomaria@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <a href="https://github.com/maria-ciovacco-juarez?tab=repositories">
              <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
            <a href='https://twitter.com/mariaxisabelle'>
            <FaTwitter size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
            <a href='https://www.instagram.com/mariaxisabelle/?hl=en'>
            <FaInstagram size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
