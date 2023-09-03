import React from 'react';
import './hero.css';

function Hero() {
  return (
    <div id='inicio' className='hero'>
        <div className='encabezado'>
            <h1 className='titulo-hero'>Jimena Jara</h1>
            <h3 className='subtitulo-hero'>Modista</h3>
            <button className='btn boton-hero'><a href="https://wa.me/5492613071047" target='_blank'>Contactame</a></button>
        </div>
    </div>
  )
}

export { Hero }