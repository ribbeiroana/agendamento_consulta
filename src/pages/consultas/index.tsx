import React from 'react';
import './style.css'
import Menu from '../../components/Menu';
import { FaPlusCircle } from "react-icons/fa";

const Consultas = () => {
  return (
    <div className="container">
      <Menu />
      <div className="container-content">
        <div className="card-small">
          <FaPlusCircle />
          <h4>agendar nova consulta</h4>
        </div>
      </div>
      <div className="card-big">
        <h3>Histórico de Consultas</h3>
      </div>
    </div>
  )
}

export default Consultas;