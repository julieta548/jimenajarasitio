import React from 'react';
import './About.css';

function About() {
    return (
        <div className='about'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f2cbbc" fill-opacity="1" d="M0,320L48,272C96,224,192,128,288,85.3C384,43,480,53,576,101.3C672,149,768,235,864,256C960,277,1056,235,1152,208C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className='elementos-about'>
                <div className='presentacion'>
                    <h1 className='titulo-presentacion'>¡Hola, soy Jime!</h1>
                    <p className='parrafo-presentacion'>
                        Desde muy joven, la moda y la creatividad han sido mi pasión.
                        Mi viaje en el mundo de la confección comenzó con la curiosidad de desarmar y volver a armar
                        prendas para darles un toque único.
                    </p>
                    <p className="parrafo-presentacion">
                        Con el tiempo, esa pasión se convirtió en mi vocación
                        y decidí llevar mis habilidades al siguiente nivel.
                        Soy una modista apasionada y comprometida en convertir tus sueños en prendas con vida propia.
                        Cada puntada, cada detalle y cada elección de tela se hacen con amor y atención meticulosa.</p>
                    <div className="fotos">
                        <img className='foto-about' src="img/mujer.svg" alt="mujer-sentada" />
                    </div>
                </div>
                <div className='presentacion-2'>
                    <div className="fotos">
                        <img className='foto-about' src="img/mujeres.svg" alt="" />
                    </div>
                    <p className='parrafo-presentacion'>
                        Mi objetivo es crear piezas que no solo te vistan, sino que también te hagan sentir alguien hermoso y seguro.
                        Mi taller es un espacio donde las ideas toman forma y donde la moda se convierte en arte.
                    </p>
                    <p className="parrafo-presentacion">
                        Cada consulta es una oportunidad para colaborar con vos, entender tus necesidades
                        y brindarte soluciones personalizadas. Estoy acá para escuchar tus ideas,
                        asesorarte en la elección de telas y estilos, y crear prendas que se adapten
                        perfectamente a vos.
                    </p>
                </div>
            </div>

        </div>
    )
}

export { About }