import React from 'react';
import './style.css'
import Menu from '../../components/Menu';

const Perfil = () => {
  return (
    <div className="container">
      <Menu />
      <h1>Perfil</h1>
      <div className="circule"></div>
      <div className="card-big">
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
        <input type="text"/>
      </div>
    </div>
  )
}

export default Perfil;