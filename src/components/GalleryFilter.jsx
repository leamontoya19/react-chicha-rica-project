// GalleryFilter.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/GalleryFilter.css";

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
          <Link className="gallery-link" to="#">
            TODAS
          </Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("personas")}
        >
          <Link className="gallery-link" to="#">PERSONAS</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("naturaleza")}
        >
          <Link className="gallery-link" to="#">NATURALEZA</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("efectos")}
        >
          <Link className="gallery-link" to="#">EFECTOS</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("arquitectura urbana")}
        >
          <Link className="gallery-link" to="#">ARQUITECTURA</Link>
        </button>
        <button
          className="gallery-button"
          onClick={() => handleCategoryClick("animales")}
        >
          <Link className="gallery-link" to="#">ANIMALES</Link>
        </button>
      </div>
    </div>
  );
};

export default GalleryFilter;
