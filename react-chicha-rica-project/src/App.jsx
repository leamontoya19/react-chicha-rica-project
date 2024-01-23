<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> b3cdbfae334395ba970475dded677faa3ed27c9f
import './App.css';
import './styles/Contact.css'
import Header from './components/Header';
<<<<<<< HEAD
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
=======
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Home from './pages/Home';
import Thanks from './pages/Thanks'; //prueba Thanks Page

function App() {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/access" element={<Access />}/>
      </Routes>
      
      {/* <Thanks /> */}
    

      <Footer />
         
        
      
      
    </Router>
>>>>>>> b3cdbfae334395ba970475dded677faa3ed27c9f
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
