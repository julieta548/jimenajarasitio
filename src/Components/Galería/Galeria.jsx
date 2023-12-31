import React from 'react'
import Carousel from "../Carrusel/Carousel";
import './Galeria.css'

function Galeria() {
    return (
        <div id='trabajos'>
            <div className='galeria'>
                <h1>Mis trabajos</h1>
                <p className='parrafo-galeria'>Explorá una amplia gama de servicios personalizados
                    diseñados para realzar tu estilo y resaltar tu individualidad.
                    Desde ajustes y modificaciones elegantes hasta creaciones a medida,
                    en mi taller de modista, tu visión cobra vida en cada puntada.
                </p>
                <div className='trabajos'>
                    <div className='item-trabajos-1'></div>
                    <div className='item-trabajos-2'></div>
                    <div className='item-trabajos-3'></div>
                    <div className='item-trabajos-4'></div>
                    {/* <Carousel /> */}
                </div>
            </div>

        </div>
    )
}
export default Galeria