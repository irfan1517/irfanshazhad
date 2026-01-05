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
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/downloads" onClick={() => setIsOpen(false)}>Downloads</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        
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
