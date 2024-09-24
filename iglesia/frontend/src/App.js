import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Certificados from './pages/Certificados'; // Actualiza esta línea
import FormBautizo from './pages/FormBautizo';
import FormMatrimonios from './pages/FormMatrimonios';
import FormCatequesis from './pages/FormCatequesis';
import FormConfirmacion from './pages/FormConfirmacion';
import HistorialCertificados from './pages/HistorialCertificados';
import VistaFormBautizo from './pages/VistaFormBautiso';
import VistaFormCatequesis from 'pages/VistaFormCatequesis';
import VistaFormConfirmacion from 'pages/VistaFormConfirmacion';
import VistaFormMatrimonio from 'pages/VistaFormMatrimonio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Certificados />} />
        <Route path="/FormBautizo" element={<FormBautizo />} />
        <Route path="/FormMatrimonios" element={<FormMatrimonios />} />
        <Route path="/FormCatequesis" element={<FormCatequesis />} />
        <Route path="/FormConfirmacion" element={<FormConfirmacion />} />
        <Route path="/HistorialCertificados" element={<HistorialCertificados />} />
        <Route path="/VistaFormBautizo" element={<VistaFormBautizo />} />
        <Route path="/VistaFormCatequesis" element={<VistaFormBautizo />} />
        <Route path="/VistaFormConfirmacion" element={<VistaFormBautizo />} />
        <Route path="/VistaFormMatrimonio" element={<VistaFormBautizo />} />

      </Routes>
    </Router>
  );
}

export default App;



