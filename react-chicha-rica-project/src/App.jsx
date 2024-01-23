import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AnimatedCard from './components/AnimatedCard';
import Gallery from './pages/Gallery';
import { Wishlist } from './components/Wishlist.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <AnimatedCard />
      <Gallery />
      <Wishlist />
    </div>
  );
}







{ /*return (
  <>
    <div className="App">
      
      {/* <Header />
      <AnimatedCard />
      <Gallery />
      <reactLogo /> 

      <header className="App-header">
        <h1>Mi E-Commerce</h1>
        <Wishlist />
      </header>
    </div >
  </>
)*/ }

export default App
