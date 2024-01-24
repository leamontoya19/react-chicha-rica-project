// Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { LogoHeaderR } from '../assets/icons';
import BotonToggle from './BotonToggle';
import { SearchBar } from './SearchBar';
import { Suggestions } from './Suggestions';
import { useCart } from '../CartContext';  // Importa useCart
import CartDisplay from './CartDisplay';  // Importa CartDisplay

import axios from 'axios';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [cartVisible, setCartVisible] = useState(false); // Nuevo estado para controlar la visibilidad del carrito

  const { cartItems } = useCart();  // Obtiene el estado del carrito desde el contexto

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
    setResults([]); // Esto debería limpiar los resultados
  };

  const showCart = () => {
    setCartVisible(true);
  };

  const hideCart = () => {
    setCartVisible(false);
  };
  const closeCart = () => {
    setCartVisible(false);
  };
  
  return (
    <div className="main-header">
      <header>
        <div className="menu__icon">
          <i className="fas fa-bars icon"></i>
        </div>
        <label className="menu__icon" htmlFor="menu__btn">
          <span className="navicon"></span>
        </label>

        <nav className="nav-bar">
          <Link to="/" className="logo-header-r">
            <LogoHeaderR />
          </Link>
          <ul>
            <SearchBar
              onChange={handleSearchChange}
              onClickOutside={handleSearchClickOutside}
            />
            <Suggestions
              suggestions={suggestions}
              onClick={handleSuggestionClick}
            />
            <BotonToggle />
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/gallery">GALERIA</Link>
            </li>
            <li>
              <Link to="/access">ACCESO</Link>
            </li>
            <button className="cart-header" onClick={showCart}>
              🛒 {cartItems.length > 0 && `(${cartItems.length})`}
            </button>
          </ul>
        </nav>

        {cartVisible && <CartDisplay hideCart={hideCart} />} {/* Renderiza CartDisplay solo cuando cartVisible es true */}
        <button onClick={closeCart}>X</button>
      </header>
    </div>
  );
};

export default Header;
