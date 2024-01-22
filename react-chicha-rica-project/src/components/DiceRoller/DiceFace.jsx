// DiceFace.js
import React from 'react';

const DiceFace = ({ image }) => {
    const handleImageLoad = () => {
      console.log('Imagen cargada correctamente');
    };
  
    const handleImageError = (error) => {
      console.error('Error al cargar la imagen:', error);
    };
  
    return <div className="dice-face" style={{ backgroundImage: `url(${image})` }} onLoad={handleImageLoad} onError={handleImageError} />;
  };
  
  

export default DiceFace;
