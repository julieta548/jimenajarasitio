import React from 'react'
import Carousel from "../Carrusel/Carousel";
import './Servicios.css'
import { Button } from 'bootstrap';

function Servicios() {
    return (
        <div id='servicios'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a6a6a6" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,229.3C384,213,480,203,576,170.7C672,139,768,85,864,64C960,43,1056,53,1152,74.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className='servicios'>
                <div>
                    <h1 className='titulo-1'>Mis servicios</h1>
                    <p className='parrafo-servicios'>Explorá una amplia gama de servicios personalizados
                        diseñados para realzar tu estilo y resaltar tu individualidad. Desde ajustes
                        y modificaciones elegantes hasta creaciones a medida, en mi taller de modista,
                        tu visión cobra vida en cada puntada.
                    </p>

                </div>
                <div className='servicios-lista'>
                    <div className='btn item-servicio'>
                        <img className='item-servicio__imagen-1' src="img/costura1.png" alt="" />
                        <div className="superposicion"></div>
                        <h3 className='texto-1'>Creaciones a medida</h3>
                    </div>
                    <div className='btn item-servicio'>
                        <img className='item-servicio__imagen-2' src="img/costura2.png" alt="" />
                        <div className="superposicion"></div>
                        <h3 className='texto-2'>Confección de Ropa para Ocasiones Especiales</h3>
                    </div>
                    <div className='btn item-servicio'>
                        <img className='item-servicio__imagen-3' src="img/costura3.png" alt="" />
                        <div className="superposicion"></div>
                        <h3 className='texto-3'>Reparación de Prendas</h3>
                    </div>
                    <div className='btn item-servicio'>
                        <img className='item-servicio__imagen-4' src="img/costura4.png" alt="" />
                        <div className="superposicion"></div>
                        <h3 className='texto-4'>Confección de Ropa para Niños</h3>
                    </div>
                    
                    {/* <Carousel /> */}
                </div>
                <button className='btn boton-contacto'>Contactame</button>
            </div>

            <svg className='svg-servicios' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a6a6a6" fill-opacity="1" d="M0,288L48,277.3C96,267,192,245,288,229.3C384,213,480,203,576,170.7C672,139,768,85,864,64C960,43,1056,53,1152,74.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

        </div>
    )
}

export { Servicios }