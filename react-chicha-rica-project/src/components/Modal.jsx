import React from 'react';
import '../styles/Modal.css';

const Modal = () => {
  const closeCartModal = () => {
    // Implement the logic to close the modal here
  };

  return (
    <div id="cartModal" className="modal">
      <span className="close" onClick={closeCartModal}>&times;</span>
      <h2>Carrito de Compras</h2>
      <div>
        <div id="cartItems" className="cart-items"></div>
        <p>Cantidad de artículos en el carrito: <span id="cartCantidad">0</span></p>
        <p>Cantidad total en el carrito: €<span id="cartTotal">0.00</span></p>
      </div>
    </div>
  );
};

export default Modal;
