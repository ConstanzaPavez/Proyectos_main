import React, { useState } from 'react';
import axios from 'axios';
import '../css/estilo.css';



const CertificateHistory = () => {
  const [run, setRun] = useState('');
  const [certificates, setCertificates] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/api/certificates/search?run=${run}`);
      setCertificates(response.data);
    } catch (error) {
      console.error('Error al buscar certificados', error);
    }
  };

  return (
    <div className="todo">
      <div class="navbar">

        <a class="" href="/"> Busqueda </a>
        <a href=""> Reserva </a>
        <a href=""> Inventario </a>
        <a href=""> Aporte </a>
        <a href=""> Donación </a>
        <a href=""> Información </a>
        <div class="topnav-right">
          <a href="#search"> Buscar </a>
          <a href="#about"> Login </a>
        </div>
      </div>

      <div class="content">
        <div class="left-content">
          <p>Arzobispado de la Santísima Concepción</p>
        </div>
        <img src="logo.png" alt="Logo de la iglesia" className="avatar" />
        <div class="right-content">
          <p>Parroquia blablablablablal</p>
        </div>
      </div>
      <div>
        <h1>Historial de Certificados</h1>
        <form onSubmit={handleSearch}>
          <div>
            <label>Buscar por RUN:</label>
            <input
              type="text"
              value={run}
              onChange={(e) => setRun(e.target.value)}
              required
            />
          </div>
          <button type="submit">Buscar</button>
        </form>

        {certificates.length > 0 && (
          <div>
            <h2>Resultados:</h2>
            <ul>
              {certificates.map((certificate) => (
                <li key={certificate.id}>
                  {certificate.confirmandName} - {certificate.run} - {certificate.issueDate}
                  {/* Muestra otros campos según sea necesario */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateHistory;
