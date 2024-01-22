// Header.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
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
          <li><Link to="/access">ACCESO</Link></li>
        </ul>
      </nav>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <Suggestions results={results} onClickOutside={handleSearchClickOutside} />}
      </div>
    </header>
  );
};

export default Header;
