import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import FicheLogement from './FicheLogement';
import Info from './Info';
import logo from '../assets/logo.png'
import logofooter from '../assets/LogoFooter.png'
import '../styles/App.scss';
import Erreur from './Erreur';

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

      <Routes>
        {/* Route par défaut redirige vers /home */}
        <Route path="/" element={<Navigate to="/home" />} />
        
        {/* Route pour la page d'accueil */}
        <Route path="/home" element={<Home />} />

        {/* Route pour la page ficheLogement */}
        <Route path="/ficheLogement/:id" element={<FicheLogement />} />
    
        {/* Route pour la page A propos */}
        <Route path="/info" element={<Info />} />
       
        <Route path="*" element={<Erreur />} />
      </Routes>

      <footer>
        <img src={logofooter} alt='Logo footer'/>
        <h3>© 2020 Kasa. All rights reserved</h3>
      </footer>
    </Router>
  );
}

export default App;