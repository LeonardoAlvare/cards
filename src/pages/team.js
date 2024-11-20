import React, { useState } from 'react';
import '../styles/team.css';

function Team() {
    const miembros = [
        {
            id: 1,
            nombre: 'Leonardo Reyes',
            rol: 'Backend Developer',
            descripcion: 'Expert in building and maintaining server-side applications, databases, and APIs.',
            imagen: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-computer-programmer-png-image_12147261.png'
        },
        {
            id: 2,
            nombre: 'Alejandro Paez ',
            rol: 'Frontend Developer',
            descripcion: 'Specializes in creating user-friendly web interfaces and optimizing user experience using HTML, CSS, and JavaScript.',
            imagen: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-computer-programmer-png-image_12147261.png'
        },
        {
            id: 3,
            nombre: 'Santiago Machacón ',
            rol: 'Frontend Developer',
            descripcion: 'Skilled in designing and developing engaging visual interfaces and ensuring responsive design for various devices.',
            imagen: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-computer-programmer-png-image_12147261.png'
        },
        {
            id: 4,
            nombre: 'Mauricio Periñan',
            rol: 'Frontend Developer',
            descripcion: 'Experienced in managing frontend projects, collaborating with designers, and ensuring code quality and project deadlines.',
            imagen: 'https://png.pngtree.com/png-clipart/20230914/original/pngtree-computer-programmer-png-image_12147261.png'
        },
    ];


    const [miembroSeleccionado, setMiembroSeleccionado] = useState(null);

    const seleccionarMiembro = (miembro) => {
        setMiembroSeleccionado(miembro);
    };

    return (
        <div className="equipo-container">
            <h1 className="titulo-equipo">Our Team</h1>
            <div className="tarjetas-container">
                {miembros.map((miembro) => (
                    <div
                        key={miembro.id}
                        className="tarjeta"
                        onClick={() => seleccionarMiembro(miembro)}
                    >
                        <div className="imagen-tarjeta-container">
                            <img src={miembro.imagen} alt={miembro.nombre} className="imagen-tarjeta" />
                        </div>
                        <h2>{miembro.nombre}</h2>
                        <p>{miembro.rol}</p>
                    </div>
                ))}
            </div>

            {miembroSeleccionado && (
                <div className="detalle-miembro">
                    <h2>Details of {miembroSeleccionado.nombre}</h2>
                    <div className="imagen-detalle-container">
                        <img src={miembroSeleccionado.imagen} alt={miembroSeleccionado.nombre} className="imagen-detalle" />
                    </div>
                    <p><strong>Role:</strong> {miembroSeleccionado.rol}</p>
                    <p><strong>Description:</strong> {miembroSeleccionado.descripcion}</p>
                </div>
            )}
        </div>
    );
}

export default Team;
