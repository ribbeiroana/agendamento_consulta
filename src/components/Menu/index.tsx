import React from 'react';
import { Header, HeaderSoon, HeaderItems, Button } from './style';


import { FaUserCircle } from "react-icons/fa";
import { IoHome, IoFileTrayFull } from "react-icons/io5";

const Menu = () => {
  return (
    <Header>

      <HeaderSoon>
        <img src="#" alt="logo" />
      </HeaderSoon>

      <HeaderItems>
        <ul>
          <li><FaUserCircle /> Perfil</li>
          <li><IoHome /> Inicio</li>
          <li><IoFileTrayFull /> Consulta</li>
        </ul>
      </HeaderItems>

      <Button>Sair</Button>

    </Header>
  )
}

export default Menu;