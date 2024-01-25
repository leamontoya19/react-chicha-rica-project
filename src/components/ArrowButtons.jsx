import React from 'react';


const ArrowButtons = ({ onPrevClick, onNextClick }) => {
  
    const handlePrevClick = () => {
        console.log("Clic en flecha izquierda");
        onPrevClick(); // Llama a la función proporcionada por Modal.jsx
      };
    
      const handleNextClick = () => {
        console.log("Clic en flecha derecha");
        onNextClick(); // Llama a la función proporcionada por Modal.jsx
      };
  
  
      return (
        <div className='pagination'>
          <button className='arrow' onClick={handlePrevClick}>{'<'}</button>
          <button className='arrow' onClick={handleNextClick}>{'>'}</button>
        </div>
      );
};

export default ArrowButtons;
