import React from 'react';

const DiceFace = ({ imageUrl, title, number }) => {
  return (
    <div className="dice_item">
      <img alt="project Thumbnail" loading="lazy" src={imageUrl} />
      <div className="barcode_section">
        {/* Código de barras y número del dado */}
        <ul className="barcode_number">
          {number.toString().split('').map((digit, index) => (
            <li key={index}>{digit}</li>
          ))}
        </ul>
      </div>
      <div className="info_section">
        <div className="info_header">
          <div className="info_title">{title}</div>
          <div className="info_number">{number}</div>
        </div>
        {/* Información del proyecto */}
      </div>
    </div>
  );
};

export default DiceFace;
