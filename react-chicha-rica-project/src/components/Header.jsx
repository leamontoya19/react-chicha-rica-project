// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div>
      <header id="main-header">
        <div className="menu__icon">
          <i className="fas fa-bars icon"></i>
        </div>

        <input className="menu__btn" type="checkbox" id="menu__btn" />
        <label className="menu__icon" htmlFor="menu__btn"><span className="navicon"></span></label>

        <nav>
          <Link to="/" className="nav__logo logo">
            <img id="logoPrincipal" src="./img/iconos/logoLetraBlanca.svg" alt="Logotipo Miguel Meixoeiro" className="hide-logo" />
          </Link>
          <ul>
            <li><Link to="/contacto" id="sliderRojo" className="toggle-logo">CONTACTO</Link></li>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/gallery">GALERIA</Link></li>
            <li><Link to="/acceso">ACCESO</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
