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
                    </div>
                    <div className="form-group">
                        <label>Número de la página:</label>

                    </div>
                    <div className="form-group">
                        <label>Nombre del bautizado:</label>

                    </div>
                    <div className="form-group">
                        <label>Run:</label>

                    </div>
                    <div className="form-group">
                        <label>Nacido el día:</label>

                    </div>
                    <div className="form-group">
                        <label>Lugar de nacimiento del bautizado:</label>

                    </div>
                    <div className="form-group">
                        <label>Hijo(a) de:</label>

                    </div>
                    <div className="form-group">
                        <label>y de:</label>

                    </div>
                    <div className="form-group">
                        <label>Padrinos:</label>

                    </div>
                    <div className="form-group">
                        <label>Doy fe:</label>

                    </div>
                    <div className="form-group">
                        <label>Nota:</label>

                    </div>
                    <div className="form-group">
                        <label>En constancia, sello y firmo en Concepción el día:</label>

                    </div>

                    <div className="form-group">
                        <div className="button-container">
                            <a href="/FormBautizo">Enviar</a>
                            <a href="/" >Volver</a>
                        </div>
                    </div>




                </form>

            </div>

        </div>
    );
};

export default BaptismForm;

