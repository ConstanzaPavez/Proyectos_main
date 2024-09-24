import React from 'react';
import { Link } from 'react-router-dom';
import '../css/estilo.css';
import '../css/2doestilo.css';

const HomePage = () => {
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

      <div class="formulario2">
        <h1> Datos para Certificados</h1>
        <nav>
          <div class="form-group">
            <label for="nombres">Nombres: </label>
            <input type="text" id="nombres" name="nombres" />
          </div>

          <div class="form-group">
            <label for="apellidos">Apellidos: </label>
            <input type="text" id="apellidos" name="apellidos" />
          </div>

          <div class="form-group">
            <label for="run">Run: </label>
            <input type="text" id="run" name="run" />
          </div>

          <div className="topnav">
            <ul className="button-container">
              <li><Link to="/FormBautizo">Bautizo</Link></li>
              <li><Link to="/FormMatrimonios">Matrimonio</Link></li>
              <li><Link to="/FormCatequesis">Catequesis</Link></li>
              <li><Link to="/FormConfirmacion">Confirmación</Link></li>
              <li><Link to="/HistorialCertificados">Certificados</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default HomePage;

