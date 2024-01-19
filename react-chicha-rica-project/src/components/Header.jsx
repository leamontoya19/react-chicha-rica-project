<<<<<<< HEAD
import React from 'react'
import '../styles/Header.css'
=======
// Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
>>>>>>> 9acd0fd5285580269862f5207692e9fd7cb4d32c

const Header = () => {
  return (
    <div>
      <header id="main-header">
<<<<<<< HEAD
<div className="menu__icon">
  <i className="fas fa-bars icon"></i>
</div>

<input className="menu__btn" type="checkbox" id="menu__btn" />
<label className="menu__icon" for="menu__btn"><span className="navicon"></span> </label>  


<nav>
  <a href="index.html" className="nav__logo logo">
  <img id="logoPrincipal" src="./img/iconos/logoLetraBlanca.svg" alt="Logotipo Miguel Meixoeiro" className="hide-logo"/>
  </a>
  <ul>
    <li><a href="#contacto" id="sliderRojo" className="toggle-logo">CONTACTO</a></li>
    <li><a href="./templates/about.html">ABOUT</a></li>
    <li><a href="./templates/gallery.html">GALERIA</a></li>
    <li><a href="#acceso">ACCESO</a></li>
  </ul>
</nav>
</header>
    </div>
  )
}

export default Header
=======
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
            <li><Link to="/access">ACCESO</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
>>>>>>> 9acd0fd5285580269862f5207692e9fd7cb4d32c
