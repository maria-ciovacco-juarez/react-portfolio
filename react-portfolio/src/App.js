import React from 'react';
import './index.css';
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Projects from './routes/Projects'

// import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    // <Navbar />,
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
    
   </>
  );
}

export default App;
