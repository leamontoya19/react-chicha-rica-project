import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { LogoHeaderR,LogoHeaderW } from '../assets/icons';
import BotonToggle from './BotonToggle';
import { SearchBar } from './SearchBar';
import { Suggestions } from './Suggestions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { BurgerButton } from './BurguerButton';  // Asegúrate de importar correctamente BurgerButton
import axios from 'axios';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  // const [showBurgerButton, setShowBurgerButton] = useState(false); // Define la variable showBurgerButton
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(
          `/api/suggestions?searchTerm=${searchTerm}`
        );
        setSuggestions(response.data);
      } catch (error) {
        console.error('Error al obtener sugerencias:', error);
      }
    };

    fetchSuggestions();
  }, [searchTerm]);

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  const handleSuggestionClick = (selectedSuggestion) => {
    setSearchTerm(selectedSuggestion.title);
    // Realiza acciones adicionales si es necesario
  };

  const handleSearchClickOutside = () => {
    // Lógica para cerrar las sugerencias
    setResults([]);
  };

  // const handleBurgerClick = () => {
  //   // Puedes agregar lógica adicional al hacer clic en el botón hamburguesa
  //   console.log('Burger button clicked');
  // };

  useEffect(() => {
    // Simulando una llamada a la API para obtener elementos del menú
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('../public/api.json'); // Reemplaza '/api/menu' con tu ruta de API real
        setMenuItems(response.data);
      } catch (error) {
        console.error('Error fetching menu items:', error);
      }
    };

    fetchMenuItems();
  }, []); // Se ejecuta solo una vez al montar el componente

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className='main-header'>
      <header>

      <div className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      {isMenuOpen && (
        <div className="menu">
          {menuItems.map((menuItem) => (
            <a key={menuItem.id} href={menuItem.link}>
              {menuItem.label}
            </a>
          ))}
        </div>
      )};
   

        <div className="menu__icon">
          <i className="fas fa-bars icon"></i>
        </div>

        <label className="menu__icon" htmlFor="menu__btn"><span className="navicon"></span></label>

        <nav className='nav-bar'>
          <Link to="/"  className="logo-header-r">
          <LogoHeaderR />
          </Link>
          <ul>

            <SearchBar/>
            <Suggestions/>
          
            <BotonToggle/>
            <li><Link to="/about">ABOUT</Link></li>
            <li><Link to="/gallery">GALERIA</Link></li>
            <li><Link to="/access">ACCESO</Link></li>
            <button className='cart-header'>🛒</button>
          </ul>
        </nav>

      </header>
    </div>
  );
};

export default Header;
