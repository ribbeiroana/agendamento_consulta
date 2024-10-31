import React from 'react';
import './style.css'
import Menu from '../../components/Menu';
import Search from '../../components/Search';

const HomeUser = () => {
  return (
    <div className="container">
      <Menu />
      <Search />
      <div className="container-content">
        <div className="card-small"></div>
        <div className="card-average"></div>
      </div>
      <div className="card-big"></div>
    </div>
  )
}

export default HomeUser;