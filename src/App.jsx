// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Contact.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Home from './pages/Home';
import { CartProvider } from './CartContext';  // Importa el CartProvider
import CartDisplay from './components/CartDisplay';  // Importa el CartDisplay


function App() {
  return (
    <Router>
      <CartProvider>  {/* Envuelve tu aplicación con el CartProvider */}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/access" element={<Access />} />
        </Routes>


        <CartDisplay />  {/* Muestra el carrito en la ubicación deseada */}
        </CartProvider>
        <Footer />
      
    </Router>
  );
}

export default App;
