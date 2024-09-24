import React, { useState } from 'react';
import '../css/estilo.css';
import '../css/2doestilo.css';
import '../css/prueba.css';
import imagen from '../img/logo.png';

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
                <img src={imagen} alt="avatar" className="avatar"/>
                    <p>Parroquia blablablablablal</p>
                </div>
            </div>
            <div className="formulario-container" >
                <h1>Certificado de Confirmación</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Número del libro:</label>

                    </div>
                    <div className="form-group">
                        <label>Número de la página:</label>

                    </div>
                    <div className="form-group" >
                        <label>Fecha :</label>

                    </div>
                    <div className="form-group">
                        <label>Nombre del confirmado:</label>

                    </div>
                    <div className="form-group">
                        <label>Monseñor:</label>

                    </div>
                    <div className="form-group" >
                        <label>Hijo(a) de :</label>

                    </div>
                    <div className="form-group">
                        <label>y de:</label>

                    </div>
                    <div className="form-group" >
                        <label>Padrino (o) Madrina:</label>

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
                        <a href="/VistaFormBautizo"> Formulario Relleno de Confirmación</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ConfirmationForm;



