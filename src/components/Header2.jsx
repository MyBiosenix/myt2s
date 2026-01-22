import React, { useState } from "react";
import "../Styles/header.css";
import ttt from "../assets/wlogo.png";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const go = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="myheader">
      <img src={ttt} alt="logo" className="logo" data-aos="fade-right" onClick={()=>navigate('/')}/>

      <button
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className="bar bar1" style={{ backgroundColor: "#fff" }}></span>
        <span className="bar bar2" style={{ backgroundColor: "#fff" }}></span>
        <span className="bar bar3" style={{ backgroundColor: "#fff" }}></span>
      </button>

      <nav className={`inhead ${isOpen ? "active" : ""}`} >
        <p onClick={() => go("/")} className={location.pathname === "/" ? "activeLink" : ""}>Home</p>
        <p onClick={() => go("/about")} className={location.pathname === "/about" ? "activeLink" : ""}>About Us</p>
        <p onClick={() => go("/programs")} className={location.pathname === "/programs" ? "activeLink" : ""}>Programs</p>
        <p onClick={() => go("/pricing")} className={location.pathname === "/pricing" ? "activeLink" : ""}>Pricing</p>
        <p onClick={() => go("/how-it-works")} className={location.pathname === "/how-it-works" ? "activeLink" : ""}>How it Works</p>
        <p onClick={() => go("/reviews")} className={location.pathname === "/reviews" ? "activeLink" : ""}>Reviews</p>
        <p onClick={() => go("/contact")} className={location.pathname === "/contact" ? "activeLink" : ""}>Contact</p>
      </nav>
    </header>
  );
}

export default Header;
