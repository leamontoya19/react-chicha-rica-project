import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Login from './components/Login'

const AppRouter = () => {
  return (
    <Router>
      
        <Routes>
        <Route path="/access" element={<Access />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={() => <div>Inicio</div>} />
        </Routes>
        
        {/* Agrega una ruta predeterminada, como la página de inicio */}
        
     
    </Router>
  );
};

export default AppRouter;
