import React from 'react'
import './navbar.css'
import Andres from '../../img/logob.jpeg';

const navbar = () => {
  return (
    <header>
      <nav>
        <div className="container">
          <div className='logo'>
            <img src={Andres} alt='' />
          </div>
          <div className='links'>
            <ul>
              <li>
                <a href="#" className='active'>Home</a>
              </li>
              <li>
                <a href="#">Tecnologias</a>
              </li>
              <li>
                <a href="#">Proyectos</a>
              </li>
              <li>
                <a href="#">Contactame</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default navbar
