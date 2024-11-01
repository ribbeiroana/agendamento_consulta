import React from 'react';
import './style.css'
import Menu from '../../components/Menu';
import Search from '../../components/Search';

const HomeProfessional = () => {
  return (
    <div className="container">
      <Menu />
      <Search />
      <div className="container-content">
        <div className="card-small">
          <h3 className='title-card-small'>Olá</h3>
        </div>
      </div>
      <div className="card-big">
        <div className="card-small-gray">
          <h3 className='title-card-smal-gray'>Consultas agendadas</h3>
        </div>
        <div className="card-small-gray">
        <h3 className='title-card-smal-gray'>Horários disponíveis</h3>
        </div>
      </div>
    </div>
  )
}

export default HomeProfessional;