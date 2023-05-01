import React, { Fragment } from "react";
import Navbar from "./Navbar";
import Imagen1 from "../assets/Imagen1.gif"
import './Home.css'

function Home() {
    return (
        <Fragment>
            <Navbar />
            <div className="home-container">
                <div className="home-description">
                    <h1>Bienvenido</h1>
                    <p>Aquí encontrarás todo lo relacionado con Cerberus, el sistema de criptomonedas más avanzado del mercado.</p>
                </div>
                <div className="circle-container">
                    <img src={Imagen1} alt="Imagen Cerberus" className="circle-image" />
                </div>
            </div>
        </Fragment>
    );
}

export default Home;
