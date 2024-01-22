import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { SearchBar } from './SearchBar';
import { Suggestions } from './Suggestions';
import { BurgerButton } from './BurguerButton';  // Asegúrate de importar correctamente BurgerButton
import axios from 'axios';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);
  const [showBurgerButton, setShowBurgerButton] = useState(false); // Define la variable showBurgerButton

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

  const handleBurgerClick = () => {
    // Puedes agregar lógica adicional al hacer clic en el botón hamburguesa
    console.log('Burger button clicked');
  };

  return (
    <header className='header'>
      {showBurgerButton && (
        <div className='burguer-container'>
          <BurgerButton onClick={handleBurgerClick} />
        </div>
      )}

      <nav className='navbar' style={{ display: showBurgerButton ? 'none' : 'block' }}>
        <Link to='/' className='nav__logo logo'>
          <img
            id='logoPrincipal'
            src='./img/iconos/logoLetraBlanca.svg'
            alt='Logotipo Miguel Meixoeiro'
            className='hide-logo'
          />
        </Link>
        <ul>
          <li>
            <Link to='/contacto' id='sliderRojo' className='toggle-logo'>
              CONTACTO
            </Link>
          </li>
          <li>
            <Link to='/about'>ABOUT</Link>
          </li>
          <li>
            <Link to='/gallery'>GALERIA</Link>
          </li>
          <li>
            <Link to='/access'>ACCESO</Link>
          </li>
        </ul>
      </nav>
      <div className='search-bar-container'>
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && (
          <Suggestions
            results={results}
            onClickOutside={handleSearchClickOutside}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
