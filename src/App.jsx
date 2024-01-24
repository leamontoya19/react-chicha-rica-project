import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './styles/Contact.css'
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
import Login from './components/Login'
import Home from './pages/Home';
import Terms from './pages/Terms'

function App() {
  return (
    <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/access" element={<Access />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/terms" element={<Terms />} />
      </Routes>
      
      {/* <Thanks /> */}
    

      <Footer />
         
        
      
      
    </Router>
  );
}

export default App;