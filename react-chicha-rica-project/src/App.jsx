import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Contact.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';


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
    
    

      <Footer />
         
        
      
      
    </Router>
  );
}

export default App;