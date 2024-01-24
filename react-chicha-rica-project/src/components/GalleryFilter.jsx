// GalleryFilter.js
import React from "react";
import { Link } from "react-router-dom";
import '../styles/GalleryFilter.css'

const GalleryFilter = ({ onFilterChange }) => {
  const handleCategoryClick = (category) => {
    onFilterChange(category);
  };

  return (
    <div className="gallery-filter">
      <Link to="#" className="filter-title">
        <span className="btn-txt">CATEGORIAS</span>
      </Link>
      <div className="filter-btn-container">
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("")}
        >
          <Link className="gallery-button" to="#">TODAS</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("personas")}
        >
          <Link to="#">PERSONAS</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("naturaleza")}
        >
          <Link to="#">NATURALEZA</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("efectos")}
        >
          <Link to="#">EFECTOS</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("arquitectura urbana")}
        >
          <Link to="#">ARQUITECTURA URBANA</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("animales")}
        >
          <Link to="#">ANIMALES</Link>
        </button>
      </div>
    </div>
  );
};

export default GalleryFilter;
