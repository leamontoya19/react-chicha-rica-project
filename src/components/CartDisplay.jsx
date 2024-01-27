// CartDisplay.jsx
import React from 'react';
import { useCart } from '../CartContext';

const CartDisplay = () => {
  const { cartItems, clearCart } = useCart();

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    return `${total}€` ;
  };

  return (
    <div className="cart-display">
      
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.title} - {item.price}
              </li>
            ))}
          </ul>
          <p>Total: {calculateTotal()}</p>
          <button onClick={clearCart}>Vacíar carrito</button>
        </>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default CartDisplay;
