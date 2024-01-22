import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Access from './pages/Access';
import Contact from './pages/Contact';
import About from './pages/About';
import Gallery from './pages/Gallery';
// import UserProfile from './pages/UserProfile';
import DiceRoller from './components/DiceRoller/DiceRoller';
// import { FbIcon, IgIcon, LnkdIcon, MySvg, MySvg2, MySvg3, MySvg4, MySvg5, MySvg6 } from './assets/icons';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/access" element={<Access />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery/*" element={<Gallery />} />
        <Route path="/" element={() => <div>Inicio</div>} />
      </Routes>
      {/* <UserProfile /> */}
      {/* <DiceRoller /> */}
    </Router>
  );
}

export default App;
