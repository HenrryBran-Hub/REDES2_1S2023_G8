import './EstilosAdministrador.css';
import ImagenD from "../assets/ImagenD.gif"
import React, { useEffect, Fragment, useState } from 'react';
import NavbarCerberus from "./NavbarCerberus";

const Desarrollador = () => {

    const [datos, setDatos] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://localhost:9000/Cerbero/BackEnd/Desarrollador');
              const data = await response.json();
              setDatos(data);
            } catch (error) {
              console.log(error);
            }
          };
        
          fetchData();
    }, []);

    const handlePrev = () => {
        setIndex(index => (index === 0 ? datos.length - 1 : index - 1));
    };

    const handleNext = () => {
        setIndex(index => (index === datos.length - 1 ? 0 : index + 1));
    };

    return (
        <Fragment>
            <NavbarCerberus />
            <h1 style={{ textAlign: "center" }}>Desarrollador</h1>
            <hr></hr>
            <div className="administrador-container">
                {datos.length > 0 ? (
                    <div className="administrador-card">
                        <img className="administrador-image" src={ImagenD} alt="Imagen Cerberus" />
                        <div className="administrador-card-body">
                            <h2>{datos[index].Nombres} {datos[index].Apellidos}</h2>
                            <p><strong>Id Desarrolladorr:</strong> {datos[index].Id}</p>
                            <p><strong>Carnet:</strong> {datos[index].Carnet}</p>
                            <p><strong>Curso:</strong> {datos[index].Curso}</p>
                            <p><strong>Descripcion:</strong> {datos[index].Descripcion}</p>
                        </div>
                        <div className="administrador-buttons">
                            <button onClick={handlePrev}>Anterior</button>
                            <button onClick={handleNext}>Siguiente</button>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </Fragment>
    );
};

export default Desarrollador;
