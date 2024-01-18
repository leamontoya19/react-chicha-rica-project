import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div>
      <header id="main-header">
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
