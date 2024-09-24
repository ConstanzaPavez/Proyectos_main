import React, { useState } from 'react';
import '../css/estilo.css';
import '../css/2doestilo.css';

const ConfirmationForm = () => {
  const [formData, setFormData] = useState({
    libro: '',
    pagina: '',
    fecha: '',
    nombreConfirmado: '',
    monsenor: '',
    de: '',
    y: '',
    padrinoMadrina: '',
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
    console.log(formData); // Aquí puedes manejar el envío de los datos del formulario al backend
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
    <div className="formulario-container" >
      <h1>Certificado de Confirmación</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Número del libro:</label>
          <input type="text" name="libro" value={formData.libro} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Número de la página:</label>
          <input type="text" name="pagina" value={formData.pagina} onChange={handleChange}  required />
        </div>
        <div className="form-group" >
          <label>Fecha :</label>
          <input type="date" name="fecha" value={formData.fecha} onChange={handleChange}  required />
        </div>
        <div className="form-group">
          <label>Nombre del confirmado:</label>
          <input type="text" name="nombreConfirmado" value={formData.nombreConfirmado} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Monseñor:</label>
          <input type="text" name="monsenor" value={formData.monsenor} onChange={handleChange} required />
        </div>
        <div className="form-group" >
          <label>Hijo(a) de :</label>
          <input type="text" name="de" value={formData.de} onChange={handleChange}  required />
        </div>
        <div className="form-group">
          <label>y de:</label>
          <input type="text" name="y" value={formData.y} onChange={handleChange} required />
        </div>
        <div className="form-group" >
          <label>Padrino (o) Madrina:</label>
          <input type="text" name="padrinoMadrina" value={formData.padrinoMadrina} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>En constancia, sello y firmo en Concepción el día:</label>
          <input type="date" name="fechaEmision" value={formData.fechaEmision} onChange={handleChange} required />
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
          
          <button type="button"> Volver</button>
          <button type="reset"> Formulario de Confirmación </button>
        </div>
      </form>
    </div>
  </div>
  );
};

export default ConfirmationForm;



