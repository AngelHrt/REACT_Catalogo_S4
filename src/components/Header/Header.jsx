import React from 'react';
import '../../Styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">Royale Style</a>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="icons">
        <i className='bx bx-menu' id="menu-icon"></i>
        <i className='bx bx-x' id="close-icon"></i>
      </label>
      <nav className="navbar">
        <a href="#">Inicio</a>
        <a href="#">Tienda</a>
        <a href="#">Contacto</a>
        <a href="#"> <i className='bx bxs-user'></i> Login</a>
        <a href="#" id="open-cart"> <i className='bx bxs-shopping-bag'></i> Carrito</a>
      </nav>
    </header>
  );
};

export default Header;
