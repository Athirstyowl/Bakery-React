// Menu.js

import React from 'react';

const Menu = () => {
  return (
    <div>
      <div id="banner">
        <h1>Our Menu</h1>
        <h2>Cakes, Sandwiches & Drinks</h2>
      </div>
      <div className="py-5">
        <h2 className="text-center">Explore our exotic menus</h2>
      </div>

      <div className="container">
        <div className="box">
          <div className="heading">
            <h2>Cakes & Sandwiches</h2>
          </div>
          <img src="images/tiramisu.jpg" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, nulla deleniti? Aliquam autem, temporibus provident
              quisquam illo deleniti a veritatis dolor laborum, doloremque sit
              at? Architecto laboriosam culpa eum amet!
            </p>
            <a href="menu/cakes&sandwiches">Click here</a>
          </div>
        </div>
        <div className="box">
          <div className="heading">
            <h2>Drinks</h2>
          </div>
          <img src="images/latte2.jpg" alt="" />
          <div className="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, nulla deleniti? Aliquam autem, temporibus provident
              quisquam illo deleniti a veritatis dolor laborum, doloremque sit
              at? Architecto laboriosam culpa eum amet!
            </p>
            <a href="menu/drinks">Click here </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
