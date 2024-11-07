import React from 'react';
import './style.css'
import { Container, ContainerContent, CardBig } from './style';
import Menu from '../../components/Menu';
import Search from '../../components/Search';

const HomeProfessional = () => {
  return (
    <Container>
      <Menu />
      <Search />
      <ContainerContent>
        <div className="card-small">
          <h3 className='title-card-small'>Olá</h3>
        </div>
      </ContainerContent>
      <CardBig>
        <div className="card-small-gray">
          <h3 className='title-card-smal-gray'>Consultas agendadas</h3>
        </div>
        <div className="card-small-gray">
          <h3 className='title-card-smal-gray'>Horários disponíveis</h3>
        </div>
      </CardBig>
    </Container>
  )
}

export default HomeProfessional;