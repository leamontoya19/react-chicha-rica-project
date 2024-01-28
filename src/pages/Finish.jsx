// FinishPage.js
import React from 'react';
import '../styles/Finish.css'
import { useCart } from '../CartContext';
import { useNavigate } from 'react-router-dom';


const FinishPage = () => {
  const { cartItems } = useCart();

const navigate = useNavigate();

const redirectToPayment = () => {
  navigate('/payment')
}

const redirectToGallery = () => {
  navigate('/gallery')
}


  return (
    <section className='finish-container'>
      <div className='finish-black'>
        <div className='titles'>
          <h2>Finish Page</h2>
          <h4>Confirmar pedido:</h4>
        </div>
        
        <div>
        {cartItems.map((item, index) => (
          
          <div key={index}>
            <h4>{item.title}</h4>
            <img src={`img/${item.url}`} alt={item.title} style={{ width: '100px', height: '100px' }} />
            <span>{item.price} €</span>
          </div>
           ))}
        </div>

       
       
        
        <button className='button-pay' type='submit' onClick={redirectToPayment}>Comprar</button>
        <button className='button-pay' type='submit' onClick={redirectToGallery}>Seguir comprando</button>
      </div>
      
    </section>
  );
};

export default FinishPage;
