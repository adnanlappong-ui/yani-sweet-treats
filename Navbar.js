import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logoYani from '../assets/logo_yani.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
      {/* Logo kiri */}
      <div className="navbar-left">
        <img src={logoYani} alt="Yani Sweet Treats" className="navbar-logo" />
      </div>

      {/* Tengah: tagline */}
      <div className="navbar-center">
        <span className="navbar-tagline">Freshly baked, sweet happiness!</span>
      </div>

      {/* Links kanan */}
      <div className="navbar-right">
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li><a href="#hero" onClick={(e) => handleScrollTo(e, 'hero')}>Home</a></li>
          <li><a href="#menu" onClick={(e) => handleScrollTo(e, 'menu')}>Menu</a></li>
          <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About</a></li>
          <li><a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact</a></li>
        </ul>
      </div>

      {/* Hamburger responsive */}
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
