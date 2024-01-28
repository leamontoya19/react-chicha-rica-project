import React, { createContext, useContext, useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Modal.css";
//WISH LIST CONTEXT
import { useWishList } from "../hooks/WishListContext";


const Modal = (props) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [cartVisible, setCartVisible] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState("priceSmall");
  const navigate = useNavigate();
  const { addToCart, cartItems, clearCart } = useCart();
  const selectedImage = props.selectedImage;
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  //WISH STATE
  const [isWishListed, setIsWishListed] = useState(false);


  useEffect(() => {
    if (modalVisible && selectedImage) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // Ajusta estos valores según tus necesidades
      const modalWidth = 900;
      const modalHeight = 700;

      // Calcula la posición para centrar el modal en la ventana
      const top = (windowHeight - modalHeight) / 2;
      const left = (windowWidth - modalWidth) / 2;

      setModalPosition({ top, left });
    }
  }, [modalVisible, selectedImage]);

  const closeModal = () => {
    setModalVisible(false);
    props.Close();
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

  const imageUrl = selectedImage ? `img/${selectedImage.url}` : "";
  const imageAlt = selectedImage ? selectedImage.title : "";

  const handlePriceChange = (event) => {
    const newSize = event.target.value;

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
        setSelectedPrice("price");
    }
  };

  const handleAddToCart = () => {
    addToCart({
      title: selectedImage.title,
      price: selectedImage[selectedPrice],
    });
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
    navigate("/finish");
  };
// WISHLIST

  const history = useNavigate(); 


  const toggleWishList = () => {
    setIsWishListed((prevIsWishListed) => !prevIsWishListed);
  }

  const { addToWishList, wishList } = useWishList();

  const handleAddToWishList = () => {
    // Añade a la lista de deseos
    addToWishList({
      title: selectedImage.title,
      price: selectedImage[selectedPrice],
      url: selectedImage.url
    });

    // Redirige a la página de la lista de deseos
    navigate("/wishlist");
  };
  

// FIN WISHLIST



  return (
    <div
      className={`modal ${modalVisible ? "visible" : ""}`}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>

        <div className="pagination">
          <img src={`/${imageUrl}`} alt={imageAlt} style={{ width: "100%" }} />
          <div className="arrows">
            <button className="arrow" onClick={showPrevImage}>
              {"<"}
            </button>
            <button className="arrow" onClick={showNextImage}>
              {">"}
            </button>
          </div>
        </div>

        <div className="Data">
          {selectedImage && (
            <>
              <h3>{selectedImage.title}</h3>
              <p>Precio: {selectedImage[selectedPrice]}€</p>
              <select
                className="price-selector"
                value={selectedPrice}
                onChange={handlePriceChange}
              >
                <option value="priceSmall">Pequeño</option>
                <option value="priceMedium">Mediano</option>
                <option value="priceLarge">Grande</option>
              </select>
            </>
          )}
        </div>
        <div className="butons-modal">
        <button
          className={`penta ${isWishListed ? 'active' : ''}`}
          onClick={() => {
            addToWishList();
            toggleWishList();
            handleAddToWishList(); // Modificado para agregar y redirigir
          }}
        >
          🩶
        </button>
          <button className="cart" onClick={handleAddToCart}>
            Añadir
          </button>
          <button className="cart-btn" onClick={openCart}>
            🛒
          </button>
        </div>

        {cartVisible && (
          <div className="cart-content">
            <h3>Carrito de compra</h3>
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
              <p>no hay nada en tu carrito</p>
            )}
            <button className='close-cart-btn' onClick={closeCart}>X</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
