import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './assets/logo.png';
import logofooter from './assets/LogoFooter.png';
import './styles/App.scss';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <Router>
      <header>
        <img src={logo} alt='Logo'/>
        <nav>
          <ul>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/info">A Propos</Link></li>
          </ul>
        </nav>
      </header>

      <Routes/>
     
      <footer>
        <img src={logofooter} alt='Logo footer'/>
        <h3>© 2020 Kasa. All rights reserved</h3>
      </footer>
    </Router>
  );
}

export default App;
