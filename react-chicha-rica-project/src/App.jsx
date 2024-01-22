<<<<<<< HEAD
// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 1ccc98f38c2335fcbe3e4de06319f30017420f0e
import './App.css';
import './styles/Contact.css'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
<<<<<<< HEAD
import Login from './components/Login'
import Contact from './pages/Contact';
import { FbIcon, IgIcon, LnkdIcon, MySvg, MySvg2, MySvg3, MySvg4, MySvg5, MySvg6 } from './assets/icons'
=======
import Home from './pages/Home';
import Thanks from './pages/Thanks'; //prueba Thanks Page
>>>>>>> 1ccc98f38c2335fcbe3e4de06319f30017420f0e

function App() {
  return (
<<<<<<< HEAD
    <Router>
      <Header />
        <Routes>
        <Route path="/access" element={<Access />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={() => <div>Inicio</div>} />
        </Routes>
        {/* <AnimatedCard /> */}
=======
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/access" element={<Access />}/>
      </Routes>
      
      {/* <Thanks /> */}
    
>>>>>>> 1ccc98f38c2335fcbe3e4de06319f30017420f0e

      <Footer />
         
        
      
      
    </Router>
  );
}

export default App;