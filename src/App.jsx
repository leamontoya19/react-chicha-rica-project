// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Login from './components/Login'
import Terms from './pages/Terms'
import Home from './pages/Home';
import { CartProvider } from './CartContext';
import CartDisplay from './components/CartDisplay';
import Finish from './pages/Finish';
import Payment from './pages/Payment'
import Thanks from './pages/Thanks'


function App() {
  return (
    <Router>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/access" element={<Access />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/terms" element={<Terms />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/finish" element={<Finish />} />  {/* Agrega la ruta de la página de finalización */}
          <Route path="/thanks" element={<Thanks />} />
        
        </Routes>

        
      </CartProvider>
      <Footer />
    </Router>
  );
}

export default App;