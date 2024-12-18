import React from 'react';
import { Nav } from '../Nav/nav';
import { faBook, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { NavItem } from '../Nav/navItem';
const HomeClient = () => {
  return (
    <>
      <Nav>
        <NavItem label='Página Inicial' icon={faHouse} href='/' />
        <NavItem label='Perfil' icon={faUser} href='/' />
        <NavItem label='Histórico' icon={faBook} href='/' />
      </Nav>

      <main>
        <div className="container">
          <div className="header-main">
            <div className="header-texts"></div>
            <div className="header-time"></div>
          </div>
          <div className="container-boxs">
            <div className="box-one"></div>
            <div className="box-two"></div>
            <div className="box-three"></div>
          </div>
          <div className="dashboard">
            <div className="box-dashboard"></div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomeClient;