// GalleryFilter.js
import React from "react";
import { Link } from "react-router-dom";

const GalleryFilter = ({ onFilterChange }) => {
  const handleCategoryClick = (category) => {
    onFilterChange(category);
  };

  return (
    <div className="gallery_filter">
      <Link to="#" className="gallery__buttonCategory button">
        <span className="btn-txt">CATEGORIAS</span>
      </Link>
      <div className="gallery_filtersSubCategory">
        <button
          className="gallery__buttonSubCategory buttonSubCategory"
          onClick={() => handleCategoryClick("")}
        >
          <Link to="#">TODAS</Link>
        </button>
        <button
          className="gallery__buttonSubCategory buttonSubCategory"
          onClick={() => handleCategoryClick("personas")}
        >
          <Link to="#">PERSONAS</Link>
        </button>
        <button
          className="gallery__buttonSubCategory buttonSubCategory"
          onClick={() => handleCategoryClick("naturaleza")}
        >
          <Link to="#">NATURALEZA</Link>
        </button>
        <button
          className="gallery__buttonSubCategory buttonSubCategory"
          onClick={() => handleCategoryClick("efectos")}
        >
          <Link to="#">EFECTOS</Link>
        </button>
        <button
          className="gallery__buttonSubCategory buttonSubCategory"
          onClick={() => handleCategoryClick("arquitectura urbana")}
        >
          <Link to="#">ARQUITECTURA URBANA</Link>
        </button>
        <button
          className="gallery__buttonSubCategory buttonSubCategory"
          onClick={() => handleCategoryClick("animales")}
        >
          <Link to="#">ANIMALES</Link>
        </button>
      </div>
    </div>
  );
};

export default GalleryFilter;
