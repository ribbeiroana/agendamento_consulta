import React from 'react';
import './style.css'
import Menu from '../../components/Menu';

const Agenda = () => {
  return (
    <div className="container">
      <Menu />
      <h1>Agenda</h1>
      <div className="card-big"></div>
    </div>
  )
}

export default Agenda;