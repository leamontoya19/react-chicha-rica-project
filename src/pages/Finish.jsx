// FinishPage.js
import React from 'react';
import { useCart } from '../CartContext';

const FinishPage = () => {
  const { cartItems } = useCart();

  return (
    <div>
      <h2>Finish Page</h2>
      {cartItems.map((item, index) => (
        <div key={index}>
          <img src={`img/${item.url}`} alt={item.title} style={{ width: '100px', height: '100px' }} />
        </div>
      ))}
      {/* Puedes agregar más contenido relacionado con la finalización del pedido aquí */}
    </div>
  );
};

export default FinishPage;
