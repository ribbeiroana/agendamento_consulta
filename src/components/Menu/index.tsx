import React from 'react';
import './style.css';

import { FaUserCircle } from "react-icons/fa";
import { IoHome,  IoFileTrayFull } from "react-icons/io5";

const Menu = () => {
  return (
    <div className="menu">

      <div className="menu-soon">
        <img src="#" alt="soon" />
      </div>

      <nav className="menu-items">
        <ul>
        <li><FaUserCircle /> Perfil</li> 
          <li><IoHome /> Inicio</li>
          <li><IoFileTrayFull /> Consulta</li>
        </ul>
      </nav>

      <button className='menu-button'>Sair</button>

    </div>
  )
}

export default Menu;