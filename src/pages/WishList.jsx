import React from "react"; // Agrega la importación de React

import { useWishList } from "../hooks/WishListContext";
import "../styles/WishList.css"; // Asegúrate de tener un archivo CSS asociado

const WishList = () => {
  const { wishList } = useWishList();

  return (
    <div className="wish-container">
      <h2>Wish List</h2>
      <div className="wishlist-items">
        {wishList.map((img, index) => (
          <div key={index} className="wish-section">
            {img && ( // Verifica si img existe antes de renderizar
              <>
                <div className="wish-img">
                  <img src={`img/${img.url}`} alt={img.title} />
                </div>
                <p>{img.title} - {img.price}€</p>
                {/* Agrega otras propiedades del libro si es necesario */}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;

