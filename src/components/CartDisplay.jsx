// CartDisplay.jsx
import React from 'react';
import { useCart } from '../CartContext';

const CartDisplay = () => {
  const { cartItems, clearCart } = useCart();

  const calculateTotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const individualPrices = cartItems.map((item) => `${item.price}`);
    return cartItems.length > 1
      ? `${individualPrices.join(' + ')} = ${total}`
      : `${total}`;
  };

  return (
    <div className="cart-display">
      <h2>Shopping Cart</h2>
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
          <button onClick={clearCart}>Clear Cart</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartDisplay;
