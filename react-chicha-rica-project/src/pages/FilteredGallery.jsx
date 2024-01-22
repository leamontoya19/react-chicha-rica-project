// components/FilteredGallery.js
import React from "react";
import '../styles/FilteredGallery.css'

const FilteredGallery = ({ images, filter, openModal }) => {
  const filteredImages = images.filter((image) => {
    if (!filter) {
      return true;
    } else {
      const keywords = image.keyword.split(",").map((keyword) => keyword.trim());
      return keywords.includes(filter);
    }
  });

  return (
    <div>
      <h2>Imágenes Filtradas</h2>
      <p>Filtro aplicado: {filter}</p>
      <div className="pictures-container">
        {Array.isArray(filteredImages) &&
          filteredImages.map((image) => (
            <div className={`${image.keyword}`} key={image.id} onClick={() => openModal(image)}>
              <div className="img-container">
                <img src={`img/${image.url}`} alt={image.title} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilteredGallery;
