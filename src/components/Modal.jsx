import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Modal.css';
import ArrowButtons from './ArrowButtons.jsx';

const Modal = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('priceSmall');
  const navigate = useNavigate();
  const { addToCart, cartItems, clearCart } = useCart();
  const selectedImage = props.selectedImage;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const closeModal = () => {
    setModalVisible(false);
    Close();
  };

  const showPrevImage = () => {
    if (props.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + props.images.length) % props.images.length);
      console.log("Previous Image Clicked");
    }
  };

  const showNextImage = () => {
    if (props.images) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
      console.log("Next Image Clicked");
    }
  };

  const imageUrl = selectedImage ? `img/${selectedImage.url}` : '';
  const imageAlt = selectedImage ? selectedImage.title : '';

  const handleAddToCart = () => {
    addToCart({ title: selectedImage.title, price: selectedImage[selectedPrice] });
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
    navigate('/finish');
  };

  return (
    <div className={`modal ${modalVisible ? 'visible' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>              

        <div className='pagination'>
          <img src={imageUrl} alt={imageAlt} style={{ width: '100%' }} />
          <ArrowButtons onPrevClick={showPrevImage} onNextClick={showNextImage} />
        </div>

        <div className='Data'>
          {selectedImage && (
            <>
              <h3>{selectedImage.title}</h3>
              <p>Price: {selectedImage[selectedPrice]}€</p>
            </>
          )}
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
