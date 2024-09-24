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
        <img src="logo.png" alt="Logo de la iglesia" className="avatar" />
        <div class="right-content">
          <p>Parroquia blablablablablal</p>
        </div>
      </div>
      <div className="formulario-container" >
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Certificado de Bautizo</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Número del libro:</label>
            <input type="text" name="numeroLibro" value={formData.numeroLibro} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Número de la página:</label>
            <input type="text" name="numeroPagina" value={formData.numeroPagina} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nombre del bautizado:</label>
            <input type="text" name="nombreBautizado" value={formData.nombreBautizado} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Run:</label>
            <input type="text" name="run" value={formData.run} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nacido el día:</label>
            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Lugar de nacimiento del bautizado:</label>
            <input type="text" name="lugarNacimiento" value={formData.lugarNacimiento} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Hijo(a) de:</label>
            <input type="text" name="padre" value={formData.padre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>y de:</label>
            <input type="text" name="madre" value={formData.madre} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Padrinos:</label>
            <input type="text" name="padrinos" value={formData.padrinos} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Doy fe:</label>
            <input type="text" name="doyFe" value={formData.doyFe} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Nota:</label>
            <input type="text" name="nota" value={formData.nota} onChange={handleChange} />
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
            <a href="/"> Volver</a>
            <a href="/VistaFormBautizo"> Formulario Relleno de Bautizo</a>
          </div>
        </form>
      </div>

    </div>
  );
};

export default BaptismForm;

