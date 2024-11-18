import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Lodging from '../Lodging/Lodging';
import Info from '../Info/Info';
import Error from '../Error/Error';

function RoutesComponent(){
    return (
        <Routes>
            {/* Route par défaut redirige vers /home */}
            <Route path="/" element={<Navigate to="/home" />} />
            
            {/* Route pour la page d'accueil */}
            <Route path="/home" element={<Home />} />

            {/* Route pour la page ficheLogement */}
            <Route path="/lodging/:id" element={<Lodging />} />
            
            {/* Route pour la page A propos */}
            <Route path="/Info" element={<Info />} />

            {/* Page d'erreur pour les routes non définies */}
            <Route path="*" element={<Error/>} />
        </Routes>
    )
};

export default RoutesComponent;
