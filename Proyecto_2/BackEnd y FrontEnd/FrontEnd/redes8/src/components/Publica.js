import './EstilosLogin.css';
import ImagenP from "../assets/ImagenP.gif"
import React, { useEffect, Fragment, useState } from 'react';
import Navbar from "./NavbarCerberus";

const Publica = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [firstNoticiaIndex, setFirstNoticiaIndex] = useState(0);
    const noticiasPorPagina = 4;
    const [totalNoticias, setTotalNoticias] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch('http://3.136.26.200:9000/Cerbero/BackEnd/Publica');
              const data = await response.json();
              setDatos(data);
              setLoading(false);
              setTotalNoticias(data.length);
            } catch (error) {
              console.log(error);
            }
          };
        
          fetchData();
    }, []);

    const renderNoticias = () => {
        return (
            <div className="row">
                <div className="col-md-6 d-flex justify-content-between">
                    {datos.slice(firstNoticiaIndex, firstNoticiaIndex + 2).map(noticia => (
                        <div className="card" key={noticia.Id}>
                            <div className="card-body">
                                <h5 className="card-title">{noticia.Nombre}</h5>
                                <p className="card-text">{noticia.Descripcion}</p>
                                <img src={ImagenP} alt="Imagen Cerberus" className="card-img-top" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-md-6 d-flex justify-content-between">
                    {datos.slice(firstNoticiaIndex + 2, firstNoticiaIndex + 4).map(noticia => (
                        <div className="card" key={noticia.Id}>
                            <div className="card-body">
                                <h5 className="card-title">{noticia.Nombre}</h5>
                                <p className="card-text">{noticia.Descripcion}</p>
                                <img src={ImagenP} alt="Imagen Cerberus" className="card-img-top" />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="d-flex flex-column align-items-center mt-5">
                    <div className="mt-3">
                        <button className="btn btn-primary mr-2" disabled={currentIndex === 0} onClick={retrocederNoticias}>Anterior</button>
                        <button className="btn btn-primary" disabled={currentIndex + 4 >= datos.length} onClick={ avanzarNoticias}>Siguiente</button>
                    </div>
                </div>
            </div>
        );
    };

    const renderUltimaNoticia = () => {
        const ultimaNoticia = datos[datos.length - 1];
        return (
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{ultimaNoticia.Nombre}</h5>
                            <p className="card-text">{ultimaNoticia.Descripcion}</p>
                            <img src={ImagenP} alt="Imagen Cerberus" className="card-img-top" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    const avanzarNoticias = () => {
        setFirstNoticiaIndex(firstNoticiaIndex + noticiasPorPagina);
        if (currentIndex + 4 < totalNoticias) {
            setCurrentIndex(currentIndex + 4);
        }

    };

    const retrocederNoticias = () => {
        setFirstNoticiaIndex(firstNoticiaIndex - noticiasPorPagina);
        if (currentIndex - 4 >= 0) {
            setCurrentIndex(currentIndex - 4);
        }
    };

    return (
        <Fragment>
            <Navbar />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center mb-3">Noticias Públicas</h1>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-12">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <div>
                                {renderNoticias()}
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {loading ? (
                            <p>Loading...</p>
                        ) : (
                            renderUltimaNoticia()
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Publica;      
