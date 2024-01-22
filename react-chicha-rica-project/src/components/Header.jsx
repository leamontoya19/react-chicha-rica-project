// Header.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { LogoHeaderR,LogoHeaderW } from '../assets/icons';
import BotonToggle from './BotonToggle';
import { SearchBar } from "./SearchBar";
import { Suggestions } from "./Suggestions";

import axios from "axios";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      try {
        const response = await axios.get(`/api/suggestions?searchTerm=${searchTerm}`);
        setSuggestions(response.data);
      } catch (error) {
        console.error("Error al obtener sugerencias:", error);
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
