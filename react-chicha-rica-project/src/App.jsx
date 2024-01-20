// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles/Contact.css'
import Header from './components/Header';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Access from './pages/Access';
// import Contact from './components/Contact';
import { FbIcon, IgIcon, LnkdIcon, LogoHeaderW, MySvg2, MySvg3, MySvg4, MySvg5, MySvg6 } from './assets/icons'

function App() {

  return (
    <Router> 
      <Header />
        <Routes>
        <Route path="/access" element={<Access />}/>
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/" element={() => <div>Inicio</div>} />
        </Routes>
       

        {/* <MySvg />
        <MySvg2 />
        <MySvg3 />
        <MySvg4 />
        <MySvg5 />
        <MySvg6 />
        <FbIcon />
        <IgIcon />
        <LnkdIcon /> */}
        
         
        
      
      
    </Router>
  );
}

export default App;
