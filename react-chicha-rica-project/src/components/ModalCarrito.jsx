// ModalCarrito.jsx
import React from 'react';
import '../styles/ModalCarrito.css';

const ModalCarrito = ({ isOpen, onClose, carritoItems }) => {
  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="modal">
        <div className="modal-header">
          <h2>Carrito de Compras</h2>
          {/* Botón para cerrar el modal */}
          <button className="close-button" onClick={onClose}>
            Cerrar
          </button>
        </div>
        <div className="modal-body">
          {/* Contenido del carrito */}
          {carritoItems.map((item) => (
            <div className="carrito-item" key={item.id}>
              <span>{item.title}</span>
              <span>${item.price}</span>
            </div>
          ))}
          {/* Total del carrito */}
          <div className="carrito-total">
            Total: ${carritoItems.reduce((total, item) => total + item.price, 0)}
          </div>
          {/* Botón adicional para cerrar el modal */}
          <button className="cerrar-carrito-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalCarrito;
