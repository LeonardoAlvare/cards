import React, { useState } from 'react';
import '../styles/services.css';

const Services = () => {
    const servicios = [
        {
            id: 1,
            titulo: "User Management",
            imagen: 'https://img.freepik.com/vector-premium/cute-programador-depuracion-codigo-vector-dibujos-animados_865091-13405.jpg',
            detalles: "This service allows users to register on the platform by providing basic information such as first name, last name, email, password and the role they will play (client or freelancer). It also includes features for logging in, recovering passwords and editing the profile, ensuring that personal information is always up to date.",
        },
        {
            id: 2,
            titulo: "Project Management",
            imagen: 'https://img.freepik.com/vector-premium/cute-programador-depuracion-codigo-vector-dibujos-animados_865091-13405.jpg',
            detalles: "Clients can create, edit and delete projects, specifying details such as title, description, skills required and budget. This service allows freelancers to browse available projects and apply for those that fit their skills and preferences.",
        },
        {
            id: 3,
            titulo: "Proposal Management",
            imagen: 'https://img.freepik.com/vector-premium/cute-programador-depuracion-codigo-vector-dibujos-animados_865091-13405.jpg',
            detalles: "Freelancers can submit customized proposals for projects, including details such as rates, estimated times, and messages for clients. Clients, in turn, have the ability to review these proposals, accept or reject them, efficiently managing the selection of the ideal freelancer.",
        },
    ];

    const [servicioSeleccionado, setServicioSeleccionado] = useState(null);

    const verDetalles = (servicio) => {
        setServicioSeleccionado(servicio);
    };

    return (
        <div className="services-container">
            <h1>Our Services</h1>
            <div className="tarjetas-container">
                {servicios.map((servicio) => (
                    <div key={servicio.id} className="tarjeta">
                        <img src={servicio.imagen} alt={servicio.titulo} className="imagen-tarjeta" />
                        <h3>{servicio.titulo}</h3>                
                        <button onClick={() => verDetalles(servicio)}>View Details</button>
                    </div>
                ))}
            </div>

            {servicioSeleccionado && (
                <div className="detalle">
                    <h2>{servicioSeleccionado.titulo}</h2>
                    <img src={servicioSeleccionado.imagen} alt={servicioSeleccionado.titulo} className="imagen-detalle" />
                    <p><strong>Details:</strong> {servicioSeleccionado.detalles}</p>
                    <button onClick={() => setServicioSeleccionado(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Services;
