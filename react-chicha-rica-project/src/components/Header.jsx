// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { LogoHeaderR,LogoHeaderW } from '../assets/icons';
import BotonToggle from './BotonToggle';

const Header = () => {
  return (
    <div className='main-header'>
      <header>
        <div className="menu__icon">
          <i className="fas fa-bars icon"></i>
        </div>
       {/* eliminé el checkbox que no lo necesitamos */}
        <label className="menu__icon" htmlFor="menu__btn"><span className="navicon"></span></label>

        <nav className='nav-bar'>
          <Link to="/"  className="logo-header-r">
          <LogoHeaderR />  
          </Link>
          <ul>
            <BotonToggle />
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/gallery">GALERIA</Link></li>
            <li><Link to="/access">ACCESO</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
