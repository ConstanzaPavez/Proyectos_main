import React, { useState } from 'react';

const FormularioCertificadoBautizo = () => {
  const [formData, setFormData] = useState({
    numeroLibro: '',
    numeroPagina: '',
    nombreBautizado: '',
    run: '',
    fechaNacimiento: '',
    lugarNacimiento: '',
    padre: '',
    madre: '',
    padrinos: '',
    doyFe: '',
    nota: '',
    fechaEmision: '',
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
    // Aquí puedes manejar el envío de los datos del formulario
    console.log(formData);
  };

  return (
    <div className="formulario-container" style={{ backgroundColor: '#fbe9d2', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Certificado de Bautizo</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Número del libro:</label>
          <input type="text" name="numeroLibro" value={formData.numeroLibro} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Número de la página:</label>
          <input type="text" name="numeroPagina" value={formData.numeroPagina} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Nombre del bautizado:</label>
          <input type="text" name="nombreBautizado" value={formData.nombreBautizado} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Run:</label>
          <input type="text" name="run" value={formData.run} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Nacido el día:</label>
          <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Lugar de nacimiento del bautizado:</label>
          <input type="text" name="lugarNacimiento" value={formData.lugarNacimiento} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Hijo(a) de:</label>
          <input type="text" name="padre" value={formData.padre} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>y de:</label>
          <input type="text" name="madre" value={formData.madre} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Padrinos:</label>
          <input type="text" name="padrinos" value={formData.padrinos} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Doy fe:</label>
          <input type="text" name="doyFe" value={formData.doyFe} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>Nota:</label>
          <input type="text" name="nota" value={formData.nota} onChange={handleChange} style={{ width: '100%', padding: '8px' }} />
        </div>
        <div className="form-group" style={{ marginBottom: '15px' }}>
          <label>En constancia, sello y firmo en Concepción el día:</label>
          <input type="date" name="fechaEmision" value={formData.fechaEmision} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCertificadoBautizo;