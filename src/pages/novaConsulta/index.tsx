import React from 'react';
import './style.css'
import Menu from '../../components/Menu';

const NovaConsulta = () => {
  return (
    <div className="container">
      <Menu />
      <h1>Nova Consulta</h1>
      <div className="card-big">
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
      <div className="card-average"></div>
      <button className='button-toSchedule'>Agendar</button>
    </div>
  )
}

export default NovaConsulta;