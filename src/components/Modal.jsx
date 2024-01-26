import React, { useState, useEffect } from 'react';
import { useCart } from '../CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Modal.css';


const Modal = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState('priceSmall');
  const navigate = useNavigate();
  const { addToCart, cartItems, clearCart } = useCart();
  const selectedImage = props.selectedImage;
  const [currentImageIndex, setCurrentImageIndex] = useState("");
  

  
  const closeModal = () => {
    setModalVisible(false);
    Close();
  };

  const showPrevImage = () => {
    if (props.prevImage) {
      props.prevImage();
    }
  };

  const showNextImage = () => {
    if (props.nextImage) {
      props.nextImage();
    }
    
  };

  const imageUrl = selectedImage ? `img/${selectedImage.url}` : '';
  const imageAlt = selectedImage ? selectedImage.title : '';

  const handlePriceChange = (event) => {
    const newSize = event.target.value;

    // Actualiza el estado de selectedPrice según la opción seleccionada
    switch (newSize) {
      case "priceSmall":
        setSelectedPrice("priceSmall");
        break;
      case "priceMedium":
        setSelectedPrice("priceMedium");
        break;
      case "priceLarge":
        setSelectedPrice("priceLarge");
        break;
      default:
        setSelectedPrice("price"); // Fallback a precio general en caso de error
    }
  };

  const handleAddToCart = () => {
    addToCart({ title: selectedImage.title, price: selectedImage[selectedPrice] });
  };

  const openCart = () => {
    setCartVisible(true);
  };

  const closeCart = () => {
    setCartVisible(false);
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
          <div className='arrows'>
            <button className='arrow' onClick={showPrevImage}>{'<'}</button>
            <button className='arrow' onClick={showNextImage}>{'>'}</button>
          </div>
          
        </div>

        <div className='Data'>
          {selectedImage && (
            <>
              <h3>{selectedImage.title}</h3>
              <p>Price: {selectedImage[selectedPrice]}€</p>
              <select className='PriceSelector' value={selectedPrice} onChange={handlePriceChange}>
                <option value="priceSmall">Tamaño pequeño</option>
                <option value="priceMedium">Tamaño mediano</option>
                <option value="priceLarge">Tamaño grande</option>
          </select>
            </>
          )}
        </div>
        <div className='butons__modal'>
          <button className='penta'>❤️</button>
          <button className='cart' onClick={handleAddToCart}>
            Añadir
          </button>
          <button className='cart' onClick={openCart}>
            🛒
          </button>
          </div>    
        

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
