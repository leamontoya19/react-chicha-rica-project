
// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/Contact.css'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Login from './components/Login'
import Contact from './pages/Contact';
// import { FbIcon, IgIcon, LnkdIcon, LogoHeaderW, MySvg2, MySvg3, MySvg4, MySvg5, MySvg6 } from './assets/icons'

function App() {
  return (
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

      <Footer />
         
        
      
      
    </Router>
  );
}

export default App;