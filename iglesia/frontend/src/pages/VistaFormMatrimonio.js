import React, { useState } from 'react';
import '../css/estilo.css';
import '../css/2doestilo.css';
import '../css/prueba.css';

const MarriageCertificateForm = () => {
  const [formData, setFormData] = useState({
    numeroLibro: '',
    numeroPagina: '',
    nombreParroquia: 'Parroquia San Francisco de Asís',
    fecha: '',
    nombreSacerdote: '',
    nombreNovio: '',
    lugarNacimientoNovio: '',
    padreNovio: '',
    madreNovio: '',
    nombreNovia: '',
    lugarNacimientoNovia: '',
    padreNovia: '',
    madreNovia: '',
    testigos: '',
    issueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se puede manejar el envío de los datos del formulario
    console.log(formData);
  };

  return (
    <div class="todo">
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
        <div class="right-content">

          <p>Parroquia blablablablablal</p>
        </div>
      </div>
      <div className="formulario-container" >
      <h1>Certificado de Matrimonio</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Número del libro:</label>

        </div>
        <div className="form-group">
          <label>Número de la página:</label>

        </div>
        <div className="form-group">
          <label>Parroquia:</label>

        </div>
        <div className="form-group">
          <label>Fecha de matrimonio:</label>

        </div>
        
        <div className="form-group">
          <label>El padre:</label>

        </div>
        <h2>Datos del Novio</h2>
        <div className="form-group">
          <label>Nombre del novio:</label>

        </div>
        <div className="form-group">
          <label>Lugar de nacimiento del novio:</label>

        </div>
        <div className="form-group">
          <label>Padre del novio:</label>

        </div>
        <div className="form-group">
          <label>Madre del novio:</label>

        </div>
        <h2>Datos de la Novia</h2>
        <div className="form-group">
          <label>Nombre de la novia:</label>

        </div>
        <div className="form-group">
          <label>Lugar de nacimiento de la novia:</label>

        </div>
        <div className="form-group">
          <label>Padre de la novia:</label>

        </div>
        <div className="form-group">
          <label>Madre de la novia:</label>

        </div>
        <div className="form-group">
          <label>Testigos del acto:</label>

        </div>
        
        <div className="form-group">
          <label>En constancia, sello y firmo en Concepción el día:</label>

        </div>
        <div className="form-group">
            <label><strong>Firma y timbre Parroquia:</strong></label>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div> 
          <div className="BOTON">
            <button type="submit">Enviar</button>
            <a href="/"> Volver</a>
            <a href="/VistaFormMatrimonio"> Formulario Relleno de Matrimonio</a>
          </div>
      </form>
    </div>
  </div>
  );
};

export default MarriageCertificateForm;

