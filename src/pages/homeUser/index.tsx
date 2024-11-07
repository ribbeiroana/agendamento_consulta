import React from 'react';
import { Container, Cards, CardSmall, CardAverage, CardBig } from './style';

import Menu from '../../components/Menu';
import Search from '../../components/Search';
const HomeUser = () => {
  return (
    <Container>
      <Menu />
      <Search />
      <h2>Olá</h2>

      <Cards>

        <CardSmall>
        <h3 className='title-card-small'>12</h3>
        <p>Agendamentos</p>
        </CardSmall>

        <CardAverage />

      </Cards> 
      
      <CardBig />
    </Container>
  )
}

export default HomeUser;