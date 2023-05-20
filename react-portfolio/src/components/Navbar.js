import React from 'react'
import { FaBars } from "react-icons/fa";

import "./NavbarStyles.css"
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>MCJ</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className='hamburger'>
        <FaBars size={20} style={{ color: "#fff" }} />

      </div>
    </div>
  );
};

export default Navbar;

{/* const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <div className='container'> 

//   <a className="navbar-brand" href="#">MCJ</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse" id="navbarSupportedContent">
//     <ul className="navbar-nav mr-auto">
//       <li className="nav-item active">
//         <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="#">Portfolio</a>
//       </li>
      
//     </ul>
    
//   </div>
// </div>
// </nav>
//   )
// }


// export default Navbar */}