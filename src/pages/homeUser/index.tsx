import React from 'react';
import './style.css'
import Menu from '../../components/Menu';
import Search from '../../components/Search';

const HomeUser = () => {
  return (
    <div className="container">
      <Menu />
      <Search />
      <h2>Olá</h2>
      <div className="container-content">
        <div className="card-small">
          <h3 className='title-card-small'>12</h3>
          <p>Agendamentos</p>
        </div>
        <div className="card-average"></div>
      </div>
      <div className="card-big"></div>
    </div>
  )
}

export default HomeUser;