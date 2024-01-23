// DiceRoller.js
import React, { useState, useEffect } from 'react';
import DiceFace from './DiceFace';
import '../../styles/DiceRoller.css';

const isDevelopment = process.env.NODE_ENV === 'development';

const DiceRoller = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  const renderDiceFaces = () => {
    const faces = [];

    for (let i = 1; i <= 4; i++) {
      faces.push(<DiceFace key={i} image={`${isDevelopment ? '' : process.env.PUBLIC_URL}/img/faces/face${i}.jpg`} />);
    }

    faces.push(<DiceFace key={5} image={`${isDevelopment ? '' : process.env.PUBLIC_URL}/img/faces/face1.jpg`} />);
    faces.push(<DiceFace key={6} image={`${isDevelopment ? '' : process.env.PUBLIC_URL}/img/faces/face5.jpg`} />);
    

    return faces;
  };

  return <div className="dice-roller">{renderDiceFaces()}</div>;
};

export default DiceRoller;
