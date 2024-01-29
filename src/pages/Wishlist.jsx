
import React from 'react';
import '../styles/Wishlist.css'; //al ser una hoja de styloss importo el codigo sin almacenarlo en variables, ya que se aplica directamente.



const Wishlist = () => {
  return (
    <div className="tarjeta-padre">
      <div className="tarjeta">
        <div>
          <h3>Tarjeta 1</h3>
        </div>
        <div>
          <p>Contenido de la tarjeta 1...</p>
        </div>
        <div className="img-container">
          <img src="./img/bulldog.jpg" alt="Bulldog" />
        </div>

        <div className="contenedor-btn">

          <div className="button-basura">
            <button className="logo-basura">🗑️</button>
          </div>

          <div className="button-like">
            <button className="logo-like">🛒</button>
          </div>


        </div>

      </div>
    </div>
  );
};



export default Wishlist


//----------el antiguo componente

/*import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import '../styles/wishlist.css';

export const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [heartColors, setHeartColors] = useState({}); // Estado para manejar los colores de los corazones

  const toggleWishlistItem = (productId) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId];

      // Actualiza los colores de los corazones
      const updatedColors = { ...heartColors, [productId]: updatedWishlist.includes(productId) ? 'red' : 'inherit' };
      setHeartColors(updatedColors);

      return updatedWishlist;
    });
  };

  return (
    <div className="wishlist-container">
      <h2>Wishlist</h2>
      <ul>
        {[1, 2, 3, 4, 5].map((productId) => (
          <li key={productId}>
            <FaHeart
              className="FaHeart"
              style={{ color: heartColors[productId] }}
              onClick={() => toggleWishlistItem(productId)}
            />
            Producto {productId}
          </li>
        ))}
      </ul>
      <div>
        <p>Productos de la e-commerce:</p>
        {[1, 2, 3, 4, 5].map((productId) => (
          <button key={productId} onClick={() => toggleWishlistItem(productId)}>
            Añadir/Quitar producto {productId} a la Wishlist
          </button>
        ))}
      </div>
    </div>
  );
};


/*const App = () => { //esta estructura básica de componente funcional de REact se crea con el snipped 'rafce'
  return (
    <>
      <Header/>
      <Wishlist/>
    </>
  );
};*/

//export default Wishlist;
//El código finaliza con la etiqueta export default Wishlist;, lo que indica que este fragmento de código representa un componente llamado "Wishlist" que se puede exportar para su uso en otros lugares de la aplicación









