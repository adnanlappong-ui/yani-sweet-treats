import React from 'react';
import './Menu.css';

function Menu() {
  const menuItems = [
    { id: 1, name: 'Cheesekut', description: 'Soft and delicious cheesekut', price: 'RM7', image: 'cheesekut.jpg' },
    { id: 2, name: 'Cheesetart', description: 'Cheesetart with fresh toppings', price: 'RM7', image: 'cheesetart.jpg' },
    { id: 3, name: 'Egg Tart (5 pcs)', description: 'Fluffy and sweet egg tarts', price: 'RM6', image: 'egg_tart.jpg' },
    { id: 4, name: 'Chocolate Moist Cake', description: 'Rich and soft chocolate cake', price: 'RM7', image: 'chocolate_moist.jpg' },
    { id: 5, name: 'Batik Cake', description: 'Classic and delicious batik cake', price: 'RM8', image: 'batik_cake.jpg' },
    { id: 6, name: 'Red Velvet', description: 'Soft red velvet with cream cheese', price: 'RM6', image: 'red_velvet.jpg' },
    { id: 7, name: 'Brownies', description: 'Rich and dense chocolate brownies', price: 'RM15', image: 'brownies.jpg' },
    { id: 8, name: 'Macaron Assortment', description: 'A colorful assortment of macarons', price: 'RM15', image: 'macaron.jpg' },
  ];

  return (
    <section id="menu" className="menu-section">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card">
            <div className="price-badge">{item.price}</div>
            <img src={require(`../assets/${item.image}`)} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
