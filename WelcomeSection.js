import React from 'react';

function WelcomeSection({ scrollY }) {
  return (
    <section id="home" className="welcome-section">
      {/* Parallax background layers */}
      <div className="parallax-layer layer1" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
        {/* Placeholder image for cake - Replace with actual image */}
        <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800" alt="Cake Layer" />
      </div>
      <div className="parallax-layer layer2" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        {/* Placeholder image for cupcakes - Replace with actual image */}
        <img src="https://images.unsplash.com/photo-1519869325930-281384150729?w=800" alt="Cupcake Layer" />
      </div>
      <div className="parallax-layer layer3" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        {/* Placeholder image for donuts - Replace with actual image */}
        <img src="https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800" alt="Donut Layer" />
      </div>
      <div className="parallax-layer layer4" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Placeholder image for macarons - Replace with actual image */}
        <img src="https://images.unsplash.com/photo-1558326567-98ae2405596b?w=800" alt="Macaron Layer" />
      </div>
      <div className="parallax-layer layer5" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
        {/* Placeholder image for strawberries - Replace with actual image */}
        <img src="https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=800" alt="Strawberry Layer" />
      </div>
      
      {/* Welcome content */}
      <div className="welcome-content">
        <h1>Welcome to Yani Sweet Treats</h1>
        <p>Delicious baked goods made with love</p>
        <button className="cta-button">Order Now</button>
      </div>
    </section>
  );
}

export default WelcomeSection;