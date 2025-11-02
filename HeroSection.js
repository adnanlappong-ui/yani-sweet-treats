import React from 'react';
import './HeroSection.css';
import yaniBackground from '../assets/yani_background.jpg';

function HeroSection() {
  return (
    <section className="hero-section">
      <img src={yaniBackground} alt="Background" className="hero-bg" />
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>Welcome to Yani Sweet Treats</h1>
        <p>Delicious baked goods made with love ❤️</p>
        <button className="cta-button">Order Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
