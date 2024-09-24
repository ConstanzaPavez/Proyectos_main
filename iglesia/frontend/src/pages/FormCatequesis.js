import React, { useState } from 'react';
import '../css/estilo.css';
import '../css/2doestilo.css';


const BaptismalCertificateForm = () => {
  const [formData, setFormData] = useState({
    padrino: '',
    madrina: '',
    ahijado: '',
    fechaNacimiento: '',
    rut: '',
    parroquia: '',
    fechaEmision: ''
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
    console.log(formData); // Aquí puedes manejar el envío de los datos del formulario
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
      <div className="formulario-container">
        <h1>CERTIFICADO DE ENCUENTROS BAUTISMALES</h1>
        <p>
          El Párroco de la Parroquia san francisco de Asís Lorenzo Arenas, certifica que han realizado su catequesis pre bautismal en esta:
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label><strong>Padrinos:</strong></label>
            <div>
              <label>Don:</label>
              <input type="text" name="padrino" value={formData.padrino} onChange={handleChange} required />
            </div>
            <br></br>
            <div>
              <label>Doña:</label>
              <input type="text" name="madrina" value={formData.madrina} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-group">
            <label><strong>Ahijado (a):</strong></label>
            <input type="text" name="ahijado" value={formData.ahijado} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label><strong>Fecha de nacimiento:</strong></label>
            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required  />
          </div>

          <div className="form-group">
            <label><strong>RUT:</strong></label>
            <input type="text" name="rut" value={formData.rut} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <p>Se extiende el presente certificado para ser presentado en la Parroquia:</p>
            <input type="text" name="parroquia" value={formData.parroquia} onChange={handleChange} required  />
          </div>

          <div className="form-group">
            <p>En donde deberán cumplir con los requisitos pertinentes.</p>
          </div>

          <div className="form-group">
            <label><strong>Fecha de emisión:</strong></label>
            <input type="date" name="fechaEmision" value={formData.fechaEmision} onChange={handleChange} required  />
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
            <button type="button">Volver</button>
            <button type="reset">Restablecer formulario</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BaptismalCertificateForm;
