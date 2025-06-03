import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#eee' }}>
      <div>
        <h2>Mi Tienda</h2>
      </div>
      <div>
        <a href="#">Inicio</a> | <a href="#">Productos</a> | <a href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;