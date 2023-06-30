import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CatGenerator from './components/CatGenerator';


function App() {
  return (
      <div className='App'>
        <header className='header'>
          <div className="header-title">
            <h1>Welcome</h1>
          </div>
          <nav className="nav">
            <ul className="nav-menu">
              <li>
                <Link to="/" style={{ color: 'white', textDecoration: 'none'}}>Home</Link>
              </li>
              <li>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
              </li>
              <li>
                <Link to="/catgenerator" style={{ color: 'white', textDecoration: 'none' }}>Cat Generator</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catgenerator" element={<CatGenerator />} />
        </Routes>
      </div>
  );
}

export default App;
