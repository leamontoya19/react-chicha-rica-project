// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Home from './pages/Home';
import ModalCarrito from './components/ModalCarrito';
import Modal from './components/Modal'; // Importa el componente Modal

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carritoItems, setCarritoItems] = useState([]);
  const [isCarritoOpen, setIsCarritoOpen] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarritoItems([...carritoItems, producto]);
  };

  return (
    <Router>
      <Header abrirCarrito={() => setIsCarritoOpen(true)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/gallery"
          element={<Gallery agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route path="/access" element={<Access />} />
      </Routes>

      {/* Pasa la función setIsCarritoOpen al componente Modal */}
      <Modal
        image={/* Tú debes proporcionar la imagen aquí */}
        onClose={() => setIsModalOpen(false)}
        abrirCarrito={() => setIsCarritoOpen(true)}
        setIsModalOpen={setIsModalOpen}
      />

      <ModalCarrito
        isOpen={isCarritoOpen}
        onClose={() => setIsCarritoOpen(false)}
        carritoItems={carritoItems}
      />

      <Footer />
    </Router>
  );
}

export default App;
