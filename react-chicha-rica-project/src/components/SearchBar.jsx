import React, { useState } from "react";
import "../styles/SearchBar.css";
import { FaSearch } from "react-icons/fa";

export const SearchBar = ({ setResults }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState("");

  const handleInputFocus = () => {
    setIsExpanded(true);
  };

  const handleInputBlur = () => {
    if (input.trim() === "") {
      setIsExpanded(false);
    }
  };

 

  const fetchData = async () => {
    try {
      const response = await fetch(`/api.json?searchTerm=${input}`);
      const data = await response.json();

      // Asegúrate de que data.data es un array
      const results = Array.isArray(data.data)
        ? data.data.filter((product) => {
            return (
              input &&
              product &&
              product.title &&
              product.title.toLowerCase().includes(input.toLowerCase())
            );
          })
        : [];

      setResults(results);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData();
  };

  const handleIconClick = (e) => {
    e.stopPropagation(); // Detener la propagación del evento
    handleInputFocus();
  };

  return (
    <div className={`search-bar ${isExpanded ? "expanded" : ""}`}>
      {isExpanded ? (
        <input
          type="text"
          placeholder="Buscar por títulos"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      ) : (
        <div className="icon-container" onClick={handleInputFocus}>
          <FaSearch />
        </div>
      )}
    </div>
  );
};
