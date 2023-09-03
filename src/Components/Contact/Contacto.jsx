import React from 'react'
import './Contacto.css'

function Contacto() {
  return (
    <div>
      <div className="contacto">
        <div className="datos">
          <h2 className='titulo-contacto'>¡Contactame!</h2>
          <div className='datos-contacto'>
            <h4 className='item-datos'><i class="bi bi-geo-alt-fill"></i> Av. Bandera de los Andes 1969</h4>
            <h4 className='item-datos'><i class="bi bi-telephone-fill"></i><a href="https://wa.me/5492613071047">  261765678</a></h4>
          </div>
        </div>
        <div className="links">
          <h3><a href="https://www.instagram.com/jimenajaracreaciones/" target='_blank'><i class="bi bi-instagram icono"></i></a></h3>
          <h3><a href=""><i class="bi bi-facebook icono" target="_blank"></i></a></h3>
          <h3><a href="https://wa.me/5492613071047" target='_blank'><i class="bi bi-whatsapp icono"></i></a></h3>
        </div>
      </div>
    </div>
  )
}

export default Contacto