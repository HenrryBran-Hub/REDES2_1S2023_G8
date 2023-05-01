import './EstiloEconomia.css'
import React, { useEffect, Fragment, useState } from 'react';
import NavbarCerberus from "./NavbarCerberus";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';


const Economia = () => {

    const [dolar, setDolar] = useState();
    const [euro, setEuro] = useState();
    const [coin, setCoin] = useState();
    const [loadinguno, setLoadinguno] = useState(false);
    const [loadingdos, setLoadingdos] = useState(false);
    const [loadingtres, setLoadingtres] = useState(false);

    useEffect(() => {
        fetch('http://localhost:9000/Cerbero/BackEnd/EconomiaDolar')
            .then(response => response.json())
            .then(data => {
                const datosTransformados = data.map(data => {
                    const Fecha = new Date(data.Fecha);
                    const fechaLocal = Fecha.toLocaleDateString('es-ES'); // Elige tu idioma y país de preferencia                  
                    return {
                        ...data,
                        fecha: fechaLocal,
                    };
                });
                setDolar(datosTransformados);
                setLoadinguno(true);
            })
            .catch(error => console.log(error));

        fetch('http://localhost:9000/Cerbero/BackEnd/EconomiaEuro')
            .then(response => response.json())
            .then(data => {
                const datosTransformados = data.map(data => {
                    const Fecha = new Date(data.Fecha);
                    const fechaLocal = Fecha.toLocaleDateString('es-ES'); // Elige tu idioma y país de preferencia                  
                    return {
                        ...data,
                        fecha: fechaLocal,
                    };
                });
                setEuro(datosTransformados);
                setLoadingdos(true);
            })
            .catch(error => console.log(error));

        fetch('http://localhost:9000/Cerbero/BackEnd/EconomiaCerberCoin')
            .then(response => response.json())
            .then(data => {
                const datosTransformados = data.map(data => {
                    const Fecha = new Date(data.Fecha);
                    const fechaLocal = Fecha.toLocaleDateString('es-ES'); // Elige tu idioma y país de preferencia                  
                    return {
                        ...data,
                        fecha: fechaLocal,
                    };
                });
                setCoin(datosTransformados);
                setLoadingtres(true);
            })
            .catch(error => console.log(error));
    }, []);

    const GraficoBarras = ({ datos }) => {

        if (loadinguno && loadingdos && loadingtres) {

            const datosTransformados = datos.map(data => {
                const Fecha = new Date(data.Fecha);
                const fechaLocal = Fecha.toLocaleDateString('es-ES');
                return {
                    ...data,
                    fecha: fechaLocal,
                };
            });

            const datosPorMes = datosTransformados.reduce((result, dato) => {
                const key = dato.Id
                if (!result[key]) {
                    result[key] = { fecha: dato.fecha, cantidad: 0 }; // inicializamos la cantidad en 0
                }
                result[key].cantidad += dato.Cantidad; // sumamos la cantidad a la clave correspondiente
                return result;
            }, {});

            const datosFinales = Object.values(datosPorMes);

            return (
                <div className="grafico-container">
                    <BarChart width={800} height={400} data={datosFinales}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="fecha" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="cantidad" fill="#8884d8" />
                    </BarChart>
                </div>
            );

        } else {
            return (
                <div className="grafico-container">
                    <p>Espera</p>
                </div>
            );
        }

    };

    const GraficoLineas = ({ datos }) => {

        if (loadinguno && loadingdos && loadingtres) {

            const datosTransformados = datos.map(data => {
                const Fecha = new Date(data.Fecha);
                const fechaLocal = Fecha.toLocaleDateString('es-ES');
                return {
                    ...data,
                    fecha: fechaLocal,
                };
            });

            const datosPorMes = datosTransformados.reduce((result, dato) => {
                const key = dato.Id
                if (!result[key]) {
                    result[key] = { fecha: dato.fecha, cantidad: 0 }; // inicializamos la cantidad en 0
                }
                result[key].cantidad += dato.Cantidad; // sumamos la cantidad a la clave correspondiente
                return result;
            }, {});

            const datosFinales = Object.values(datosPorMes);
            console.log(datosFinales)

            return (
                <div className="grafico-container">
                    <LineChart width={800} height={400} data={datosFinales}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="fecha" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="cantidad" stroke="#8884d8" />
                    </LineChart>
                </div>
            );
        } else {
            return (
                <div className="grafico-container">
                    <p>Espera</p>
                </div>
            );
        }
    };

    return (
        <Fragment>
            <NavbarCerberus />
            <h1 style={{ textAlign: "center" }}>CerbeCoin Atraves del tiempo</h1>
            <hr></hr>
            <div className="form-control">
            <hr></hr>
            <hr></hr>
                    <div>
                        <div className="graficos-container">
                            <div>
                                <div className="titulo-grafico">
                                    <h2 className="grafico-titulo">Precio del Dólar</h2>
                                </div>
                                <GraficoBarras datos={dolar} />
                                <GraficoLineas datos={dolar} />
                            </div>
                            <div>
                                <div className="titulo-grafico">
                                    <h2 className="grafico-titulo">Precio del Euro</h2>
                                </div>
                                <GraficoBarras datos={euro} />
                                <GraficoLineas datos={euro} />
                            </div>
                            <div>
                                <div className="titulo-grafico">
                                    <h2 className="grafico-titulo">Precio del Coin</h2>
                                </div>
                                <GraficoBarras datos={coin} />
                                <GraficoLineas datos={coin} />
                            </div>
                        </div>
                    </div>
                
            </div>
        </Fragment>
    );

};

export default Economia;