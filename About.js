import React from 'react';
import './About.css';
import aboutImg1 from '../assets/about1.jpg'; // gambar bakery / kek
import aboutImg2 from '../assets/about2.jpg';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2>About Yani Sweet Treats</h2>
          <p>
            Welcome to <strong>Yani Sweet Treats</strong>! We craft delightful desserts with love, using only the freshest ingredients. From soft cheesekuts to rich chocolate cakes, every bite is made to bring a smile. 
          </p>
          <p>
            Our mission is to spread sweetness and happiness through our creations. Perfect for birthdays, celebrations, or just a sweet moment for yourself. Join us on this delicious journey!
          </p>
        </div>
        <div className="about-images">
          <img src={aboutImg1} alt="Bakery Image 1" />
          <img src={aboutImg2} alt="Bakery Image 2" />
        </div>
      </div>
    </section>
  );
}

export default About;
