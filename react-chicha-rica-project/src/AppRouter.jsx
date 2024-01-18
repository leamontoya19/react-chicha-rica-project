import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacto from './pages/Contacto';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Acceso from './pages/Acceso';

const AppRouter = () => {
  return (
    <Router>
      
        <Routes>
        <Route path="/access" element={<Acceso />}/>
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={() => <div>Inicio</div>} />
        </Routes>
        
        {/* Agrega una ruta predeterminada, como la página de inicio */}
        
     
    </Router>
  );
};

export default AppRouter;
