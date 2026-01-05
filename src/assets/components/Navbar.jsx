import React, { useState,useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // trigger after 50px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar h-[10vh] ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-logo">IRFAN</div>
      
      {/* Menu Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><link to="/" onClick={() => setIsOpen(false)}>Home</link></li>
        <li><link to="/downloads" onClick={() => setIsOpen(false)}>Downloads</link></li>
        <li><link to="/contact" onClick={() => setIsOpen(false)}>Contact</link></li>
        
      </ul>

      {/* Hamburger Icon */}
      <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className={`bar ${isOpen ? "animate" : ""}`}></span>
        <span className={`bar ${isOpen ? "animate" : ""}`}></span>
        <span className={`bar ${isOpen ? "animate" : ""}`}></span>
      </div>
    </nav>
  );
};

export default Navbar;
