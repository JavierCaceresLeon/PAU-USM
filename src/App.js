import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Postular from './pages/Postular';
import Resultados from './pages/Resultados';
import MisAyudantias from './pages/MisAyudantias';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/postular" element={<Postular />} />
                <Route path="/resultados" element={<Resultados />} />
                <Route path="/ayudantias" element={<MisAyudantias />} />
            </Routes>
        </Router>
    );
}

export default App;
