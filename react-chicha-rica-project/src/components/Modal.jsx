import React from 'react';
import "../styles/Modal.css";
const Modal = ({ image, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img  src={`img/${image.url}`}
                  alt={image.title}
                  style={{ width: "100%" }} />
            <h3>{image.title}</h3>
              <p>Price: {image.price}</p>
              <button className='penta'>⛧</button>
              <button className='cart'>🛒</button>
        {/* Agrega más información extendida según sea necesario */}
      </div>
    </div>
  );
};

export default Modal;  // Asegúrate de tener esta línea de exportación
