import React from 'react'
import './Navbar.css'

function Navbar() {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <h3 className='titulo-navbar'>Jimena Jara</h3>
                    {/* <img className="navbar-brand marca" src='img/logo-jime.png' href="#"></img> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">Quién Soy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#trabajos">Mis trabajos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { Navbar }