import React, { useState } from 'react';
import '../css/estilo.css';
import '../css/2doestilo.css';
import '../css/prueba.css';

const BaptismForm = () => {
  const [formData, setFormData] = useState({
    bookNumber: '',
    pageNumber: '',
    date: '',
    baptizedName: '',
    run: '',
    birthDate: '',
    birthPlace: '',
    fatherName: '',
    motherName: '',
    godparents: '',
    certifier: '',
    note: '',
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
    // Aquí puedes manejar el envío de los datos del formulario, por ejemplo, enviarlos a tu backend
    console.log(formData);
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
        <div class="right-content">

          <p>Parroquia blablablablablal</p>
        </div>
      </div>
      <div className="formulario">
        <h1>Certificado de Bautizo</h1>
        <form onSubmit={handleSubmit} className="personal-data-form">
          <div className="form-group">
            <label>Número del libro:</label>
            <input type="text" name="bookNumber" value={formData.bookNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Número de la página:</label>
            <input type="text" name="pageNumber" value={formData.pageNumber} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nombre del bautizado:</label>
            <input type="text" name="baptizedName" value={formData.baptizedName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Run:</label>
            <input type="text" name="run" value={formData.run} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nacido el día:</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Lugar de nacimiento del bautizado:</label>
            <input type="text" name="birthPlace" value={formData.birthPlace} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Hijo(a) de:</label>
            <input type="text" name="aName" value={formData.aName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>y de:</label>
            <input type="text" name="bName" value={formData.bName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Padrinos:</label>
            <input type="text" name="godparents" value={formData.godparents} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Doy fe:</label>
            <input type="text" name="certifier" value={formData.certifier} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nota:</label>
            <input type="text" name="note" value={formData.note} />
          </div>
          <div className="form-group">
            <label>En constancia, sello y firmo en Concepción el día:</label>
            <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <div className="button-container">
              <a href="/FormBautizo">Enviar</a>
              <a href="/" >Volver</a>
              <a href="/VistaFormBautizo"> Vista Formulario Completado</a>
            </div>
          </div>


        </form>

      </div>

    </div>
  );
};

export default BaptismForm;

