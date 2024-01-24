// Modal.js
import React, { useState } from 'react';
import { useCart } from '../CartContext';
import '../styles/Modal.css';

const Modal = ({ image, Close }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);

  const { addToCart, cartItems, clearCart } = useCart();

  const closeModal = () => {
    setModalVisible(false);
    Close();
  };

  const handleAddToCart = () => {
    addToCart({ title: image.title, price: image.price });
  };

  const openCart = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return `${total}€` ;
  };

  return (
    <div className={`modal ${modalVisible ? 'visible' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={`img/${image.url}`} alt={image.title} style={{ width: '100%' }} />
        <h3>{image.title}</h3>
        <p>Price: {image.price}€</p>
        <button className='penta'>⛧</button>
        <button className='cart' onClick={handleAddToCart}>
          🛒 Add to Cart
        </button>
        <button className='cart' onClick={openCart}>
          View Cart
        </button>

        {cartVisible && (
          <div className="cart-content">
            <h3>Shopping Cart</h3>
            {cartItems.length > 0 ? (
              <>
                <ul>
                  {cartItems.map((item, index) => (
                    <li key={index}>
                      {item.title} - {item.price}€
                    </li>
                  ))}
                </ul>
                <p>Total: {calculateTotal()}</p>
                <button onClick={clearCart}>Clear Cart</button>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <button onClick={closeCart}>Close Cart</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
