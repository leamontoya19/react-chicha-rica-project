import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { Link ,useNavigate } from 'react-router-dom';
import '../styles/Modal.css';

const Modal = ({ image, Close }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('priceSmall'); // Nuevo estado
  const navigate = useNavigate();
  const { addToCart, cartItems, clearCart } = useCart();

  const closeModal = () =>{
    setModalVisible(false);
    Close();
  };

  const handleAddToCart = () => {
    addToCart({ title: image.title, price: image[selectedPrice] }); // Usar el precio seleccionado
  };

  const openCart = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return `${total}€`;
  };

  const finishPurchase = () => {
    // Realiza cualquier acción antes de redirigir, como enviar datos al servidor
    navigate('/finish');  // Usa navigate en lugar de push para la versión 6
  };

  return (
    <div className={`modal ${modalVisible ? 'visible' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <img src={`img/${image.url}`} alt={image.title} style={{ width: '100%' }} />
        <div className='Data'>
          <h3>{image.title}</h3>
          <p>Price: {image[selectedPrice]}€</p> {/* Usar el precio seleccionado */}
          <select className='PriceSelector' value={selectedPrice} onChange={handlePriceChange}>
            <option value="priceSmall">Price Small</option>
            <option value="priceMedium">Price Medium</option>
            <option value="priceLarge">Price Large</option>
          </select>
        </div>
        <button className='penta'>⛧</button>
        <button className='cart' onClick={handleAddToCart}>
          +
        </button>
        <button className='cart' onClick={openCart}>
          🛒 
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
                <button onClick={clearCart}>Clear</button>
                <button onClick={finishPurchase}>Finalizar</button>
              </>
            ) : (
              <p>Your cart is empty.</p>
            )}
            <button onClick={closeCart}>X</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
