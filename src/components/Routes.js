// src/routes/Routes.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import FicheLogement from '../components/FicheLogement';
import Info from '../components/Info';
import Erreur from '../components/Erreur';

function RoutesComponent(){
    return (
        <Routes>
            {/* Route par défaut redirige vers /home */}
            <Route path="/" element={<Navigate to="/home" />} />
            
            {/* Route pour la page d'accueil */}
            <Route path="/home" element={<Home />} />

            {/* Route pour la page ficheLogement */}
            <Route path="/ficheLogement/:id" element={<FicheLogement />} />
            
            {/* Route pour la page A propos */}
            <Route path="/info" element={<Info />} />

            {/* Page d'erreur pour les routes non définies */}
            <Route path="*" element={<Erreur />} />
        </Routes>
    )
};

export default RoutesComponent;
